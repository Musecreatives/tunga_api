import { Router } from "express";
import TodoRoute from "./todo";
import UserRoute from "./user";


const route = Router();


route.use("/user", UserRoute);
route.use("/todo", TodoRoute);



export default route;




