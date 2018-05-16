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


        userService.codeVerify(codefld).then(function (response) {

            if(response.flag==1){

                location.href="../reset-password/reset-password.template.client.html";

            }
            else {
                alert("Wrong CODE, please wait and try again");
            }

        });



    }


})();