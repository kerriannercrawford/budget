const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  budgetName: String,
  accountsId: String,
  categoriesId: String,
  groupsId: String,
  payeesId: String,
  transactionsId: String,
  startDate: { type: Date, default: new Date() }
})

const userModel = mongoose.model('users', UserSchema);

module.exports = userModel;
export {}