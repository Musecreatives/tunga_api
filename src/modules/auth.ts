import User from "./user";



export default class Auth {


    users: Array<User> = []

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

    setIsVerified(email: string, isVerified: boolean){

        const user = this.users.find((user) => user.email.toLowerCase() === email.toLowerCase() this.users.isVerified.toLowerCae() === isVerified);

        if (!user) throw "No matching user found";

        return user.toJson;

    }

}





