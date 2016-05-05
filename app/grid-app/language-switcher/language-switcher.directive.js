(function() {
    angular
        .module('app.gridApp')
        .directive('languageSwitcher', LanguageSwitcher)

    function LanguageSwitcher(LanguageSwitcherService) {

        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: 'grid-app/language-switcher/language-switcher.directive.html',
            link: link
        };

        function link(scope) {
            scope.currentValue = LanguageSwitcherService.getCurrentLanguage();
            scope.getTranslations = LanguageSwitcherService.getTranslations;
            scope.setCurrentLanguage = function(l) {
                LanguageSwitcherService.setCurrentLanguage(l);
            };
        };
    };

})();
