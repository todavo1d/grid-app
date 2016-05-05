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
            Object.keys(scope.user).length === 0 ? scope.editMode = true : scope.editMode = false;
            scope.editUser = function() {
                scope.editMode = !scope.editMode;
            };
            scope.deleteUser = function() {
                UsersGridService.deleteUser(scope.user);
            };
        };
    };

})();
