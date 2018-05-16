(function f() {

    $(init);
    var $newPassowrd;
    var $verifyPassword;
    var $submitBtn;
    var userService = new UserServiceClient();



    function init() {

        $submitBtn = $('#submitBtn')
            .click(reset);
        $newPassowrd = $('#newPassword');
        $verifyPassword = $('#verifyPassword');

    }

    function reset() {

        newPassword = $newPassowrd.val();
        verifyPassword =$verifyPassword.val();


        if (newPassword === verifyPassword){
           // userService.updateUser()
        }

        else {
            alert("Password didn't match!");
        }


    }


})();