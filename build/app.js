"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("Welcome to My Express Api");
});
app.get("/login", function (req, res) {
    res.send("This is the login page");
});
var PORT = 8081;
app.listen(PORT, function () {
    console.log("Server Running At http://127.0.0.1:" + PORT);
});
