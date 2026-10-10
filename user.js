// glean.
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
user_pref("accessibility.typeaheadfind", false); //accessibility.typeaheadfind - поиск по странице начинается без Ctrl + F, а сразу, как только начинаешь печатать. Попробовал, говно, хоткеи не всегда работают из-за этого.
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
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); //toolkit.legacyUserProfileCustomizations.stylesheets - преф для того что бы браузер читал userChrome.css файл.
user_pref("toolkit.content-background-hang-monitor.disabled", true); //toolkit.content-background-hang-monitor.disabled - монитор зависаний вкладок, отчёты о которых летят в телеметрию. true значит монитор выключен.
user_pref("toolkit.contentRelevancy.enabled", false); //toolkit.contentRelevancy.enabled - content relevancy - фоновое профилирование интересов по истории для персональных рекомендаций. Слежка под видом пользы, мимо.
user_pref("toolkit.contentRelevancy.ingestEnabled", false); //toolkit.contentRelevancy.ingestEnabled - загрузка данных для content relevancy. Пока выключено основное, это тоже не нужно.
user_pref("toolkit.shopping.ohttpRelayURL", ""); //toolkit.shopping.ohttpRelayURL - адрес реле для шопинг-фич (проверка отзывов). Затираю, пусть не знает куда слать.

// toolkit.telemetry.
user_pref("toolkit.telemetry.unified", false); //toolkit.telemetry.unified - единная система телеметрии firefox, все подсистемы работают через этот рубильник. Железно офф.
user_pref("toolkit.telemetry.enabled", false); //toolkit.telemetry.enabled - дубль toolkit.telemetry.unified, невиданная наглость. Что бы отключить телеметрию полностью надо и его тоже выключить.
user_pref("toolkit.telemetry.server", "data:,"); //toolkit.telemetry.server - урл сервера куда шлеться телеметрия.
user_pref("toolkit.telemetry.archive.enabled", false); //toolkit.telemetry.archive.enabled - когда нет интернета, браузер архивирует телеметрию и когда подключение востановиться он их отправит на сервера firefox. off.
user_pref("toolkit.telemetry.newProfilePing.enabled", false); //toolkit.telemetry.newProfilePing.enabled - при создании нового профиля отправляет слепок системы на серваки мозилы. оффаем.
user_pref("toolkit.telemetry.updatePing.enabled", false); //toolkit.telemetry.updatePing.enabled - тоже самое но после обновления.
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); //toolkit.telemetry.shutdownPingSender.enabled - после закрытия браузера отправляет аналитику сессии. Сколько вкладок было открыто, сколько использовал памяти и так далее.
user_pref("toolkit.telemetry.bhrPing.enabled", false); //toolkit.telemetry.bhrPing.enabled - при зависании браузера собирает данные о инциденте и отправляет на сервера мозилы. Может засветить пути к файлам.
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); //toolkit.telemetry.firstShutdownPing.enabled - аналог newProfilePing, но для первого закрытия профиля.
user_pref("toolkit.telemetry.coverage.opt-out", true); //toolkit.telemetry.coverage.opt-out - сбор данных о том какими частями кода ты пользуешься а какими нет. Сбор данных анонимный но все же (true - отказ от сбора данных).
user_pref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false); //toolkit.telemetry.shutdownPingSender.backgroundtask.enabled - отдельная фоновая задача, которая досылает телеметрию после закрытия браузера. Даже когда firefox закрыт, он хочет настучать. Нет.
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false); //toolkit.telemetry.shutdownPingSender.enabledFirstSession - то же самое, но для самой первой сессии профиля. Дубль, вырубаем.

// toolkit.coverage.
user_pref("toolkit.coverage.opt-out", true); //toolkit.coverage.opt-out - аналог toolkit.telemetry.coverage.opt-out, но для общего сбора.
user_pref("toolkit.coverage.endpoint.base", ""); //toolkit.coverage.endpoint.base - урл для coverage-данных. Затираю.
user_pref("toolkit.coverage.enabled", false); //toolkit.coverage.enabled - сбор покрытия кода, какие части firefox ты используешь. Рядом с opt-out, но пусть будет выключен и сам.

