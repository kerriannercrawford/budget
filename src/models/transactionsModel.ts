const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionsSchema = new Schema({
  accountId: String,
  categoryId: String,
  payeeId: String,
  groupId: String,
  memo: String,
  date: Date,
  outflow: Number,
  inflow: Number,
  cleared: Boolean
})

const transactionModel = mongoose.model('transactions', TransactionsSchema);

module.exports = transactionModel;
export {}