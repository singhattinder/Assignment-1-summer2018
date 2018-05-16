(function f() {

    $(init);
    var $resetBtn;
    var $emailFld;
    var userService = new UserServiceClient();



    function init() {

        $resetBtn = $('#resetBtn')
            .click(mailSender);
        $emailFld = ('#emailFld');


    }

    function mailSender() {

        userService.mailSender("attinder.saini@gmail.com").then(function (response) {

            console.log(response);

        });




    }


})();