(function() {
    angular
        .module('app.gridApp')
        .service('LanguageSwitcherService', LanguageSwitcherService);

    function LanguageSwitcherService() {
        var translationsTable = {
                ru: {
                    LANGUAGE_SWITCHER: 'Язык',
                    GRID_TITLE: 'Управление пользователями',
                    NAME: 'Имя',
                    PERMISSIONS: 'Права',
                    ACTIONS: 'Опции'
                },
                en: {
                    LANGUAGE_SWITCHER: 'Language',
                    GRID_TITLE: 'Manage users',
                    NAME: 'Name',
                    PERMISSIONS: 'Permissions',
                    ACTIONS: 'Actions'
                }
            },
            translations = Object.keys(translationsTable),
            currentLanguage = 'en';

        return {
            getTranslations: getTranslations,
            setCurrentLanguage: setCurrentLanguage,
            getCurrentLanguage: getCurrentLanguage,
            translate: translate
        }

        function translate(str) {
            return translationsTable[currentLanguage][str];
        };

        function getTranslations() {
            return translations;
        };

        function getCurrentLanguage() {
            return currentLanguage;
        };

        function setCurrentLanguage(l) {
            currentLanguage = l;
        };
    };
})();
