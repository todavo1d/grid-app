(function() {
    angular
        .module('app.gridApp')
        .filter('translate', translateFilter)

    function translateFilter(LanguageSwitcherService, UsersGridService) {

        function translate(str) {
            return LanguageSwitcherService.translate(str);
        };

        translate.$stateful = true;

        return translate;
    };

})();
