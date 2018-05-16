(function f() {

    $(init);
    var $username;
    var $password;
    var $signinBtn;
    var $forgotpassword;
    var $signup;

    var userService = new UserServiceClient();
    var util = new UserUtilitiesClient();


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
                            goURL(data.id);
                        }
                        else if(data.id===-1) {
                            alert("Username/Password incorrect!");
                        }
                        else {
                            alert("User not registered!");

                        }
                    }

                });
            });


        }
        else {
            alert("Both feilds are required");
        }





    }

    function goURL(id) {
        location.href="../profile/profile.template.client.html"+"?id="+id // change url to your's

    }


})();