// datareporting.
user_pref("datareporting.policy.dataSubmissionEnabled", false); //datareporting.policy.dataSubmissionEnabled - отвечает за политику отправкки данных. Пока этот параметр выключен, mozilla юридически не может собирать и отправлять куда либо телеметрию.
user_pref("datareporting.healthreport.uploadEnabled", false); //datareporting.healthreport.uploadEnabled - отчет о состояние браузера (использование памяти, время запуска и так далее).
user_pref("datareporting.usage.uploadEnabled", false); //datareporting.usage.uploadEnabled - отправка статистики использования firefox (сколько вкладок открыто, какие фичи используются и так далее).

// browser.
user_pref("browser.startup.page", 3); //browser.startup.page - после закрытия браузера вкладки не пропадают.
user_pref("browser.safebrowsing.downloads.remote.enabled", false); //browser.safebrowsing.downloads.remote.enabled - удаленная проверка скачанных файлов через Google Safe Browsing. Браузер отправляет хэш в гугл на проверку на вирусы.
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); //browser.crashReports.unsubmittedCheck.autoSubmit2 - отправка не отправленных ранее краш репортов. Фаерфокс запоиминает не отправленные ранее по какой то либо причине и отправлет при следующем запуске.
user_pref("browser.tabs.crashReporting.sendReport", false); //browser.tabs.crashReporting.sendReport - отправка отчетов отдельных вкладок, не всего браузера, а отдельных вкладок.
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); //browser.newtabpage.activity-stream.feeds.telemetry - еще один сборщик данных, в этот раз телеметрия ленты на новой вкладке (рекомендованные вкладки).
user_pref("browser.newtabpage.activity-stream.telemetry", false); //browser.newtabpage.activity-stream.telemetry - аналогично верхнему префу с небольшими дополнениями.
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); //browser.crashReports.unsubmittedCheck.enabled - проверка при запуске: нет ли неотправленных краш-репортов, и предложение их отправить. Не нужно ни проверять, ни предлагать.
user_pref("browser.send_pings", false); //browser.send_pings - hyperlink auditing, атрибут ping у ссылок, по которому сайт узнаёт о клике. По умолчанию уже false, но явно прописываю.
user_pref("browser.send_pings.require_same_host", true); //browser.send_pings.require_same_host - если ping всё же включат, то только на тот же хост. Страховка.
user_pref("browser.dataFeatureRecommendations.enabled", false); //browser.dataFeatureRecommendations.enabled - рекомендации включить сбор данных ради фич. Прямая просьба включить телеметрию, отказываем.
user_pref("browser.uitour.enabled", false); //browser.uitour.enabled - бэкенд для туров по интерфейсу. Теоретически удалённая страница mozilla.org может им управлять. Не рискуем.
user_pref("browser.uitour.url", ""); //browser.uitour.url - адрес страницы туров. Затираю.
user_pref("browser.discovery.containers.enabled", false); //browser.discovery.containers.enabled - рекомендации контейнеров в рамках discovery. Тот же мусор, что и browser.discovery.enabled.
user_pref("browser.vpn_promo.enabled", false); //browser.vpn_promo.enabled - реклама Mozilla VPN в браузере. Платная реклама своего продукта, кал.
user_pref("browser.promo.focus.enabled", false); //browser.promo.focus.enabled - реклама Firefox Focus (мобилка). Не интересно.
user_pref("browser.promo.pin.enabled", false); //browser.promo.pin.enabled - просьба закрепить firefox на панели задач. Сами разберёмся.
user_pref("browser.promo.cookiebanners.enabled", false); //browser.promo.cookiebanners.enabled - реклама автоматической обработки куки-баннеров. Нет.
user_pref("browser.privacySegmentation.preferences.show", false); //browser.privacySegmentation.preferences.show - секция сегментации приватности в настройках. Лишнее.
user_pref("browser.shell.checkDefaultBrowser", false); //browser.shell.checkDefaultBrowser - проверка, является ли firefox браузером по умолчанию. Не напоминай.
user_pref("browser.preferences.moreFromMozilla", false); //browser.preferences.moreFromMozilla - секция 'Больше от Mozilla' в настройках. Реклама других продуктов.
user_pref("browser.aboutwelcome.enabled", false); //browser.aboutwelcome.enabled - страница приветствия после обновлений. Неинтересно.
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); //browser.messaging-system.whatsNewPanel.enabled - панель 'что нового' после обновлений. Мозила не должна отвлекать.
user_pref("browser.ml.enable", false); //browser.ml.enable - общий рубильник ML в firefox. Пока неясно что и куда шлёт, вырубаем.
user_pref("browser.ml.chat.enabled", false); //browser.ml.chat.enabled - AI-чат в боковой панели. Не надо.
user_pref("browser.ml.chat.menu", false); //browser.ml.chat.menu - пункт AI-чата в контекстном меню. Убираем.
user_pref("browser.ml.chat.sidebar", false); //browser.ml.chat.sidebar - AI-чат в сайдбаре. Убираем и отсюда.
user_pref("browser.ml.linkPreview.enabled", false); //browser.ml.linkPreview.enabled - AI-превью ссылок, URL уходит на сервер. Нет.
user_pref("browser.ai.control.default", "blocked"); //browser.ai.control.default - общий контроль AI-функций. blocked - сайты и браузер не могут использовать встроенный AI.
user_pref("browser.tabs.groups.smart.enabled", false); //browser.tabs.groups.smart.enabled - умные группы вкладок через ML. Названия вкладок обрабатываются моделью, не надо.
user_pref("browser.translations.enable", false); //browser.translations.enable - встроенный переводчик. Работает локально, но качает модели с серверов мозилы. Нужен - поставлю расширение.
user_pref("browser.search.suggest.enabled", false); //browser.search.suggest.enabled - живые подсказки поиска: каждая буква улетает поисковику. Хватит.
user_pref("browser.search.update", false); //browser.search.update - автообновление списка поисковых движков. Мозила не будет решать какие поисковики мне доступны.
user_pref("browser.search.geoSpecificDefaults", false); //browser.search.geoSpecificDefaults - поисковик по умолчанию в зависимости от региона. Для этого браузер определяет твой регион, а оно нам не надо.
user_pref("browser.search.region.network.url", ""); //browser.search.region.network.url - адрес, по которому firefox определяет твою страну. Затираю.
user_pref("browser.region.network.url", ""); //browser.region.network.url - ещё один адрес определения региона. Затираю.
user_pref("browser.region.update.enabled", false); //browser.region.update.enabled - обновление региона по сети. Не нужно.
user_pref("browser.urlbar.suggest.searches", false); //browser.urlbar.suggest.searches - подсказки поиска в адресной строке. Парный преф к browser.search.suggest.enabled.
user_pref("browser.urlbar.suggest.trending", false); //browser.urlbar.suggest.trending - трендовые запросы в urlbar. Мы сами знаем что искать.
user_pref("browser.urlbar.suggest.weather", false); //browser.urlbar.suggest.weather - погода в urlbar. Браузер не метеостанция.
user_pref("browser.urlbar.suggest.recentsearches", false); //browser.urlbar.suggest.recentsearches - недавние поиски в urlbar. Лишнее хранение истории поиска.
user_pref("browser.urlbar.quicksuggest.enabled", false); //browser.urlbar.quicksuggest.enabled - Firefox Suggest, рекламные подсказки от партнёров. В помойку.
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); //browser.urlbar.suggest.quicksuggest.sponsored - спонсорские подсказки Firefox Suggest. Реклама в адресной строке.
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); //browser.urlbar.suggest.quicksuggest.nonsponsored - неспонсорские подсказки Firefox Suggest. Всё равно уходит на сервер.
user_pref("browser.urlbar.trending.featureGate", false); //browser.urlbar.trending.featureGate - функция трендовых запросов. Выключаем на уровне фичи.
user_pref("browser.urlbar.addons.featureGate", false); //browser.urlbar.addons.featureGate - предложения дополнений в urlbar. Сами найдём.
user_pref("browser.urlbar.mdn.featureGate", false); //browser.urlbar.mdn.featureGate - подсказки MDN в urlbar. Каждый ввод летит на сервер.
user_pref("browser.urlbar.weather.featureGate", false); //browser.urlbar.weather.featureGate - погода в urlbar на уровне фичи.
user_pref("browser.urlbar.wikipedia.featureGate", false); //browser.urlbar.wikipedia.featureGate - подсказки википедии в urlbar. Запрос уходит на сервер.
user_pref("browser.urlbar.yelp.featureGate", false); //browser.urlbar.yelp.featureGate - отзывы Yelp в urlbar. Зачем это здесь.
user_pref("browser.urlbar.amp.featureGate", false); //browser.urlbar.amp.featureGate - AMP-подсказки (adMarketplace) в urlbar. Реклама.
user_pref("browser.urlbar.fakespot.featureGate", false); //browser.urlbar.fakespot.featureGate - Fakespot (проверка отзывов) в urlbar. Мозила купила и пихает.
user_pref("browser.urlbar.groupLabels.enabled", false); //browser.urlbar.groupLabels.enabled - групповые метки в urlbar. Часть Firefox Suggest.
user_pref("browser.urlbar.merino.endpointURL", ""); //browser.urlbar.merino.endpointURL - адрес сервера Merino, откуда берутся все suggest-подсказки. Затираю.
user_pref("browser.urlbar.speculativeConnect.enabled", false); //browser.urlbar.speculativeConnect.enabled - соединение с сервером ещё до нажатия Enter в urlbar.
user_pref("browser.places.speculativeConnect.enabled", false); //browser.places.speculativeConnect.enabled - соединение при наведении на закладки и историю.

