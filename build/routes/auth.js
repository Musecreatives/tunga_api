"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("../validation/auth"));
var auth_2 = __importDefault(require("../controller/auth"));
var route = express_1.Router();
route.post("/login", auth_1.default.login, auth_2.default.login);
route.post("/register", auth_1.default.register, auth_2.default.register);
route.post("/password/reset", function (req, res) {
    res.send("This is the password reset page");
});
exports.default = route;
