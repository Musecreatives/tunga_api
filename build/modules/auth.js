"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.users = [];
        this.users = [];
    }
    Auth.prototype.login = function (email, pwd) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.pwd === pwd;
            return isMatch;
        });
        if (!user)
            throw new Error("invalid email or password");
        user.lastLogin = new Date().toDateString();
        return user.name + " welcome back !";
    };
    Auth.prototype.register = function (name, email, pwd) {
        var user = new user_1.default(name, email, pwd);
        this.users.push(user);
        return user.toJson;
    };
    Auth.prototype.listOfUser = function () {
        // const listOfUser = [];
        // for (let user of this.users){
        //     listOfUser.push(user.toJson)
        // }
        // return listOfUsers
        return this.users.map(function (user) { return user.toJson; });
    };
    Auth.prototype.getUserByEmail = function (email) {
        var user = this.users.find(function (user) { return user.email.toLowerCase() === email.toLowerCase(); });
        if (!user)
            throw "No matching user found";
        return user.toJson;
    };
    Auth.prototype.setIsVerified = function (email, isVerified) {
        var verify = this.users.find(function (verify) { return verify.email.toLowerCase() === email.toLowerCase(); });
        if (!verify)
            throw "User not verified";
        if (isVerified !== true && isVerified !== false)
            throw "isVerified is neither true nor false";
        verify.isVerified = Boolean(isVerified);
        return verify.toJson;
    };
    return Auth;
}());
exports.default = Auth;
