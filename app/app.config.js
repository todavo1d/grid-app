(function() {
    angular
        .module('app')
        .config(configApp)

    function configApp($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                template: '<ui-view></ui-view>'
            })
        $urlRouterProvider
            .otherwise('/');
    };
})();
