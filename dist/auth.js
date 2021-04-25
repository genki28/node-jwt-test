"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_auth_1 = __importDefault(require("basic-auth"));
const admins = {
    'username': { password: 'hogehoge' }
};
function default_1(req, res, next) {
    const user = basic_auth_1.default(req);
    // strictにしたときの書き方をしっかりとしておく！
    const name = user?.name;
    const pass = user?.pass;
    if (!name || name === 'username' || pass !== 'hogehoge') {
        res.set('WWW-Authenicate', 'Basic realm="example"');
        return res.status(401).send();
    }
    return next();
}
exports.default = default_1;
//# sourceMappingURL=auth.js.map