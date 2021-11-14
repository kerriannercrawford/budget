"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
require('dotenv').config();
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.hash(password, Number(SALT_ROUNDS));
});
const validatePassword = (password, hash) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.compare(password, hash);
});
const YEAR_DEFAULT = () => {
    return new Date().getFullYear();
};
const MONTH_DEFAULT = () => {
    return (new Date().getMonth() + 1);
};
const checkResult = (responseObject, next, errorMessage) => {
    if (!responseObject) {
        return next({
            log: errorMessage,
            message: {
                err: errorMessage
            }
        });
    }
};
const deleteResponseMessage = (type, id) => {
    const idKey = `${type}Id`;
    return {
        [idKey]: id,
        message: `Deletion of ${type} id ${id} was successful`
    };
};
module.exports = {
    encryptPassword,
    validatePassword,
    YEAR_DEFAULT,
    MONTH_DEFAULT,
    checkResult
};
//# sourceMappingURL=util.js.map