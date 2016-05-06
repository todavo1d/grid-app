(function() {
    angular
        .module('app.gridApp')
        .controller('UsersGridController', UsersGridController);

    function UsersGridController($filter, UsersGridService) {
        this.addNewUser = UsersGridService.addNewUser;
        this.getUsers = UsersGridService.getUsers;
        this.getTranslated = $filter('translate');
    };
})();
