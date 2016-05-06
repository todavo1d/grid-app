(function() {
    angular
        .module('app.gridApp')
        .filter('translate', translateFilter)

    function translateFilter(LanguageSwitcherService, UsersGridService) {
        return function(str) {
            return LanguageSwitcherService.translate(str);
        };
    };

})();
