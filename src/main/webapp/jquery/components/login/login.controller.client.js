(function f() {

    $(init);
    var $username;
    var $password;
    var $signinBtn;
    var $forgotpassword;
    var $signup;

    var userService = new UserServiceClient();


    function init() {

        $signinBtn = $('#signinBtn')
            .click(login);
        $password = $('#password');
        $username = $('#username');
        $forgotpassword = $('#forgotpassword');
        $signup = $('#signup');

    }

    function login() {
       // console.log("login clicked");
        username = $username.val();
        password = $password.val()
       // alert(password);


        userService.login(username, password).then(function (response) {
            response.json().then(function(data) {
                alert("Welcome "+data.username);
            });
        });

    }

     // function success(response) {
     //
     //     console.log(response.data);
     // }
})();