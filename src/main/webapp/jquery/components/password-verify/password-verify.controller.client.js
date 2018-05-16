(function f() {

    $(init);
    var $submitBtn;
    var $codeFld;
    var userService = new UserServiceClient();



    function init() {

        $submitBtn = $('#submitBtn')
            .click(verify);
        $codeFld = $('#codeFld');

    }

    function verify() {

        codefld = $codeFld.val();






    }


})();