// browser.newtabpage.
user_pref("browser.newtabpage.activity-stream.showSponsored", false); //browser.newtabpage.activity-stream.showSponsored - спонсорское говно на новой вкладке.
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); //browser.newtabpage.activity-stream.showSponsoredTopSites - тоже самое говнище но в другой обертке.
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); //browser.newtabpage.activity-stream.showSponsoredCheckboxes - в названии showSponsored - кал.
user_pref("browser.newtabpage.activity-stream.default.sites", ""); //browser.newtabpage.activity-stream.default.sites - дефолтный список сайтов которые браузер показывает в рекомендованых на новой вкладке.
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); //browser.newtabpage.activity-stream.feeds.section.topstories - рекомендованные истории ХАХАХАХАХАА для кого это вообще не понятно.
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); //browser.newtabpage.activity-stream.feeds.section.highlights - недавно песещаемые сайты, все нужное в закладках, мусор.
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); //browser.newtabpage.activity-stream.feeds.snippets - месаги от мозилы. Скачай firefox mobile и так далее.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); //browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons - контекстные рекомендации от мозилы по поводу дополнений.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); //browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features - тоже самое но рекомендации фич.
user_pref("browser.newtabpage.enabled", false); //browser.newtabpage.enabled - Firefox Home на новой вкладке. false - пустая страница, вся помойка из рекламы и рекомендаций исчезает.
user_pref("browser.newtabpage.activity-stream.showWeather", false); //browser.newtabpage.activity-stream.showWeather - погода на новой вкладке.
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false); //browser.newtabpage.activity-stream.discoverystream.enabled - ленточка рекомендованных историй на новой вкладке (замена Pocket).
user_pref("browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled", false); //browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled - спонсорские коллекции в ленте. Реклама.
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false); //browser.newtabpage.activity-stream.discoverystream.spocs.personalized - персонализация рекламы в ленте. Только этого не хватало.
user_pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false); //browser.newtabpage.activity-stream.discoverystream.recs.personalized - персонализация рекомендаций в ленте. Нет.

