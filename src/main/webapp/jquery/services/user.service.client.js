function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;
    this.searchUser = searchUser;
    this.mailSender = mailSender;
    this.url =
        '/api/user';
    this.loginUrl =
        '/api/login';
    this.registerUrl =
        '/api/register';
    this.profile =
        '/api/profile';
    this.search =
        '/api/search';
    this.email =
        '/api/email';
    var self = this;
    
    
    
    function login(username, password) {

        return fetch(self.loginUrl, {
            method: 'post',
            body: JSON.stringify({username:username, password:password}),
            headers: {
                'content-type': 'application/json'
            }
        });


        
    }

    function register(user) {

        return fetch(self.registerUrl, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });

    }


    function createUser(user) {

        return fetch(self.url, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });


    }




    function findAllUsers() {
        return fetch(self.url)
            .then(function (response) {
                return response.json();
            });
    }

    function findUserById(userId) {

        return fetch(self.profile + '/' + userId)
            .then(function(response){
                return response.json();
            });
    }



    function deleteUser(userId) {
        return fetch(self.url + '/' + userId,{
            method:'delete'
        })
            .then(function (response) {
                return response;
            });
    }

    function updateUser(userId, user) {

        return fetch(self.profile + '/' + userId,{
            method:'put',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }

        })
            .then(function(response){

                if (response.status===200){
                    return response.json();
                }

                else {
                    return null;
                }




            });
    }

    function mailSender(emailId) {

        var emailJson = {email:emailId};

        return fetch(self.email,{
            method:'post',
            body:JSON.stringify(emailJson),
            headers:{
                'content-type':'application/json'
            }

        })
            .then(function(response){
                return response.json();
            });


    }

    function searchUser(user) {

        return fetch(self.search,{
            method:'post',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }

        })
            .then(function(response){
                return response.json();
            });


    }
    
    function codeVerify() {
        
    }


}

