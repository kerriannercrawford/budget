"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const SessionSchema = new Schema({
    cookieId: { type: String, required: true },
    expiresAt: { type: Date, expires: '1m', default: Date.now }
});
const sessionModel = mongoose.model('sessions', SessionSchema);
module.exports = sessionModel;
//# sourceMappingURL=sessionModel.js.map