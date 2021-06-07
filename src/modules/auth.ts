import User from "./user"




export default class Auth {

    users: Array<User> = []

    // new_users: Array<Register> =<>

    constructor() {

       const user1 = new User("Sarah", "sarah@yahoo.com", "12345");
       const user2 = new User("Paul", "paul@outlook.com", "password");

       this.users = [user1, user2]
    }

    
    login(email:string,pwd:string){

        const user = this.users.find((e)=>{
            const isMatch = e.email === email && e.pwd ===pwd;
            return isMatch;
        });

        if(!user) throw new Error("invalid email or password");

        user.lastLogin = new Date() .toDateString();

        return user.name + " Welcome Back!!";
    }

    register(name:string, email:string, pwd:string){
        const userData = new User(name, email, pwd);

        this.users.push(userData)
   

        }
    }


