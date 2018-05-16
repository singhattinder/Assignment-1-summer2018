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
            userService.resetPassword(newPassword).then(function (response) {
                console.log(response.flag);

                if(response.flag==1){

                    alert("Password changed successfully");
                    location.href="../login/login.template.client.html";
                }
                else {
                    alert("Something went wrong");
                }

            });
        }

        else {
            alert("Password didn't match!");
        }


    }


})();