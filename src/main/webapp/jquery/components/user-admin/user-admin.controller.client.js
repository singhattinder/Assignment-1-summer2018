
(function () {

    jQuery(main);

    var tbody;
    var template;
    var userService = new UserServiceClient();
    var util = new UserUtilitiesClient();

    function main() {
        tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);
        $('#searchUser').click(searchUser);

        findAllUsers();
    }

    function findAllUsers() {
        userService
            .findAllUsers()
            .then(renderUsers);
    }

    function createUser() {

        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var roleFld = $('#roleFld').val();

        if (util.isEmpty(username)) {

            alert("Username is required");

        }
        else if(((util.isEmpty(firstName) || util.isEmpty(lastName)) || (util.isEmpty(password))))
        {
            alert("all feilds are mandatory");

        }

        else {


            var user = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                role: roleFld
            };

            userService
                .createUser(user)
                .then(findAllUsers);
        }
    }

    function renderUsers(users) {
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = template.clone();

            clone.attr('id', user.id);

            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(editUser);

            clone.find('.username')
                .html(user.username);
            clone.find('.firstName')
                .html(user.firstName);
            clone.find('.lastName')
                .html(user.lastName);
            clone.find('#role')
                .html(user.role);


            tbody.append(clone);
        }
    }


    function renderUser(user) {
        tbody.empty();

        if (user.id===-1) {

            alert("User not found, Try again!");
            findAllUsers();
        }
        else {
            var user = user;


            var clone = template.clone();

            clone.attr('id', user.id);

            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(editUser);

            clone.find('.username')
                .html(user.username);
            clone.find('.firstName')
                .html(user.firstName);
            clone.find('.lastName')
                .html(user.lastName);
            clone.find('#role')
                .html(user.role);
            tbody.append(clone);
        }




    }

    function deleteUser(event) {
        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn
            .parent()
            .parent()
            .attr('id');

        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }

    function editUser(event) {
        var editBtn = $(event.currentTarget);
        var userId = editBtn
            .parent()
            .parent()
            .attr('id');

        return userId;

    }

    function searchUser() {

        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();

        var user = {
            username: username
        };

        console.log(util.isEmpty(firstName));
        console.log(util.isEmpty(lastName));

        if(util.isEmpty(username)){


            alert("Please Enter A User name first");

        }

        else if ((util.isEmpty(firstName) && util.isEmpty(lastName))) {

            userService
                .searchUser(user)
                .then(renderUser);

        }

        else {

            alert("Please search with username only");

        }


    }


})();
