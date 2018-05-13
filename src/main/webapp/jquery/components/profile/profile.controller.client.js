(function f() {

    $(init);
    var $firstName;
    var $lastName;
    var $updateBtn;
    var $username;
    var userIdGlobal;

    var userService = new UserServiceClient();

    function init() {

        $firstName = $('#firstName');
        $lastName = $('#lastName');
        $username = $('#username');
        $updateBtn = $('#updateBtn')
            .click(updateUser);

        findUserById(242);
        userIdGlobal=242;

    }

    function findUserById(userId) {
        userService
            .findUserById(userId)
            .then(renderUser);
    }

    function renderUser(user) {
        //console.log("render user "+ user.id);


        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
        $username.val(user.username);
    }

    function updateUser() {

        var user = {
            firstName:$firstName.val(),
            lastName:$lastName.val(),
            username:$username.val(),
            id:userIdGlobal
        };
        //console.log("user id update user");

        userService.updateUser(userIdGlobal, user).then(success);

    }

    function success(response) {
        if (response === null)
        {
            alert("Unable to update");
        }

        else {
            alert("success");
        }

    }


})();
