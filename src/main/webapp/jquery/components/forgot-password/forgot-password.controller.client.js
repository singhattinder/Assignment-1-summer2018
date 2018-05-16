(function f() {

    $(init);
    var $resetBtn;
    var $emailFld;
    var userService = new UserServiceClient();



    function init() {

        $resetBtn = $('#resetBtn')
            .click(mailSender);
        $emailFld = $('#emailFld');

    }

    function mailSender() {

        emailId = $emailFld.val();

        userService.mailSender(emailId).then(function (response) {

            if(response.statusCode===202)
            {
                alert("Mail Send Please check your email");
            }
            else {
                alert("Something went wrong!");
            }

        });




    }


})();