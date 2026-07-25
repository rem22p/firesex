const { use } = require("react");

user_pref("about.glean.redesign.enabled", false); //about.glean.redesign.enabled - внутренний переключатель отвечающий за включение нового внешенго вида для функций системы Glean. Херня для корп ИИ - кал.

// privacy.
user_pref("privacy.resistFingerprinting.randomization.canvas.use_siphash", true); //privacy.resistFingerprinting.randomization.canvas.use_siphash (false) - делает защиту от канвасного фингерпринтинга криптографически неуязвимой для реверс инжениринга. Теоретически улучшает безопасность, включу.

// accessibility.
user_pref("accessibility.AOM.enabled", false); //accessibility.AOM.enabled - открывает сайтам прямой доступ к управлению экранным диктором через JavaScript, что позволяет разработчикам адаптировать сложные веб-приложения для незрячих, но одновременно дает трекерам инструмент для скрытой слежки за пользователем. +1 флаг в цифром досье, говно.
user_pref("accessibility.ARIAElementReflection.enabled", true); //accessibility.ARIAElementReflection.enabled - параметр активирует современный стандарт связи элементов интерфейса в коде. Выключение не имеет смысла так как по умолчанию он везде включен и это только повысит уникальность следа + отключение нарушит работоспособность некоторых функций. Не трогаем.
user_pref("accessibility.accesskeycausesactivation", true); //accessibility.accesskeycausesactivation - параметр для горячих клавиш, выключать нет смысла, не мешает.
user_pref("accessibility.anchorPositionedAsDetails.enabled", false); //accessibility.anchorPositionedAsDetails.enabled - дает скрин ридерам возможность сообщать пользователю что всплывающий элемент относится к конкретному элементу на странице, когда сайт использует css anchor positioning. Мусор, удаляем (по умолчанию false).
user_pref("accessibility.blockautorefresh", true); //accessibility.blockautorefresh - разрешает сайтам автообновление, если включить то вместо автоматического обновления придеться подтверждать вручную. Хорошая зашита от стремных редиректов и фишингово кала.
user_pref("accessibility.browsewithcaret", false); //accessibility.browsewithcaret - при true включает по умолчанию включает так называемый caret browsing (навигация по сайту с помощью клавиатуры). Никакой особой ценности не имеет, не трогаю.
user_pref("accessibility.browsewithcaret_shortcut.enabled", false); //accessibility.browsewithcaret_shortcut.enabled - отключает шорткат для caret browsing режима (F7). F7 рядом с F6 так что вижу смысл в этом префе.
user_pref("accessibility.enable_all_cache_domains", false); //accessibility.enable_all_cache_domains - делает работу скрин ридера чуть плавнее ценой небольшого расхода памяти, оставляю false.
user_pref("accessibility.force_disabled", 1); //accessibility.force_disabled - принудительно выключает выключает accessibility в firefox. Скринридеры работать не будут вообще, ни одна программа не сможет прочитать содержимое вкладок через accessibility API.
//accessibility.monoaudio.enable - делает весь звук монофоническим. Нужно для слабослышащих, не трогаю.
//accessibility.mouse_focuses_formcontrol - контролирует поведение клавиатурного фокуса. На разных ОС по разному так что не трогаю.
//accessibility.tabfocus - ограничивает клавиатурную навигацию по странице определённым типом элементов. Не трогаю.
//accessibility.tabfocus_applies_to_xul - назначет правила навигации для таб не только на сайтах, но и в интерфейсе браузера, наследие маков. Не трогаю.
user_pref("accessibility.typeaheadfind", true); //accessibility.typeaheadfind - поиск по странице начинается без Ctrl + F, а сразу, как только начинаешь печатать. Звучит удобно и быстро, беру.
user_pref("accessibility.typeaheadfind.flashBar", 1); //accessibility.typeaheadfind.flashBar - дает цветовой сигнал и нахождение текста на странице.
user_pref("accessibility.typeaheadfind.linksonly", false); //accessibility.typeaheadfind.linksonly - делает поиск только по ссылкам, не по всему тексту.
//accessibility.typeaheadfind.timeout - определяет время через которая панель поиска по страниц закроется без взаимодействия, не трогаю, по умолчанию 5000мс.
//accessibility.uia.enable - открывает доп канал для чтения содержимого firefox внешними программами утилитой Microsoft UI Automation на винде. Так как accessibility.force_disabled и так 1, UIA движок никогда не запуститься, так что не трогаю.
//accessibility.warn_on_browsewithcaret - спрашивает подтверждение перед включением кареточного режима (caret browsing). Так как шорткат и так выключен, не трогаю.
//accessibility.windows.suppress-after-clipboard-copy - некоторые менеджеры буфера обмена дергают accessibility API при каждой операции копирования, это преф не дает им на разбудить accessibility-движок после копирования, так как accessibility.force_disabled = 1, не трогаю, нет смысла.
//accessibility.windows.suppress-for-snap-layout - тоже самое что и accessibility.windows.suppress-after-clipboard-copy, но для другого сценария, не трогаю.

// alerts.
user_pref("alerts.useSystemBackend", false); //alerts.useSystemBackend - переключает способ показа уведомлений от сайтов, через нативную систему в ОС или внутри браузера. На винде остается в логах и держит фоновый процесс, не самое положительное событие. Из потерь - уведомления не будут уважать режим не беспокоить на винде, не беда, i use arch btw.
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false); //alerts.useSystemBackend.windows.notificationserver.enabled - позволяет сайтам после закрытия браузера отправлять уведомления и перезапускать firefox. Удобно для мессенджеров в вебе, работает только на винде.

