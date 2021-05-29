/*!
* DevExtreme (dx.messages.bg.js)
* Version: 20.2.7
* Build date: Thu Apr 22 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        bg: {
            Yes: "Да",
            No: "Не",
            Cancel: "Отказ",
            Clear: "Изчисти",
            Done: "Направено",
            Loading: "Зареждане...",
            Select: "Избор...",
            Search: "Търси",
            Back: "Назад",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Няма данни за показване",
            "dxDropDownEditor-selectLabel": "Избери",
            "validation-required": "Задължително",
            "validation-required-formatted": "{0} е задължително",
            "validation-numeric": "Стойността трябва да е число",
            "validation-numeric-formatted": "{0} трябва да е число",
            "validation-range": "Стойността излиза от, зададения обхват",
            "validation-range-formatted": "{0} излиза от, зададения обхват",
            "validation-stringLength": "Неправилна дължина на стойност",
            "validation-stringLength-formatted": "Дължината на {0} е неправилна",
            "validation-custom": "Невалидна стойност",
            "validation-custom-formatted": "{0} е невалидно",
            "validation-async": "Стойността е невалидна",
            "validation-async-formatted": "{0} е невалидно",
            "validation-compare": "Стойността не съвпада",
            "validation-compare-formatted": "{0} не съвпада",
            "validation-pattern": "Стойността не съответства на шаблона",
            "validation-pattern-formatted": "{0} не съответства на шаблона",
            "validation-email": "Невалиден Имейл",
            "validation-email-formatted": "{0} е невалидно",
            "validation-mask": "Стойността е невалидна",
            "dxLookup-searchPlaceholder": "Минимален брой знаци: {0}",
            "dxList-pullingDownText": "Изтеглете надолу, за да се обнови...",
            "dxList-pulledDownText": "Освободете, за да се обнови...",
            "dxList-refreshingText": "Обновяване...",
            "dxList-pageLoadingText": "Зареждане...",
            "dxList-nextButtonText": "Още",
            "dxList-selectAll": "Избери всичко",
            "dxListEditDecorator-delete": "Изтрий",
            "dxListEditDecorator-more": "Още",
            "dxScrollView-pullingDownText": "Изтеглете надолу, за да се обнови...",
            "dxScrollView-pulledDownText": "Освободете, за да се обнови...",
            "dxScrollView-refreshingText": "Обновяване...",
            "dxScrollView-reachBottomText": "Зареждане...",
            "dxDateBox-simulatedDataPickerTitleTime": "Изберете време/час",
            "dxDateBox-simulatedDataPickerTitleDate": "Изберете дата",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Изберете дата и час",
            "dxDateBox-validation-datetime": "Стойността трябва да е дата и час",
            "dxFileUploader-selectFile": "Изберете файл",
            "dxFileUploader-dropFile": "Или пуснете файл тук",
            "dxFileUploader-bytes": "бита",
            "dxFileUploader-kb": "кб",
            "dxFileUploader-Mb": "мб",
            "dxFileUploader-Gb": "гб",
            "dxFileUploader-upload": "Качване",
            "dxFileUploader-uploaded": "Качено",
            "dxFileUploader-readyToUpload": "Готов за качване",
            "dxFileUploader-uploadAbortedMessage": "Качването отменено",
            "dxFileUploader-uploadFailedMessage": "Качването се провали",
            "dxFileUploader-invalidFileExtension": "Недопустим вид файл",
            "dxFileUploader-invalidMaxFileSize": "Файлът е твърде голям",
            "dxFileUploader-invalidMinFileSize": "Файлът е твърде малък",
            "dxRangeSlider-ariaFrom": "От",
            "dxRangeSlider-ariaTill": "До",
            "dxSwitch-switchedOnText": "Включено",
            "dxSwitch-switchedOffText": "Изключено",
            "dxForm-optionalMark": "По желание",
            "dxForm-requiredMessage": "{0} е задължително",
            "dxNumberBox-invalidValueMessage": "Стойността трябва да е число",
            "dxNumberBox-noDataText": "Няма данни",
            "dxDataGrid-columnChooserTitle": "Избор на колона",
            "dxDataGrid-columnChooserEmptyText": "Влачете колона тук, за да я скриете",
            "dxDataGrid-groupContinuesMessage": "Продължава на следващата страница",
            "dxDataGrid-groupContinuedMessage": "Продължава от предишната страница",
            "dxDataGrid-groupHeaderText": "Групирай по тази колона",
            "dxDataGrid-ungroupHeaderText": "Разгрупирай",
            "dxDataGrid-ungroupAllText": "Разгрупирай всичко",
            "dxDataGrid-editingEditRow": "Редакция",
            "dxDataGrid-editingSaveRowChanges": "Запис",
            "dxDataGrid-editingCancelRowChanges": "Отказ",
            "dxDataGrid-editingDeleteRow": "Изтриване",
            "dxDataGrid-editingUndeleteRow": "Възстановяване от изтрити",
            "dxDataGrid-editingConfirmDeleteMessage": "Сигурен/на/но ли сте, че желаете да изтриете този запис?",
            "dxDataGrid-validationCancelChanges": "Отмени промените",
            "dxDataGrid-groupPanelEmptyText": "Влачете хедър на колона тук, за да групирате по тази колона",
            "dxDataGrid-noDataText": "Няма данни",
            "dxDataGrid-searchPanelPlaceholder": "Тръсене...",
            "dxDataGrid-filterRowShowAllText": "(Всичко)",
            "dxDataGrid-filterRowResetOperationText": "Нулиране",
            "dxDataGrid-filterRowOperationEquals": "Е равано на",
            "dxDataGrid-filterRowOperationNotEquals": "Не е равно на",
            "dxDataGrid-filterRowOperationLess": "По-малко от",
            "dxDataGrid-filterRowOperationLessOrEquals": "По-малко или равно на",
            "dxDataGrid-filterRowOperationGreater": "По-голямо от",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "По-голямо или равно на",
            "dxDataGrid-filterRowOperationStartsWith": "Започва с",
            "dxDataGrid-filterRowOperationContains": "Съдържа",
            "dxDataGrid-filterRowOperationNotContains": "Не съдържа",
            "dxDataGrid-filterRowOperationEndsWith": "Завършва на",
            "dxDataGrid-filterRowOperationBetween": "Между",
            "dxDataGrid-filterRowOperationBetweenStartText": "Начало",
            "dxDataGrid-filterRowOperationBetweenEndText": "Край",
            "dxDataGrid-applyFilterText": "Приложи филтъра",
            "dxDataGrid-trueText": "истина",
            "dxDataGrid-falseText": "лъжа",
            "dxDataGrid-sortingAscendingText": "Подреди във възходящ ред",
            "dxDataGrid-sortingDescendingText": "Подреди в низходящ ред",
            "dxDataGrid-sortingClearText": "Премахни сортирането",
            "dxDataGrid-editingSaveAllChanges": "Запиши промените",
            "dxDataGrid-editingCancelAllChanges": "Отмени промените",
            "dxDataGrid-editingAddRow": "Добави ред",
            "dxDataGrid-summaryMin": "Минимум: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Минимум от {1} е {0}",
            "dxDataGrid-summaryMax": "Максимум: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Максимум от {1} е {0}",
            "dxDataGrid-summaryAvg": "Средно претеглено: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Средно претеглено от {1} е {0}",
            "dxDataGrid-summarySum": "Сбор: {0}",
            "dxDataGrid-summarySumOtherColumn": "Сбор от {1} е {0}",
            "dxDataGrid-summaryCount": "Брой: {0}",
            "dxDataGrid-columnFixingFix": "Фиксирай",
            "dxDataGrid-columnFixingUnfix": "Не фиксирай",
            "dxDataGrid-columnFixingLeftPosition": "Наляво",
            "dxDataGrid-columnFixingRightPosition": "надясно",
            "dxDataGrid-exportTo": "Експортирай",
            "dxDataGrid-exportToExcel": "Експортирай във файл на Ексел",
            "dxDataGrid-exporting": "Експортиране...",
            "dxDataGrid-excelFormat": "Файл на Ексел",
            "dxDataGrid-selectedRows": "Избраните редове",
            "dxDataGrid-exportSelectedRows": "Експортирай, избраните редове",
            "dxDataGrid-exportAll": "Експортирай всички данни",
            "dxDataGrid-headerFilterEmptyValue": "(Празни)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Отказ",
            "dxDataGrid-ariaAdaptiveCollapse": "Скрий допълнителните данни",
            "dxDataGrid-ariaAdaptiveExpand": "Покажи допълнителните данни",
            "dxDataGrid-ariaColumn": "Колона",
            "dxDataGrid-ariaValue": "Стйност",
            "dxDataGrid-ariaFilterCell": "Клетка на филтър",
            "dxDataGrid-ariaCollapse": "Свий",
            "dxDataGrid-ariaExpand": "разшири",
            "dxDataGrid-ariaDataGrid": "Таблица за данни",
            "dxDataGrid-ariaSearchInGrid": "Търси в таблицата за данни",
            "dxDataGrid-ariaSelectAll": "Избери всичко",
            "dxDataGrid-ariaSelectRow": "Избери ред",
            "dxDataGrid-ariaToolbar": "Лента на инструментите за таблица за данни",
            "dxDataGrid-filterBuilderPopupTitle": "Строител на филтри",
            "dxDataGrid-filterPanelCreateFilter": "Създай филтър",
            "dxDataGrid-filterPanelClearFilter": "Изчисти",
            "dxDataGrid-filterPanelFilterEnabledHint": "Активирай филтъра",
            "dxTreeList-ariaTreeList": "Дървовиден списък",
            "dxTreeList-ariaSearchInGrid": "Търси в дървовиден списък",
            "dxTreeList-ariaToolbar": "Лента на инструментите на дървовиден списък",
            "dxTreeList-editingAddRowToNode": "Добави",
            "dxPager-infoText": "Страница {0} of {1} ({2} елемента)",
            "dxPager-pagesCountText": "изключено",
            "dxPager-pageSizesAllText": "Всичко",
            "dxPivotGrid-grandTotal": "Краен сбор",
            "dxPivotGrid-total": "{0} Сбор",
            "dxPivotGrid-fieldChooserTitle": "Избирател на полета",
            "dxPivotGrid-showFieldChooser": "Покажи избирателя на полета",
            "dxPivotGrid-expandAll": "Разшири всичко",
            "dxPivotGrid-collapseAll": "Свий всичко",
            "dxPivotGrid-sortColumnBySummary": 'Подреди "{0}" по тази колона',
            "dxPivotGrid-sortRowBySummary": 'Подреди "{0}" по този ред',
            "dxPivotGrid-removeAllSorting": "Премахни всяко подреждане",
            "dxPivotGrid-dataNotAvailable": "Недостъпно",
            "dxPivotGrid-rowFields": "Полета на редове",
            "dxPivotGrid-columnFields": "Полета на колони",
            "dxPivotGrid-dataFields": "Полета за данни",
            "dxPivotGrid-filterFields": "Полета на филтри",
            "dxPivotGrid-allFields": "Всички полета",
            "dxPivotGrid-columnFieldArea": "Пуснете поле на колона тук",
            "dxPivotGrid-dataFieldArea": "Пуснете поле данни тук",
            "dxPivotGrid-rowFieldArea": "Пуснете поле на ред тук",
            "dxPivotGrid-filterFieldArea": "Пуснете поле на филтър тук",
            "dxScheduler-editorLabelTitle": "Тема",
            "dxScheduler-editorLabelStartDate": "Начална дата",
            "dxScheduler-editorLabelEndDate": "Крайна дата",
            "dxScheduler-editorLabelDescription": "Описание",
            "dxScheduler-editorLabelRecurrence": "Повтори",
            "dxScheduler-openAppointment": "Създай ангажимент",
            "dxScheduler-recurrenceNever": "Никога",
            "dxScheduler-recurrenceMinutely": "Всяка минута",
            "dxScheduler-recurrenceHourly": "Часово",
            "dxScheduler-recurrenceDaily": "Дневно",
            "dxScheduler-recurrenceWeekly": "Седмично",
            "dxScheduler-recurrenceMonthly": "Месечно",
            "dxScheduler-recurrenceYearly": "Годишно",
            "dxScheduler-recurrenceRepeatEvery": "Повтори всяко",
            "dxScheduler-recurrenceRepeatOn": "Повторение включено",
            "dxScheduler-recurrenceEnd": "край на повторение",
            "dxScheduler-recurrenceAfter": "След",
            "dxScheduler-recurrenceOn": "Включено",
            "dxScheduler-recurrenceRepeatMinutely": "минута(и)",
            "dxScheduler-recurrenceRepeatHourly": "Час(ове)",
            "dxScheduler-recurrenceRepeatDaily": "Ден(дни)",
            "dxScheduler-recurrenceRepeatWeekly": "Седмица(седмици)",
            "dxScheduler-recurrenceRepeatMonthly": "месец(и)",
            "dxScheduler-recurrenceRepeatYearly": "Година(години)",
            "dxScheduler-switcherDay": "Ден",
            "dxScheduler-switcherWeek": "Седмица",
            "dxScheduler-switcherWorkWeek": "Работна седмица",
            "dxScheduler-switcherMonth": "Месец",
            "dxScheduler-switcherAgenda": "Дневн ред",
            "dxScheduler-switcherTimelineDay": "Хронология - ден",
            "dxScheduler-switcherTimelineWeek": "Хронология - седмица",
            "dxScheduler-switcherTimelineWorkWeek": "Хронология - работна седмица",
            "dxScheduler-switcherTimelineMonth": "Хронология - месец",
            "dxScheduler-recurrenceRepeatOnDate": "на дата",
            "dxScheduler-recurrenceRepeatCount": "повторение(я)",
            "dxScheduler-allDay": "Цял ден",
            "dxScheduler-confirmRecurrenceEditMessage": "Искате да редактирате само този ангажимент или цялата последователност?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Искате да изтриете само този ангажимент или цялата последователност?",
            "dxScheduler-confirmRecurrenceEditSeries": "Редактирай последователности",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Изтрий последователности",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Редактирай ангажимент",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Изтрий ангажимент",
            "dxScheduler-noTimezoneTitle": "Няма времева зона",
            "dxScheduler-moreAppointments": "{0} повече",
            "dxCalendar-todayButtonText": "Днес",
            "dxCalendar-ariaWidgetName": "Календар",
            "dxColorView-ariaRed": "Червено",
            "dxColorView-ariaGreen": "Зелено",
            "dxColorView-ariaBlue": "Синьо",
            "dxColorView-ariaAlpha": "Прозрачност",
            "dxColorView-ariaHex": "Цветови код",
            "dxTagBox-selected": "{0} избрано(и)",
            "dxTagBox-allSelected": "Всичко избрано ({0})",
            "dxTagBox-moreSelected": "{0} повече",
            "vizExport-printingButtonText": "Печат",
            "vizExport-titleMenuText": "Експортиране/отпечатване",
            "vizExport-exportButtonText": "{0} файл",
            "dxFilterBuilder-and": "И",
            "dxFilterBuilder-or": "Или",
            "dxFilterBuilder-notAnd": "Не И",
            "dxFilterBuilder-notOr": "Не Или",
            "dxFilterBuilder-addCondition": "Добави условие",
            "dxFilterBuilder-addGroup": "Добави група",
            "dxFilterBuilder-enterValueText": "<въведете стойност>",
            "dxFilterBuilder-filterOperationEquals": "Е равно",
            "dxFilterBuilder-filterOperationNotEquals": "Не е равно",
            "dxFilterBuilder-filterOperationLess": "По-малко от",
            "dxFilterBuilder-filterOperationLessOrEquals": "По-малко или равно на",
            "dxFilterBuilder-filterOperationGreater": "Е по-голямо от",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Е по-голямо или равно на",
            "dxFilterBuilder-filterOperationStartsWith": "Започва с",
            "dxFilterBuilder-filterOperationContains": "Съдържа",
            "dxFilterBuilder-filterOperationNotContains": "Не съдържа",
            "dxFilterBuilder-filterOperationEndsWith": "Завършва на",
            "dxFilterBuilder-filterOperationIsBlank": "Е празно",
            "dxFilterBuilder-filterOperationIsNotBlank": "Не е празно",
            "dxFilterBuilder-filterOperationBetween": "Е между",
            "dxFilterBuilder-filterOperationAnyOf": "Е всако от",
            "dxFilterBuilder-filterOperationNoneOf": "Е никое от",
            "dxHtmlEditor-dialogColorCaption": "Смени цвета на шрифта",
            "dxHtmlEditor-dialogBackgroundCaption": "Смени фоновия цвят",
            "dxHtmlEditor-dialogLinkCaption": "Добави хипервръзка",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Текст",
            "dxHtmlEditor-dialogLinkTargetField": "Отвори хипервръзка в нов прозорец",
            "dxHtmlEditor-dialogImageCaption": "Добави изображение",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Алтернативен текст",
            "dxHtmlEditor-dialogImageWidthField": "Ширина (в пиксели)",
            "dxHtmlEditor-dialogImageHeightField": "Височина (в пиксели)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Редове",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Колони",
            "dxHtmlEditor-dialogInsertTableCaption": "Вмъкни таблица",
            "dxHtmlEditor-heading": "Заглавност",
            "dxHtmlEditor-normalText": "Обикновен текст",
            "dxFileManager-newDirectoryName": "Неименована директория",
            "dxFileManager-rootDirectoryName": "Файлове",
            "dxFileManager-errorNoAccess": "Достъпът е отказан. Операцията не може да бъде завършена.",
            "dxFileManager-errorDirectoryExistsFormat": "Директория '{0}' вече съществува.",
            "dxFileManager-errorFileExistsFormat": "Файл '{0}' Вече съществува.",
            "dxFileManager-errorFileNotFoundFormat": "Файл '{0}' не е намерен.",
            "dxFileManager-errorDirectoryNotFoundFormat": "Директория '{0}' не е намерена.",
            "dxFileManager-errorWrongFileExtension": "Файл с такова разширение не е позволен за обработка.",
            "dxFileManager-errorMaxFileSizeExceeded": "Размерът на файла надхвърля максимално позволения размер.",
            "dxFileManager-errorInvalidSymbols": "Това име съдържа непозволени символи.",
            "dxFileManager-errorDefault": "Неуказана грешка.",
            "dxFileManager-errorDirectoryOpenFailed": "Директорията не може да бъде отворена",
            "dxFileManager-commandCreate": "Нова директория",
            "dxFileManager-commandRename": "Преименувай",
            "dxFileManager-commandMove": "Премести в",
            "dxFileManager-commandCopy": "Копирай в",
            "dxFileManager-commandDelete": "Изтрий",
            "dxFileManager-commandDownload": "Изтегли",
            "dxFileManager-commandUpload": "Качи файлове",
            "dxFileManager-commandRefresh": "Обновяване",
            "dxFileManager-commandThumbnails": "Изглед миниатюри",
            "dxFileManager-commandDetails": "Изглед в детайли",
            "dxFileManager-commandClearSelection": "изчисти избраното",
            "dxFileManager-commandShowNavPane": "Превключи навигационния панел",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "Премести в",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "Премести",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "Копирай в",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "Копирай",
            "dxFileManager-dialogRenameItemTitle": "Преименувай",
            "dxFileManager-dialogRenameItemButtonText": "Запиши",
            "dxFileManager-dialogCreateDirectoryTitle": "Нова директория",
            "dxFileManager-dialogCreateDirectoryButtonText": "Създай",
            "dxFileManager-dialogDeleteItemTitle": "Изтрий",
            "dxFileManager-dialogDeleteItemButtonText": "Изтрий",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Сигурен/на/но ли сте, че искате да изтриете {0}?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Сигурен/на/но ли сте, че искате да изтриете {0} елемента?",
            "dxFileManager-dialogButtonCancel": "Отказ",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Създаване на директория в {0}",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Създадена директория в  {0}",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Директорията не беше създадена",
            "dxFileManager-editingCreateCommonErrorMessage": "Директорията не беше създадена",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Преименуване на елемент в {0}",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Преименуван елемент в {0}",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Елементът не беше преименуван",
            "dxFileManager-editingRenameCommonErrorMessage": "Елементът не беше преименуван",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Изтриване на елемент от {0}",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Изтриване на {0} елемента от {1} елемента",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Изтриване на елемент от {0}",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Изтриване на {0} елемента от {1} елемента",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Елементът не беше изтрит",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} елемента не бяха изтрити",
            "dxFileManager-editingDeleteCommonErrorMessage": "някои елементи не бяха изтрити",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "Преместване на елемент в {0}",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "Преместване на {0} елемента в {1}",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Преместен е елемент в {0}",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "Преместени {0} елемента в {1}",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Елементът не беше преместен",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} елемента не бяха преместени",
            "dxFileManager-editingMoveCommonErrorMessage": "Някои елементи не бяха преместени",
            "dxFileManager-editingCopySingleItemProcessingMessage": "Копиране на елемент в {0}",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "Копиране на {0} елемента в {1}",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Копира елемент в {0}",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "Копира {0} елемента в {1}",
            "dxFileManager-editingCopySingleItemErrorMessage": "Елементът не беш копиран",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} елемента не бяха копирани",
            "dxFileManager-editingCopyCommonErrorMessage": "Някои елементи ня бяха копирани",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "Качване на елемент в {0}",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "Качване на {0} елемента в {1}",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Качен елемент в {0}",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "Качени {0} елементи в {1}",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Елементът не беше качен",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} елмента не бяха качени",
            "dxFileManager-editingUploadCanceledMessage": "Отменено",
            "dxFileManager-listDetailsColumnCaptionName": "Име",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Дата на промяна",
            "dxFileManager-listDetailsColumnCaptionFileSize": "размер на файла",
            "dxFileManager-listThumbnailsTooltipTextSize": "размер",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Дата на промяна",
            "dxFileManager-notificationProgressPanelTitle": "Напредък",
            "dxFileManager-notificationProgressPanelEmptyListText": "Няма операции",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Отменено",
            "dxDiagram-categoryGeneral": "Главно",
            "dxDiagram-categoryFlowchart": "Блок-схема",
            "dxDiagram-categoryOrgChart": "Организационна схема",
            "dxDiagram-categoryContainers": "Контейнери",
            "dxDiagram-categoryCustom": "Прсонализирано",
            "dxDiagram-commandExportToSvg": "Експорт в SVG",
            "dxDiagram-commandExportToPng": "Експорт в PNG",
            "dxDiagram-commandExportToJpg": "Експорт в JPEG",
            "dxDiagram-commandUndo": "Стъпка назад в хронологията на промените",
            "dxDiagram-commandRedo": "Стъпка напред в хронологията на промените",
            "dxDiagram-commandFontName": "Име на шрифт",
            "dxDiagram-commandFontSize": "Размер на шрифт",
            "dxDiagram-commandBold": "Болд",
            "dxDiagram-commandItalic": "Италик",
            "dxDiagram-commandUnderline": "Подчертан",
            "dxDiagram-commandTextColor": "Цвят на шрифт",
            "dxDiagram-commandLineColor": "Цвят на линия",
            "dxDiagram-commandLineWidth": "Ширина на линия",
            "dxDiagram-commandLineStyle": "Стил на линия",
            "dxDiagram-commandLineStyleSolid": "Солидна",
            "dxDiagram-commandLineStyleDotted": "На точки",
            "dxDiagram-commandLineStyleDashed": "Прекъсната",
            "dxDiagram-commandFillColor": "Цвят на запълване",
            "dxDiagram-commandAlignLeft": "Подравняване вляво",
            "dxDiagram-commandAlignCenter": "Подравняване в центъра",
            "dxDiagram-commandAlignRight": "Подравняване вдясно",
            "dxDiagram-commandConnectorLineType": "Вид на свързващата линия",
            "dxDiagram-commandConnectorLineStraight": "Права",
            "dxDiagram-commandConnectorLineOrthogonal": "Ортогонална",
            "dxDiagram-commandConnectorLineStart": "Начало на свързващата линия",
            "dxDiagram-commandConnectorLineEnd": "Край на свързващата линия",
            "dxDiagram-commandConnectorLineNone": "Нито едно",
            "dxDiagram-commandConnectorLineArrow": "Стрелка",
            "dxDiagram-commandFullscreen": "На цял екран",
            "dxDiagram-commandUnits": "Мерни единици",
            "dxDiagram-commandPageSize": "Размер на страницата",
            "dxDiagram-commandPageOrientation": "Ориентация на страницата",
            "dxDiagram-commandPageOrientationLandscape": "Пейзажна",
            "dxDiagram-commandPageOrientationPortrait": "Портретна",
            "dxDiagram-commandPageColor": "Цвят на страницата",
            "dxDiagram-commandShowGrid": "Покажи мрежата",
            "dxDiagram-commandSnapToGrid": "Фиксирано към мрежата",
            "dxDiagram-commandGridSize": "Размер на мрежата",
            "dxDiagram-commandZoomLevel": "Ниво на мащаба",
            "dxDiagram-commandAutoZoom": "Автоматично мащабиране",
            "dxDiagram-commandFitToContent": "Напасване към съдържанието",
            "dxDiagram-commandFitToWidth": "Напасване към ширината",
            "dxDiagram-commandAutoZoomByContent": "Автоматично мащабиране спрямо съдържанието",
            "dxDiagram-commandAutoZoomByWidth": "Автоматично мащабиране спрямо ширината",
            "dxDiagram-commandSimpleView": "Опростен изглед",
            "dxDiagram-commandCut": "Изрежи",
            "dxDiagram-commandCopy": "Копирай",
            "dxDiagram-commandPaste": "Постави",
            "dxDiagram-commandSelectAll": "Избери всичко",
            "dxDiagram-commandDelete": "Изтрий",
            "dxDiagram-commandBringToFront": "Изведи отпред",
            "dxDiagram-commandSendToBack": "Изпрати назад",
            "dxDiagram-commandLock": "Заключи",
            "dxDiagram-commandUnlock": "Отключи",
            "dxDiagram-commandInsertShapeImage": "Вмъкни изобржение...",
            "dxDiagram-commandEditShapeImage": "Промени изображение...",
            "dxDiagram-commandDeleteShapeImage": "ИЗтрий изображение",
            "dxDiagram-commandLayoutLeftToRight": "От ляво на дясно",
            "dxDiagram-commandLayoutRightToLeft": "От дясно на ляво",
            "dxDiagram-commandLayoutTopToBottom": "От гре надолу",
            "dxDiagram-commandLayoutBottomToTop": "От долу нагоре",
            "dxDiagram-unitIn": "инча",
            "dxDiagram-unitCm": "сантиметра",
            "dxDiagram-unitPx": "пиксела",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Отказ",
            "dxDiagram-dialogInsertShapeImageTitle": "Вмъкни изображение",
            "dxDiagram-dialogEditShapeImageTitle": "Промени изображение",
            "dxDiagram-dialogEditShapeImageSelectButton": "Избери изображение",
            "dxDiagram-dialogEditShapeImageLabelText": "или пуснете файл тук",
            "dxDiagram-uiExport": "Екпортирай",
            "dxDiagram-uiProperties": "Свойства",
            "dxDiagram-uiSettings": "Настройки",
            "dxDiagram-uiShowToolbox": "Покажи лентата с инструменти",
            "dxDiagram-uiSearch": "Търси",
            "dxDiagram-uiStyle": "Стил",
            "dxDiagram-uiLayout": "Разположение",
            "dxDiagram-uiLayoutTree": "Дървовидно",
            "dxDiagram-uiLayoutLayered": "Послойно",
            "dxDiagram-uiDiagram": "Диаграма",
            "dxDiagram-uiText": "Текст",
            "dxDiagram-uiObject": "Обект",
            "dxDiagram-uiConnector": "Съединителна линия",
            "dxDiagram-uiPage": "Страница",
            "dxDiagram-shapeText": "Текст",
            "dxDiagram-shapeRectangle": "Правоъгълник",
            "dxDiagram-shapeEllipse": "Елипса",
            "dxDiagram-shapeCross": "Кръст",
            "dxDiagram-shapeTriangle": "Триъгълник",
            "dxDiagram-shapeDiamond": "Диамант",
            "dxDiagram-shapeHeart": "Сърце",
            "dxDiagram-shapePentagon": "Пентагон",
            "dxDiagram-shapeHexagon": "Хексагон",
            "dxDiagram-shapeOctagon": "Октагон",
            "dxDiagram-shapeStar": "Звезда",
            "dxDiagram-shapeArrowLeft": "Стрелка няляво",
            "dxDiagram-shapeArrowUp": "Стрелка нагоре",
            "dxDiagram-shapeArrowRight": "Стрелка надясно",
            "dxDiagram-shapeArrowDown": "Стрелка надолу",
            "dxDiagram-shapeArrowUpDown": "Стрелка нагоре-надолу",
            "dxDiagram-shapeArrowLeftRight": "Стрелка наляво-надясно",
            "dxDiagram-shapeProcess": "Процес",
            "dxDiagram-shapeDecision": "Решение",
            "dxDiagram-shapeTerminator": "Терминатор",
            "dxDiagram-shapePredefinedProcess": "Предефиниран процес",
            "dxDiagram-shapeDocument": "Документ",
            "dxDiagram-shapeMultipleDocuments": "Множество документи",
            "dxDiagram-shapeManualInput": "Ръчено въвеждане",
            "dxDiagram-shapePreparation": "Подготовка",
            "dxDiagram-shapeData": "Дата",
            "dxDiagram-shapeDatabase": "База данни",
            "dxDiagram-shapeHardDisk": "Твърд диск",
            "dxDiagram-shapeInternalStorage": "Вътрешна памет",
            "dxDiagram-shapePaperTape": "Хартиена лента",
            "dxDiagram-shapeManualOperation": "Ръчна операция",
            "dxDiagram-shapeDelay": "Забавяне",
            "dxDiagram-shapeStoredData": "Съхранени данни",
            "dxDiagram-shapeDisplay": "Покажи",
            "dxDiagram-shapeMerge": "Обедини",
            "dxDiagram-shapeConnector": "Съединител",
            "dxDiagram-shapeOr": "Или",
            "dxDiagram-shapeSummingJunction": "Сумиращ възел",
            "dxDiagram-shapeContainerDefaultText": "Контейнер",
            "dxDiagram-shapeVerticalContainer": "Вертикален контейнер",
            "dxDiagram-shapeHorizontalContainer": "Хоризонтален контейнер",
            "dxDiagram-shapeCardDefaultText": "Име на лицето",
            "dxDiagram-shapeCardWithImageOnLeft": "Картичка с изображение вляво",
            "dxDiagram-shapeCardWithImageOnTop": "Картичка с изображение горе",
            "dxDiagram-shapeCardWithImageOnRight": "Картичка с изображение вдясно",
            "dxGantt-dialogTitle": "Заглавие",
            "dxGantt-dialogStartTitle": "Начало",
            "dxGantt-dialogEndTitle": "Край",
            "dxGantt-dialogProgressTitle": "Напредък",
            "dxGantt-dialogResourcesTitle": "Ресурси",
            "dxGantt-dialogResourceManagerTitle": "Управител на ресурси",
            "dxGantt-dialogTaskDetailsTitle": "Подробности за задачата",
            "dxGantt-dialogEditResourceListHint": "Редактирай списъка с ресурси",
            "dxGantt-dialogEditNoResources": "Няма ресурси",
            "dxGantt-dialogButtonAdd": "Добави",
            "dxGantt-contextMenuNewTask": "Нова задача",
            "dxGantt-contextMenuNewSubtask": "Нова подзадача",
            "dxGantt-contextMenuDeleteTask": "изтрий задачата",
            "dxGantt-contextMenuDeleteDependency": "Изтрий свързаните ресурси",
            "dxGantt-dialogTaskDeleteConfirmation": "Изтриване на задачата ще изтрие всички, свързани ресурси и подзадачи. Сигурен/на/но ли сте, че искате да изтриете задачата?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Сигурен/на/но ли сте, че искате да изтриете, свързаните ресурси на задачата?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Изтриването на ресури, ги изтрива от задачите, към които са назначени. Сигурен/на/но ли сте, че искате да изтриете ресурсите? Ресурси: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "Задачата, която се опитвате да преместите, е свързана с  друга задача, като свързан ресурс. Тази промяна е в конфликт с правилата за свързани ресурси. Какво ще изберете?",
            "dxGantt-dialogConstraintViolationMessage": "Задачата, която се опитвате да преместите, е свързана с  друга задача, като свързан ресурс. Какво ще изберете?",
            "dxGantt-dialogCancelOperationMessage": "Отмяна на операцията",
            "dxGantt-dialogDeleteDependencyMessage": "Изтриване на връзката",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Премести задачата и запази връзката",
            "dxGantt-undo": "Стъпка назад в хронологията на промените",
            "dxGantt-redo": "Стъпка напред в хронологията на промените",
            "dxGantt-expandAll": "Разгърни всичко",
            "dxGantt-collapseAll": "Свий всичко",
            "dxGantt-addNewTask": "Добави нова задача",
            "dxGantt-deleteSelectedTask": "Изтрий, избраната задача",
            "dxGantt-zoomIn": "Увеличи",
            "dxGantt-zoomOut": "Намали",
            "dxGantt-fullScreen": "На цял екран"
        }
    })
});
