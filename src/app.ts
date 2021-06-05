import bodyParser from "body-parser";
import express from "express";
import loginRoute from "./routes/login";



const app = express();


app.use(bodyParser.json({ type: "*/*" }));



app.get("/",(req,res)=>{

    res.send("Welcome to My Express Api");
})


/// All Route 

app.use(loginRoute);


const PORT = 8081;

app.listen(PORT,()=>{
    console.log("Server Running At http://127.0.0.1:"+PORT)
})





