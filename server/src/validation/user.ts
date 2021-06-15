import { NextFunction, Request, Response } from "express";
import { BadRequest, NotFound } from "../middleware/error_handler";


export default class UserValidator {




    /**
     * Login  Validation Handler
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    static on_login(req: Request, res: Response, next: NextFunction) {

        const { username, password }: { username: string, password: string } = req.body;

        console.log(req.body);

        if (!username) next(new BadRequest("username is required"));

        if (!password) next(new BadRequest("password is required"));

        if (password.length < 6) next(new BadRequest("password must not be less than six (6) characters"));


        next();
    }


    /**
     * Registration Validation Handler
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    static on_register(req: Request, res: Response, next: NextFunction) {

        const { firstName, lastName, email, username, password } = req.body;

        if (!firstName) throw "first name is required"

        if (!lastName) throw "last name is required"

        if (!username) throw "username is required"

        if (!email) throw "email is required"

        if (!password) throw "password is required"

        if (password.length < 6) throw "password must not be less than six (6) characters"


        next()
    }





}