// app.
user_pref("app.shield.optoutstudies.enabled", false); //app.shield.optoutstudies.enabled - мозила тестирует эксперементальные фичи на случайных пользователях. Если не выключить то ты потенуиально подопытный.
user_pref("app.normandy.enabled", false); //app.normandy.enabled - normandy это система удаленного управления браузером, мозила может менять настройки, запускать опросы и так далее, буквально бекдор. 1000% октлючение.
user_pref("app.normandy.api_url", ""); //app.normandy.api_url -  url normandy сервера через который и происходит удаленное управление.

// breakpad.
user_pref("breakpad.reportURL", ""); //breakpad.reportURL - url для отправки краш-репортов, затираю.

// geo.
user_pref("geo.provider.ms-windows-location", false); //geo.provider.ms-windows-location - использование системного сервиса геолокации виндовс, вместо запроса к Google Location Services, браузер спрашивате у ОС гео для сайтов запрашивающих это.
user_pref("geo.provider.use_corelocation", false); //geo.provider.use_corelocation - аналогично geo.provider.ms-windows-location но для мака.
user_pref("geo.provider.use_geoclue", false); //geo.provider.use_geoclue - тоже самое, но для GeoClue на линукс.
user_pref("geo.enabled", false); //geo.enabled - геолокация целиком. Жёстче, чем permissions.default.geo = 2, API просто нет.

