"use strict";
//  import Users from "./user";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = "";
        this.email = "";
        this.pwd = "";
        this._isVerified = false;
        this._lastLogin = "";
        this.users = [];
        this.name = name;
        this.email = email;
        this.pwd = password;
        this._isVerified = false;
        this._lastLogin = new Date().toDateString();
    }
    Object.defineProperty(User.prototype, "isVerified", {
        get: function () {
            return this._isVerified;
        },
        set: function (arg) {
            this._isVerified = arg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastLogin", {
        get: function () {
            return this._lastLogin;
        },
        set: function (date) {
            this._lastLogin = date;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.default = User;
