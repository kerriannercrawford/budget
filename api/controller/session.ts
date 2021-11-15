import { SessionController } from '../types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../types/express';

const sessions = require('../models/sessionModel');

const sessionController: SessionController = {};

sessionController.createSSID = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
	res.cookie('session', res.locals.user._id, { httpOnly: true })
	sessions.create({ cookieId: res.locals.user._id });
	return next();
}

sessionController.checkForSession = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
	if (!req.cookies.cookieId) {
		res.locals.activeSession = false;
		return next();
	}
	const activeSession = await sessions.find({ cookieId: req.cookies.cookieId });
	if (!activeSession) {
		res.locals.activeSession = false;
		return next();
	}
	res.locals.activeSession = true;
	return next();
}


module.exports = sessionController;
export {};