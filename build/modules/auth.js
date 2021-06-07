"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.users = [];
        var user1 = new user_1.default("Sarah", "sarah@yahoo.com", "12345");
        var user2 = new user_1.default("Paul", "paul@outlook.com", "password");
        this.users = [user1, user2];
    }
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
    return Auth;
}());
exports.default = Auth;
