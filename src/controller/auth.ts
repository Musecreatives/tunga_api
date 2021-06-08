import { Request, Response } from "express";
import Auth from "../modules/auth";


const auth = new Auth();

class AuthController {




    static login(req: Request, res: Response) {

        const { email, pwd } = req.body;

        const result = auth.login(email, pwd);

        res.send({ message: result });
    }


    static register(request: Request, response: Response) {

        const { email, password, name } = request.body;

        const newUser = auth.register(name, email, password);

        response.send({ message: "Account Successfully Updated", data: newUser })
    }

    static list_of_users(req: Request, res: Response) {

        const list = auth.listOfUser();

        res.send(list);
    }

    static get_user_by_email(req: Request, res: Response) {

        const { email } = req.query;

        const user = auth.getUserByEmail(email as string || "");

        res.send(user);
    }

    static set_user_by_verifiedEmail(req: Request, res: Response){

        const {email, isVerified} = req.body;

        const verify = auth.setIsVerified(email as string, isVerified);

        return verify;
    }

}


export default AuthController;



