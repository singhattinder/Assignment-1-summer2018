//IFFE immediately invoked function expression

(function f() {

    jQuery(init);
    var tbody;
    var template;
    var userService = new UserServiceClient();


    function init() {
        tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);

        findAllUsers();


    }

    function findAllUsers() {
        userService
            .findAllUsers()
            .then(renderUsers);
    }


    
    function renderUsers(users) {
        tbody.empty();
        for (var i = 0; i < users.length; i++){

            var user = users[i];
            console.log(user);
            var clone = template.clone();
            clone.attr('id',user.id);
            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(editUser);
            clone.find('.username').html(user.username);
            clone.find('.firstname').html(user.firstName);
            clone.find('.lastname').html(user.lastName);
            tbody.append(clone);

        }
        
    }

    function deleteUser(event) {

        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn
            .parent()
            .parent()
            .attr('id');

        userService.deleteUser(userId).then(findAllUsers);




    }

    function editUser(event) {

        var editBtn = $(event.currentTarget);
        var userId = editBtn
            .parent()
            .parent()
            .attr('id');

        //userService.editUser(userId).then(findAllUsers);
        console.log(userId);
    }

    function createUser() {

        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();

        var user = {
            username:username,
            password:password,
            firstName:firstName,
            lastName:lastName
        };

        userService.createUser(user).then(findAllUsers);


    }

})();

