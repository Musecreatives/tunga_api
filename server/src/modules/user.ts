

export default class User {

    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    private isEmailVerified: boolean;
    private lastLogin: string;



    constructor(firstName: string, lastName: string, username: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.isEmailVerified = false;
        this.lastLogin = new Date().toDateString();
    }

    login() {
        console.log(this.toJson);
    }

    register() {
        console.log(this.toJson);
    }


    toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            password: this.password,
            isEmailVerified: this.isEmailVerified,
            lastLogin: this.lastLogin
        }
    }

    static fromJson(json: any) {

        const user = new User("", "", "", "", "");

        user.firstName = json['firstName'];
        user.lastName = json['lastName'];
        user.username = String(json['username']).toLowerCase();
        user.email = String(json['email']).toLowerCase();
        user.isEmailVerified = json['isEmailVerified'];
        user.lastLogin = json['lastLogin'];

        return user;
    }

}



