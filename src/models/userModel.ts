const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  budgetName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  accountsId: [ String ],
  categoriesId: [ String ],
  groupsId: [ String ],
  payeesId: [ String ],
  transactionsId: [ String ],
  startDate: { type: Date, default: new Date() }
})

const userModel = mongoose.model('users', UserSchema);

module.exports = userModel;
export {}