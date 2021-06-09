import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

const app = express();


app.use(morgan("dev"));

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.status(201).send({ message: "Welcome To Our API", status: true });
})

const PORT = 8081;

app.listen(PORT, () => {

    console.log(`Server Running At http://127.0.0.1:${PORT}`);

})