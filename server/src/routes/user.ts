import { Router } from "express";
import UserController from "../controller/user";
import UserValidator from "../validation/user";


const route = Router();



route.post("/login", UserValidator.on_login, UserController.on_login)

route.post("/register", UserValidator.on_register, UserController.on_register)




export default route;




