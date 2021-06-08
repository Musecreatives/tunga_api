"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = "";
        this.email = "";
        this.pwd = "";
        this._isVerified = false;
        this._lastLogin = "";
        this.name = name;
        this.email = email;
        this.pwd = password;
        this._isVerified = false;
        this._lastLogin = new Date().toDateString();
    }
    User.prototype.toLowerCase = function () {
        throw new Error("Method not implemented.");
    };
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
    Object.defineProperty(User.prototype, "toJson", {
        get: function () {
            return {
                name: this.name,
                email: this.email,
                password: "******",
                isVerified: this.isVerified,
                lastLogin: this.lastLogin
            };
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.default = User;