// permissions.
user_pref("permissions.default.geo", 2); //permissions.default.geo - политика геолокации для всех сайтов.
user_pref("permissions.manager.defaultsUrl", ""); //permissions.manager.defaultsUrl - адрес списка предустановленных разрешений от мозилы. Не нужно, чтобы она раздавала разрешения за меня.

// captivedetect.
user_pref("captivedetect.canonicalURL", ""); //captivedetect.canonicalURL - url для проверки captive portal. Браузер стучиться на сервер мозилы при подключении к любому wifi, тем самым раскрывая факт подключения к новой сети.

// network.
user_pref("network.captive-portal-service.enabled", false); //network.captive-portal-service.enabled - сервис определения captive portal, работает в паре с captivedetect.canonicalURL.
user_pref("network.connectivity-service.enabled", false); //network.connectivity-service.enabled - браузер переодически пингует сервера мозилы что бы понять подключен ты к сети или нет.
user_pref("network.trr.confirmation_telemetry_enabled", false); //network.trr.confirmation_telemetry_enabled - телеметрия подтверждения DoH-соединения. DoH не используем, пинг не нужен.
user_pref("network.prefetch-next", false); //network.prefetch-next - предзагрузка страниц по подсказке сайта (link prefetch). Грузит то, что ты не открывал. Нет.
user_pref("network.dns.disablePrefetch", true); //network.dns.disablePrefetch - предварительный DNS-резолвинг ссылок на странице. Твой DNS-провайдер видит все домены со всех страниц. true - отключено.
user_pref("network.dns.disablePrefetchFromHTTPS", true); //network.dns.disablePrefetchFromHTTPS - то же самое для HTTPS-страниц. Дубль.
user_pref("network.http.speculative-parallel-limit", 0); //network.http.speculative-parallel-limit - спекулятивные TCP-соединения при наведении мыши на ссылку. 0 - не соединяться заранее.
user_pref("network.predictor.enabled", false); //network.predictor.enabled - предиктор: учится по твоей истории и заранее открывает соединения. Собирает профиль привычек на диске, выключаем.
user_pref("network.predictor.enable-prefetch", false); //network.predictor.enable-prefetch - предиктор заранее скачивает ресурсы. Нет.
user_pref("network.preconnect", false); //network.preconnect - предварительные соединения к серверам. Сайты видят твой IP раньше, чем ты на них зашёл.
user_pref("network.early-hints.preconnect.enabled", false); //network.early-hints.preconnect.enabled - preconnect по Early Hints (103) от сайта. Сайт сам решает куда тебе соединяться, нет.
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); //network.http.referer.XOriginTrimmingPolicy - обрезка Referer при кросс-доменных запросах. 0 - полный URL, 1 - без параметров, 2 - только домен.
user_pref("network.auth.subresource-http-auth-allow", 1); //network.auth.subresource-http-auth-allow - HTTP-аутентификация для субресурсов. 0 - никогда, 1 - только same-origin, 2 - всегда. 1 защищает от фишинга через картинки.

// sidebar.
user_pref("sidebar.verticalTabs", true); //sidebar.verticalTabs - включение вертикальных вкладок, это мега имба, кто говорит обратное - еще не пробовал.
user_pref("sidebar.verticalTabs.dragToPinPromo.dismissed", true); //sidebar.verticalTabs.dragToPinPromo.dismissed - убрать подсказку тупорылую с сайдбара.
user_pref("sidebar.main.tools", ""); //sidebar.main.tools - список всяких вкладок внизу сайдбара (там был ии чат бот).

// ui.
user_pref("ui.systemUsesDarkTheme", 1); //ui.systemUsesDarkTheme - принудительно выставляем темную тему (выдаем за системную).

// telemetry.
user_pref("telemetry.fog.init_on_shutdown", false); //telemetry.fog.init_on_shutdown - FOG (Firefox on Glean) - новая система телеметрии на замену старой. Инициализация при выходе нужна только чтобы отправить данные. Не надо.

