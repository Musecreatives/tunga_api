import { BadRequest, NotFound } from "../middleware/error_handler";
import { fDb } from "../middleware/firebase";
import { hash } from "../middleware/security";

// const userDb = new Database("user");

const userColl = fDb.collection("users");


type TGender = "Male" | "Female";
interface IUserDoc {
    firstName: string;
    lastName: string;
    username: string;
    gender?: TGender;
    email: string;
    password: string;
    isEmailVerified: boolean;
    lastLogin: number;
}


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
        this.password = hash(password + username || "");
        this.isEmailVerified = false;
        this.lastLogin = new Date().toDateString();
    }

    static compare(plainPwd: string, hashedPwd: string): boolean {

        return (hash(plainPwd, "sha256") === hashedPwd)
    }

    static async getUser(username: string) {

        try {
            const docId = hash(username, 'md5');

            const user = await userColl.doc(docId).get();


            if (!user.exists) throw new NotFound("No matching user found");

            return User.fromJson(user.data());

        } catch (error) {

            throw new NotFound("No matching user found");

        }

    }



    static async login(username: string, pwd: string) {

        const user = await User.getUser(username);

        if (!User.compare(pwd + username, user.password)) throw new BadRequest("password is incorrect");

        return user;
    }



    async register() {
        // await userDb.create(this.username, this.toJson());
        console.log(this.toJson());

        const docId = hash(this.username, 'sha256');

        await userColl.doc(docId).set(this.toJson());


        return this.toJson();
    }


    toJson(): IUserDoc {
        return {
            firstName: String(this.firstName),
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            password: this.password,
            isEmailVerified: this.isEmailVerified ?? false,
            lastLogin: Number(this.lastLogin ?? "")
        }
    }

    static fromJson(json: any) {

        const user = new User("", "", "", "", "");

        user.firstName = json['firstName'];
        user.lastName = json['lastName'];
        user.password = hash(json['password'] || "");
        user.username = String(json['username']).toLowerCase();
        user.email = String(json['email']).toLowerCase();
        user.isEmailVerified = json['isEmailVerified'] ?? false;
        user.lastLogin = json['lastLogin'] ?? "";

        return user;
    }

}



