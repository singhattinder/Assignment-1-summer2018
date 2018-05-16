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
                alert("Mail Sent! Please check your email");
                location.href="../password-verify/password-verify.template.client.html";
            }
            else {
                alert("Something went wrong!");
            }

        });




    }


})();