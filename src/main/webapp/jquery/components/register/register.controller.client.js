(function f() {

    $(init);
    var $username;
    var $password;
    var $verifyPassword;
    var $login;
    var $registerBtn;
    var $firstName;
    var $lastName;

    var userService = new UserServiceClient();


    function init() {

        $registerBtn = $('#registerBtn')
            .click(register);
        $password = $('#password');
        $username = $('#username');
        $verifyPassword = $('#verifyPassword');
        $login = $('#login')
            .click(loginUser);
        $firstName = $('#firstName');
        $lastName = $('#lastName');

    }

    function loginUser() {
       // console.log("login user");
        location.href="../login/login.template.client.html"


    }

    function register() {
        //console.log("register called");
        if ($password.val()===$verifyPassword.val()){

            var user = {
                firstName:$firstName.val(),
                lastName:$lastName.val(),
                username:$username.val(),
                password:$password.val()
            };
            

            
            
            userService.register(user).then(function (response) {

                response.json().then(function(data) {

                    if (data.username===$username.val() && data.id===0)
                    {
                        alert("User already Exits");
                    }

                    else {
                        alert("You are registered");
                    }


                });

            });

        }
        else {
        alert("password not matched");
        }
    }









})();