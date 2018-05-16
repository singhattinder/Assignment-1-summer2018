function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateProfile = updateProfile;
    this.register = register;
    this.login = login;
    this.searchUser = searchUser;
    this.mailSender = mailSender;
    this.codeVerify = codeVerify;
    this.resetPassword = resetPassword;
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
    this.verify =
        '/api/verify';
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

    function updateProfile(userId, user) {

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
    
    function codeVerify(code) {

        return fetch(self.verify + '/' + code,{
            method:'get'
        })
            .then(function (response) {
                return response.json();
            });
        
    }

    function resetPassword(password) {

        var usr = {password:password};

        return fetch(self.verify,{
            method:'post',
            body:JSON.stringify(usr),
            headers:{
                'content-type':'application/json'
            }

        })
            .then(function(response){
                return response.json();
            });


    }


}

