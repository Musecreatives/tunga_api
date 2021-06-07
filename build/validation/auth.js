"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthValidation = /** @class */ (function () {
    function AuthValidation() {
    }
    AuthValidation.login = function (req, res, next) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        if (typeof email !== "string")
            throw "Email must be a string";
        if (typeof pwd !== "string")
            throw "pwd must be a string";
        if (pwd.length < 6)
            throw "Password mush not be less than six (6) characters";
        next();
    };
    AuthValidation.register = function (req, res, next) {
        var _a = req.body, name = _a.name, email = _a.email, pwd = _a.pwd;
        if (typeof name !== "string")
            throw "Name must be a string";
        if (typeof email !== "string")
            throw "Email must be a string";
        if (typeof pwd !== "string")
            throw "Password must be a string";
        next();
    };
    return AuthValidation;
}());
exports.default = AuthValidation;
