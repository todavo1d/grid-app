(function() {
    angular
        .module('app.gridApp')
        .config(configApp)

    function configApp($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.gridApp', {
                url: '/',
                templateUrl: 'grid-app/template.html',
                resolve: {
                    initData: function(UsersGridService) {
                        UsersGridService.init();
                    }
                },
                controller: function ($scope, $filter) {
                    $scope.getTitle = function () {
                        return $filter('translate')('GRID_TITLE');
                    }
                }

            })
    };
})();
