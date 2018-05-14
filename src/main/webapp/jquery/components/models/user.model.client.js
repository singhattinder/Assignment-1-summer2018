function User(username, password, firstName, lastName, role, dateOfBirth, phone, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfbirth = dateOfBirth;
    this.phone = phone;
    this.role = role;



    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setEmail = setEmail;
    this.getEmail = getEmail;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;
    this.setLastName = setLastName;
    this.getLastName = getLastName;
    this.setDateOfBirth = setDateOfBirth;
    this.getDateOfBirth = getDateOfBirth;
    this.setPhone = setPhone;
    this.getPhone = getPhone;
    this.setRole = setRole;
    this.getRole = getRole;





    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }

    function setEmail(email) {
        this.email = email;
    }
    function getEmail() {
        return this.email;
    }

    function setPassword(password) {
        this.password = password;
    }
    function getPassword() {
        return this.password;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }
    function getFirstName() {
        return this.firstName;
    }

    function setLastName(lastName) {
        this.lastName = lastName;
    }
    function getLastName() {
        return this.lastName;
    }

    function setDateOfBirth(dateOfbirth) {
        this.dateOfbirth = dateOfbirth;
    }
    function getDateOfBirth() {
        return this.dateOfbirth;
    }

    function setPhone(phone) {
        this.phone = phone;
    }
    function getPhone() {
        return this.phone;
    }

    function setRole(role) {
        this.role = role;
    }
    function getRole() {
        return this.role;
    }







}
