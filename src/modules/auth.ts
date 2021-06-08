import User from "./user";



export default class Auth {


    users: Array<User> = []
    verify: any;
    isVerified: any;

    constructor() {

        this.users = []
    }


    login(email:string,pwd:string) {

        const user = this.users.find((e)=>{
            const isMatch = e.email === email && e.pwd ===pwd;
            return isMatch
        });

        if(!user) throw new Error("invalid email or password")

        user.lastLogin = new Date().toDateString();

        return user.name + " welcome back !";
    }


    register(name: string, email: string, pwd: string) {

        const user = new User(name, email, pwd);

        this.users.push(user);

        return user.toJson
    }

    listOfUser() {

        // const listOfUser = [];

        // for (let user of this.users){
        //     listOfUser.push(user.toJson)
        // }

        // return listOfUsers

        return this.users.map((user) => user.toJson);
    }

    getUserByEmail(email: string) {

        const user = this.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

        if (!user) throw "No matching user found";

        return user.toJson;
    }

    setIsVerified(email: string,  isVerified: boolean){

        const verify = this.users.find((verify) => verify.email.toLowerCase() === email.toLowerCase());

        if (!verify) throw "User not verified";

        if(isVerified !== true && isVerified !== false) throw "isVerified is neither true nor false";
       
        verify.isVerified = Boolean(isVerified);

        return verify.toJson;

    }

}





