(function() {
    angular
        .module('app.gridApp')
        .service('UsersGridService', UsersGridService);

    function UsersGridService($http) {
        var users = [];

        return {
            init: init,
            getUsers: getUsers,
            deleteUser: deleteUser,
            addNewUser: addNewUser
        };

        function init() {
            return  $http
                        .get('../../json/users.json')
                        .success(function (data) {
                            users.length = 0;
                            data.forEach(function(user) {
                                users.push(user)
                            });
                    });
        };

        function getUsers() {
            return users;
        };

        function deleteUser(user) {
            var index = users.indexOf(user);

            users.splice(index, 1);
        };

        function addNewUser() {
            users.push({});
        };

    };
})();
