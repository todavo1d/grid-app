(function() {
    angular
        .module('app.gridApp')
        .filter('translate', translateFilter)

    function translateFilter(LanguageSwitcherService, UsersGridService) {
        return function(str) {
            console.log('here')
            return LanguageSwitcherService.getCurrentTable()[str];
        };
    };

})();
