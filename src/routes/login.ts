import { Request, Response, Router } from "express";
import LoginValidation from "../validation/login";

const route = Router();

route.post("/login", LoginValidation.login, (req: Request, res: Response) => {

    console.log(req.body)

    res.send("This is the login page");
})


route.post("/register", (req, res) => {

    res.send("This is the register page");
})


route.post("/password/reset", (req, res) => {

    res.send("This is the password reset page");
})

export default route;