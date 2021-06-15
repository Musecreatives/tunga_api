import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { CustomError } from "./middleware/error_handler";
import route from "./routes/index";


const app = express();

app.use(cors())

app.use(morgan("dev"));

app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome To Our API", status: true });
});


app.use(route);


// Error Handles
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(err.toJson)
    return res.status(err.code).send(err);
});

const PORT = 8081;

app.listen(PORT, () => {

    console.log(`Server Running At http://127.0.0.1:${PORT}`);

})