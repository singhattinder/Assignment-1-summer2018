(function f() {

    $(init);
    var $firstName;
    var $lastName;
    var $updateBtn;
    var $username;
    var userIdGlobal;
    var $logoutBtn;
    var $dateOfBirth;
    var $phone;
    var $role;
    var $email;


    var userService = new UserServiceClient();

    function init() {

        $firstName = $('#firstName');
        $dateOfBirth = $('#dateOfBirth');
        $phone = $('#phone');
        $email = $('#email');
        $lastName = $('#lastName');
        $role = $('#role');
        $username = $('#username');
        $updateBtn = $('#updateBtn')
            .click(updateUser);
        $logoutBtn = $('#logoutBtn')
            .click(logout);

        var params = new URLSearchParams(location.search.slice(1));
        var userId = params.get("id");

        findUserById(userId);
        userIdGlobal=userId;

    }

    function logout() {
        location.href="../login/login.template.client.html"
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
        $dateOfBirth.val(user.dateOfBirth);
        $phone.val(user.phone);
        $email.val(user.email);
        $role.val(user.role);

    }

    function updateUser() {

        var user = {
            firstName:$firstName.val(),
            lastName:$lastName.val(),
            username:$username.val(),
            id:userIdGlobal,
            dateOfBirth:$dateOfBirth.val(),
            phone:$phone.val(),
            email:$email.val(),
            role:$role.val()

        };

        console.log("date of birth is " + user.dateOfBirth)
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
