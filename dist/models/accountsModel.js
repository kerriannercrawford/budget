"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const accountSchema = new Schema({
    name: {
        type: { userId: String, accountName: String },
        required: true,
        unique: true
    },
    active: { type: Boolean, default: true },
    clearedBalance: { type: Number, default: 0.00 },
    unclearedBalance: { type: Number, default: 0.00 }
});
const accountModel = mongoose.model('accounts', accountSchema);
module.exports = accountModel;
//# sourceMappingURL=accountsModel.js.map