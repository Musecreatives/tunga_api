import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import route from "./routes/index";


const app = express();

app.use(cors())

app.use(morgan("dev"));

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.status(201).send({ message: "Welcome To Our API", status: true });
});


app.use(route);

const PORT = 8081;

app.listen(PORT, () => {

    console.log(`Server Running At http://127.0.0.1:${PORT}`);

})