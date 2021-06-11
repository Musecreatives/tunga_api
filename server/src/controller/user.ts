import { Request, Response } from "express";
import User from "../modules/user";

export default class UserController {




    static on_login(req: Request, res: Response) {

        const user = User.fromJson(req.body);

        res.status(200).send({ message: "login successful", data: user.toJson })
    }

    static on_register(req: Request, res: Response) {

        const user = User.fromJson(req.body);

        res.status(201).send({ message: "account created successfully", data: user.toJson })
    }


}