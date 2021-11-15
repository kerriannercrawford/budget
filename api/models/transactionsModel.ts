const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionsSchema = new Schema({
  accountId: { type: String, required: true },
  categoryId: { type: String, required: true },
  payeeId: { type: String, required: true },
  groupId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Date, default: new Date() },
  outflow: { type: Number, default: 0.00 },
  inflow: { type: Number, default: 0.00 },
  cleared: { type: Boolean, default: false },
  memo: String,
})

const transactionModel = mongoose.model('transactions', TransactionsSchema);

module.exports = transactionModel;
export {}