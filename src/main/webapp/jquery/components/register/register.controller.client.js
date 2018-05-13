(function f() {

    $(init);
    var $username;
    var $password;
    var $verifyPassword;
    var $login;
    var $registerBtn;

    var userService = new UserServiceClient();


    function init() {

        $registerBtn = $('#registerBtn')
            .click(register);
        $password = $('#password');
        $username = $('#username');
        $verifyPassword = $('#verifyPassword');
        $login = $('#login')
            .click(loginUser);

    }

    function loginUser() {
       // console.log("login user");
        location.href="../login/login.template.client.html"


    }

    function register() {
        //console.log("register called");
        userService.createUser()

    }



})();