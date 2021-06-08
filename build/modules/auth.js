"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    // new_users: Array<Register> =<>
    function Auth() {
        //    const user1 = new User("Sarah", "sarah@yahoo.com", "12345");
        //    const user2 = new User("Paul", "paul@outlook.com", "password");
        this.users = [];
        this.users = [];
    }
    Auth.listOfUsers = function () {
        throw new Error("Method not implemented.");
    };
    Auth.prototype.login = function (email, pwd) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.pwd === pwd;
            return isMatch;
        });
        if (!user)
            throw new Error("invalid email or password");
        user.lastLogin = new Date().toDateString();
        return user.name + " Welcome Back!!";
    };
    Auth.prototype.register = function (name, email, pwd) {
        var userData = new user_1.default(name, email, pwd);
        this.users.push(userData);
        return {
            name: userData.name,
            email: userData.email,
            pwd: "*******"
        };
    };
    Auth.prototype.listOfUser = function () {
        return this.users.map(function (user) { return user.toJson; });
    };
    Auth.prototype.getUserByEmail = function (email) {
        var user = this.users.find((this.users));
    };
    return Auth;
}());
exports.default = Auth;
