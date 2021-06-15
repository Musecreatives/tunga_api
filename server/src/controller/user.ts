import { NextFunction, Request, Response } from "express";
import { SuccessResult } from "../middleware/response";
import { _trySync } from "../middleware/try_catch";
import User from "../modules/user";

export default class UserController {




    static async on_login(req: Request, res: Response, next: NextFunction) {

        const { username, password } = req.body;

        const [err, user] = _trySync(() => User.login(username, password));

        if (err)
            return next(err);
        else
            res.status(200).send(new SuccessResult("login successful", 200, user.toJson));
    }

    static async on_register(req: Request, res: Response) {

        const user = User.fromJson(req.body);

        await user.register()

        res.status(201).send({ message: "account created successfully", data: user.toJson })
    }


}