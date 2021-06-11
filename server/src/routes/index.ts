import { Router } from "express";
import UserRoute from "./user";

const route = Router();


route.use("/user", UserRoute);



export default route;




