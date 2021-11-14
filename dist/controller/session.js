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
const sessions = require('../models/sessionModel');
const sessionController = {};
sessionController.createSSID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie('session', res.locals.user._id, { httpOnly: true });
    sessions.create({ cookieId: res.locals.user._id });
    return next();
});
sessionController.checkForSession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.cookies.cookieId) {
        res.locals.activeSession = false;
        return next();
    }
    const activeSession = yield sessions.find({ cookieId: req.cookies.cookieId });
    if (!activeSession) {
        res.locals.activeSession = false;
        return next();
    }
    res.locals.activeSession = true;
    return next();
});
module.exports = sessionController;
//# sourceMappingURL=session.js.map