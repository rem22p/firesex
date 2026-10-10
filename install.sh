#!/usr/bin/env bash
# firesex installer (Linux): puts user.js, userChrome.css and userContent.css into a Firefox profile.
# Default is symlinks, so `git pull` in this repo updates the browser config on the next restart.

set -euo pipefail

FILES_ROOT=(user.js)
FILES_CHROME=(userChrome.css userContent.css)

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROFILE=""
MODE="link"
DRY=0
UNINSTALL=0

usage() {
    cat <<EOF
Использование: ./install.sh [опции]

  -p, --profile ПУТЬ   папка профиля Firefox (по умолчанию определяется сам)
  -c, --copy           копировать файлы вместо симлинков
  -n, --dry-run        только показать, что будет сделано
  -u, --uninstall      убрать установленные файлы из профиля
  -h, --help           эта справка
EOF
}

say()  { printf '%s\n' "$*"; }
warn() { printf 'ВНИМАНИЕ: %s\n' "$*" >&2; }
die()  { printf 'ОШИБКА: %s\n' "$*" >&2; exit 1; }
run()  { if [ "$DRY" = 1 ]; then say "  [dry-run] $*"; else "$@"; fi; }

while [ $# -gt 0 ]; do
    case "$1" in
        -p|--profile)   [ $# -ge 2 ] || die "$1 требует путь"; PROFILE="$2"; shift ;;
        -c|--copy)      MODE="copy" ;;
        -n|--dry-run)   DRY=1 ;;
        -u|--uninstall) UNINSTALL=1 ;;
        -h|--help)      usage; exit 0 ;;
        *)              usage >&2; die "неизвестная опция: $1" ;;
    esac
    shift
done

# Каталоги, где Firefox держит profiles.ini: обычный, старый, snap, flatpak.
BASES=(
    "$HOME/.config/mozilla/firefox"
    "$HOME/.mozilla/firefox"
    "$HOME/snap/firefox/common/.mozilla/firefox"
    "$HOME/.var/app/org.mozilla.firefox/.mozilla/firefox"
)

# Профиль по умолчанию: сначала секция [Install*] (её использует сам Firefox), потом [Profile*] с Default=1.
find_profile() {
    local base ini rel
    for base in "${BASES[@]}"; do
        ini="$base/profiles.ini"
        [ -f "$ini" ] || continue
        rel="$(awk -F= '/^\[/{s=$0} s ~ /^\[Install/ && $1=="Default"{print $2; exit}' "$ini")"
        if [ -n "$rel" ]; then
            case "$rel" in /*) echo "$rel" ;; *) echo "$base/$rel" ;; esac
            return 0
        fi
        rel="$(awk -F= '
            /^\[/{ if (def && path) {print rel "|" path; found=1; exit}; path=""; rel=1; def=0 }
            $1=="Path"{path=$2} $1=="IsRelative"{rel=$2} $1=="Default" && $2=="1"{def=1}
            END{ if (!found && def && path) print rel "|" path }' "$ini")"
        if [ -n "$rel" ]; then
            local isrel="${rel%%|*}" path="${rel#*|}"
            if [ "$isrel" = 1 ]; then echo "$base/$path"; else echo "$path"; fi
            return 0
        fi
    done
    return 1
}

if [ -z "$PROFILE" ]; then
    PROFILE="$(find_profile)" || die "не нашёл профиль Firefox. Запусти Firefox один раз или передай --profile ПУТЬ"
fi
PROFILE="${PROFILE%/}"
[ -d "$PROFILE" ] || die "нет такой папки профиля: $PROFILE"
[ -f "$PROFILE/prefs.js" ] || [ -f "$PROFILE/times.json" ] || warn "в $PROFILE нет prefs.js, это точно профиль Firefox?"

for f in "${FILES_ROOT[@]}" "${FILES_CHROME[@]}"; do
    [ -f "$SRC/$f" ] || die "в репозитории нет файла $f"
done

say "Репозиторий: $SRC"
say "Профиль:     $PROFILE"
say "Режим:       $([ "$UNINSTALL" = 1 ] && echo удаление || echo "$MODE")"
[ "$DRY" = 1 ] && say "(dry-run, ничего не меняется)"

if pgrep -x firefox >/dev/null 2>&1; then
    warn "Firefox сейчас запущен. Изменения подхватятся после его полного перезапуска."
fi

STAMP="$(date +%Y%m%d-%H%M%S)"

# Уже установлено: симлинк на наш файл, либо копия с таким же содержимым.
is_ours() {
    local src="$1" dst="$2"
    if [ -L "$dst" ]; then
        [ "$(readlink -f "$dst")" = "$(readlink -f "$src")" ]
    else
        [ -f "$dst" ] && cmp -s "$src" "$dst"
    fi
}

install_one() {
    local rel="$1" src="$SRC/$1" dst="$2/$1"
    if is_ours "$src" "$dst"; then
        if { [ "$MODE" = link ] && [ -L "$dst" ]; } || { [ "$MODE" = copy ] && [ ! -L "$dst" ]; }; then
            say "  уже на месте: $rel"
            return
        fi
    fi
    if is_ours "$src" "$dst"; then
        run rm "$dst"
    elif [ -e "$dst" ] || [ -L "$dst" ]; then
        say "  бэкап: $rel -> $rel.bak.$STAMP"
        run mv "$dst" "$dst.bak.$STAMP"
    fi
    if [ "$MODE" = link ]; then
        say "  симлинк: $rel"
        run ln -s "$src" "$dst"
    else
        say "  копия: $rel"
        run cp "$src" "$dst"
    fi
}

uninstall_one() {
    local rel="$1" src="$SRC/$1" dst="$2/$1"
    if [ -e "$dst" ] || [ -L "$dst" ]; then
        if is_ours "$src" "$dst"; then
            say "  удаляю: $rel"
            run rm "$dst"
        else
            warn "$rel в профиле не наш (изменён или другой файл), не трогаю"
        fi
    else
        say "  нет в профиле: $rel"
    fi
}

if [ "$UNINSTALL" = 1 ]; then
    for f in "${FILES_ROOT[@]}"; do uninstall_one "$f" "$PROFILE"; done
    for f in "${FILES_CHROME[@]}"; do uninstall_one "$f" "$PROFILE/chrome"; done
    say ""
    say "Готово. Значения префов остались в prefs.js: удаление user.js дефолты не возвращает."
    say "Сбрось их в about:config (кнопка со стрелкой) или удали профиль."
    exit 0
fi

run mkdir -p "$PROFILE/chrome"
for f in "${FILES_ROOT[@]}"; do install_one "$f" "$PROFILE"; done
for f in "${FILES_CHROME[@]}"; do install_one "$f" "$PROFILE/chrome"; done

say ""
say "Готово. Перезапусти Firefox полностью."
say "Проверка: about:support -> папка профиля; ошибки разбора user.js видны в Browser Console (Ctrl+Shift+J)."
