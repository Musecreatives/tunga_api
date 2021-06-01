import express from "express";


const app = express();


app.get("/",(req,res)=>{

    res.send("Welcome to My Express Api");
})


app.get("/login",(req,res)=>{

    res.send("This is the login page");
})


const PORT = 8081;

app.listen(PORT,()=>{
    console.log("Server Running At http://127.0.0.1:"+PORT)
})