// dom.
user_pref("dom.reporting.enabled", false); //dom.reporting.enabled - Reporting API - сайты получают от браузера отчёты о нарушениях, устаревших API и падениях. Бесплатный канал данных для сайтов, выключаем.
user_pref("dom.reporting.crash.enabled", false); //dom.reporting.crash.enabled - отчёты о падениях страницы для сайтов через Reporting API. Нет.
user_pref("dom.reporting.header.enabled", false); //dom.reporting.header.enabled - заголовок Report-To / Reporting-Endpoints, с которым сайт сам задаёт куда браузеру слать отчёты. Нет.
user_pref("dom.reporting.featurePolicy.enabled", false); //dom.reporting.featurePolicy.enabled - отчёты о нарушениях feature policy сайту. Тоже Reporting API, тоже выключаем.

// beacon.
user_pref("beacon.enabled", false); //beacon.enabled - navigator.sendBeacon - отправка данных при закрытии страницы, основной инструмент аналитики и трекеров. Минус - иногда ломается отправка на сайтах, плюс - трекерам хуже.

// nimbus.
user_pref("nimbus.telemetry.targetingContextEnabled", false); //nimbus.telemetry.targetingContextEnabled - Nimbus (система экспериментов) отправляет в телеметрию контекст таргетинга: кто ты и что у тебя в профиле. Нет.

// messaging-system.
user_pref("messaging-system.askForFeedback", false); //messaging-system.askForFeedback - система сообщений мозилы просит оставить отзыв. Не лезь.

// default-browser-agent.
user_pref("default-browser-agent.enabled", false); //default-browser-agent.enabled - фоновый агент на винде, который сообщает мозиле, дефолтный ли ты браузер. На линуксе не работает, но для винды пусть будет.

// identity.
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false); //identity.fxaccounts.telemetry.clientAssociationPing.enabled - пинг при привязке устройства к аккаунту firefox. Аккаунтом не пользуемся, но пинг режем.

// extensions.
user_pref("extensions.pocket.enabled", false); //extensions.pocket.enabled - Pocket - сохранялка статей от мозилы. Шлёт данные на сервера, пользы ноль.
user_pref("extensions.getAddons.showPane", false); //extensions.getAddons.showPane - панель рекомендаций дополнений в about:addons. Тянет контент с серверов мозилы.
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); //extensions.htmlaboutaddons.recommendations.enabled - персональные рекомендации дополнений в about:addons. Ещё один стук на сервер.
user_pref("extensions.getAddons.discovery.api_url", ""); //extensions.getAddons.discovery.api_url - api-адрес для вкладки обнаружения дополнений. Затираю.
user_pref("extensions.abuseReport.enabled", false); //extensions.abuseReport.enabled - встроенная жалоба на дополнения в мозилу. Отправляет данные о дополнении и профиле, если нажать. Не нужна.
user_pref("extensions.systemAddon.update.enabled", false); //extensions.systemAddon.update.enabled - обновление системных дополнений мозилы без твоего участия. Мозила не должна ставить в мой браузер что-то втихаря.

// browser.contentblocking.
user_pref("browser.contentblocking.report.lockwise.enabled", false); //browser.contentblocking.report.lockwise.enabled - реклама Lockwise в отчёте о защите. Нам не надо.
user_pref("browser.contentblocking.report.monitor.enabled", false); //browser.contentblocking.report.monitor.enabled - реклама Mozilla Monitor в отчёте о защите. Нет.
user_pref("browser.contentblocking.report.proxy.enabled", false); //browser.contentblocking.report.proxy.enabled - реклама прокси-расширения в отчёте о защите. Нет.
user_pref("browser.contentblocking.report.show_mobile_app", false); //browser.contentblocking.report.show_mobile_app - реклама мобильного приложения в отчёте о защите. Нет.
user_pref("browser.contentblocking.report.hide_vpn_banner", true); //browser.contentblocking.report.hide_vpn_banner - прячет баннер VPN в отчёте о защите.
user_pref("browser.contentblocking.cfr-milestone.enabled", false); //browser.contentblocking.cfr-milestone.enabled - поздравления вида 'мы заблокировали 1000 трекеров'. Нахрен.

// startup.
user_pref("startup.homepage_welcome_url", ""); //startup.homepage_welcome_url - страница приветствия при первом запуске. Затираю.
user_pref("startup.homepage_welcome_url.additional", ""); //startup.homepage_welcome_url.additional - ещё одна страница приветствия при запуске. Затираю.
