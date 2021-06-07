"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../modules/auth"));
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        //     if(email !== "john@gmail.com" || pwd!== "123456"){
        //         throw new Error("email address or password is incorrect")
        // }
        var auth = new auth_1.default();
        var result = auth.login(email, pwd);
        res.send({ message: result });
    };
    AuthController.register = function (req, res) {
        var _a = req.body, name = _a.name, email = _a.email, pwd = _a.pwd;
        var auth = new auth_1.default();
        var result = auth.register(name, email, pwd);
        res.send({ message: result });
    };
    return AuthController;
}());
exports.default = AuthController;
