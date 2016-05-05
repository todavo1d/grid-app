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
        }

        var translations = ['ru', 'en'];
        var currentLanguage = 'ru';

        return {
            getTranslations: getTranslations,
            setCurrentLanguage: setCurrentLanguage,
            getCurrentLanguage: getCurrentLanguage,
            getCurrentTable: getCurrentTable
        }

        function getCurrentTable() {
            return translationsTable[currentLanguage];
        };

        function getTranslations() {
            return translations;
        };

        function getCurrentLanguage() {
            return currentLanguage;
        };

        function setCurrentLanguage(l) {
            currentLanguage = l;
            console.log(getCurrentTable())
        };
    };
})();