// android.
//android.touch_resampling.enabled - отвечает за поведение скрола на телефонах с андроидом и экрана высокой частоты обновления. Не интересно.
//android.widget_paints_background - регулирует отрисовку виджетов на телефонах с андроидом. Не интересно.

// toolkit.
user_pref("toolkit.telemetry.unified", false); //toolkit.telemetry.unified - единная система телеметрии firefox, все подсистемы работают через этот рубильник. Железно офф.
user_pref("toolkit.telemetry.enabled", false); //toolkit.telemetry.enabled - дубль toolkit.telemetry.unified, невиданная наглость. Что бы отключить телеметрию полностью надо и его тоже выключить.
user_pref("toolkit.telemetry.server", "data:,"); //toolkit.telemetry.server - урл сервера куда шлеться телеметрия.
user_pref("toolkit.telemetry.archive.enabled", false); //toolkit.telemetry.archive.enabled - когда нет интернета, браузер архивирует телеметрию и когда подключение востановиться он их отправит на сервера firefox. off.
user_pref("toolkit.telemetry.newProfilePing.enabled", false); //toolkit.telemetry.newProfilePing.enabled - при создании нового профиля отправляет слепок системы на серваки мозилы. оффаем.
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); //toolkit.telemetry.shutdownPingSender.enabled - после закрытия браузера отправляет аналитику сессии. Сколько вкладок было открыто, сколько использовал памяти и так далее.
user_pref("toolkit.telemetry.bhrPing.enabled", false); //toolkit.telemetry.bhrPing.enabled - при зависании браузера собирает данные о инциденте и отправляет на сервера мозилы. Может засветить пути к файлам.
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); //toolkit.telemetry.firstShutdownPing.enabled - аналог newProfilePing, но для первого закрытия профиля.
user_pref("toolkit.telemetry.coverage.opt-out", true); //toolkit.telemetry.coverage.opt-out - сбор данных о том какими частями кода ты пользуешься а какими нет. Сбор данных анонимный но все же (true - отказ от сбора данных).
user_pref("toolkit.coverage.opt-out", true); //toolkit.coverage.opt-out - аналог toolkit.telemetry.coverage.opt-out, но для общего сбора.
user_pref("toolkit.coverage.endpoint.base", ""); //toolkit.coverage.endpoint.base - урл для coverage-данных. Затираю.

// datareporting.
user_pref("datareporting.policy.dataSubmissionEnabled", false); //datareporting.policy.dataSubmissionEnabled - отвечает за политику отправкки данных. Пока этот параметр выключен, mozilla юридически не может собирать и отправлять куда либо телеметрию.
user_pref("datareporting.healthreport.uploadEnabled", false); //datareporting.healthreport.uploadEnabled - отчет о состояние браузера (использование памяти, время запуска и так далее).
user_pref("datareporting.usage.uploadEnabled", false); //datareporting.usage.uploadEnabled - отправка статистики использования firefox (сколько вкладок открыто, какие фичи используются и так далее).

// browser.
user_pref("browser.safebrowsing.downloads.remote.enabled", false); //browser.safebrowsing.downloads.remote.enabled - удаленная проверка скачанных файлов через Google Safe Browsing. Браузер отправляет хэш в гугл на проверку на вирусы.
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); //browser.crashReports.unsubmittedCheck.autoSubmit2 - отправка не отправленных ранее краш репортов. Фаерфокс запоиминает не отправленные ранее по какой то либо причине и отправлет при следующем запуске.
user_pref("browser.tabs.crashReporting.sendReport", false); //browser.tabs.crashReporting.sendReport - отправка отчетов отдельных вкладок, не всего браузера, а отдельных вкладок.
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); //browser.newtabpage.activity-stream.feeds.telemetry - еще один сборщик данных, в этот раз телеметрия ленты на новой вкладке (рекомендованные вкладки).
user_pref("browser.newtabpage.activity-stream.telemetry", false); //browser.newtabpage.activity-stream.telemetry - аналогично верхнему префу с небольшими дополнениями.

// app.
user_pref("app.shield.optoutstudies.enabled", false); //app.shield.optoutstudies.enabled - мозила тестирует эксперементальные фичи на случайных пользователях. Если не выключить то ты потенуиально подопытный.
user_pref("app.normandy.enabled", false); //app.normandy.enabled - normandy это система удаленного управления браузером, мозила может менять настройки, запускать опросы и так далее, буквально бекдор. 1000% октлючение.
user_pref("app.normandy.api_ur", ""); //app.normandy.api_ur -  url normandy сервера через который и происходит удаленное управление.

// breakpad.
user_pref("breakpad.reportURL", ""); //breakpad.reportURL - url для отправки краш-репортов, затираю.

// geo.
user_pref("geo.provider.ms-windows-location", false); //geo.provider.ms-windows-location - использование системного сервиса геолокации виндовс, вместо запроса к Google Location Services, браузер спрашивате у ОС гео для сайтов запрашивающих это.
user_pref("geo.provider.use_corelocation", false); //geo.provider.use_corelocation - аналогично geo.provider.ms-windows-location но для мака.
user_pref("geo.provider.use_geoclue", false); //geo.provider.use_geoclue - тоже самое, но для GeoClue на линукс.

// permissions.
user_pref("permissions.default.geo", 2); //permissions.default.geo - политика геолокации для всех сайтов.

// captivedetect.
user_pref("captivedetect.canonicalURL", ""); //captivedetect.canonicalURL - url для проверки captive portal. Браузер стучиться на сервер мозилы при подключении к любому wifi, тем самым раскрывая факт подключения к новой сети.
