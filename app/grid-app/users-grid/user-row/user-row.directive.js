(function() {
    angular
        .module('app.gridApp')
        .directive('userRow', UserRow)

    function UserRow(UsersGridService) {

        return {
            restrict: 'A',
            replace: true,
            scope: {
                user: '='
            },
            templateUrl: 'grid-app/users-grid/user-row/user-row.directive.html',
            link: link
        };

        function link(scope) {
            scope.editMode = Object.keys(scope.user).length === 0;
            scope.changeMode = function() {
                scope.editMode = !scope.editMode;
            };
            scope.deleteUser = function() {
                UsersGridService.deleteUser(scope.user);
            };
        };
    };

})();
