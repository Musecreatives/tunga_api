import { Router } from "express";
import AuthController from "../controller/auth";
import AuthValidation from "../validation/auth";

const route = Router();

route.get("/user", AuthController.get_user_by_email);

route.get("/users", AuthController.list_of_users);
 
route.patch("/verify", AuthController.set_user_by_verifiedEmail);


route.post("/login", AuthValidation.login, AuthController.login);

route.post("/register", AuthValidation.register, AuthController.register);


export default route;