(function() {
    angular
        .module('app.gridApp')
        .directive('usersGrid', UsersGrid)

    function UsersGrid() {

        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'grid-app/users-grid/users-grid.directive.html',
            controllerAs: 'vm',
            controller: 'UsersGridController'
        }
    };

})();
