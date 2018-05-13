(function f() {

    $(init);
    var $username;
    var $password;
    var $signinBtn;
    var $forgotpassword;
    var $signup;

    var userService = new UserServiceClient();
    var util = new Utilities();


    function init() {

        $signinBtn = $('#signinBtn')
            .click(login);
        $password = $('#password');
        $username = $('#username');
        $forgotpassword = $('#forgotpassword');
        $signup = $('#signup')
            .click(signup);

    }

    function signup() {
        location.href="../register/register.template.client.html"


    }

    function login() {
        username = $username.val();
        password = $password.val()

        if (!(util.isEmpty($username.val()) || util.isEmpty($password.val()))){
            userService.login(username, password).then(function (response) {

                response.json().then(function(data) {
                    {
                        if (data.username===$username.val()) {
                            goURL();
                        }
                        else {
                            alert("Username/Password incorrect!");
                        }
                    }

                });
            });


        }
        else {
            alert("Both feilds are required");
        }





    }

    function goURL() {
        location.href="../profile/profile.template.client.html"  // change url to your's
    }


})();