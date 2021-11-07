const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
  accounts: [
    {
      id: { type: String, required: true, unique: true },
      name: String,
      active: Boolean,
      clearedBalance: Number,
      unclearedBalance: Number
    }
  ]
})

const accountModel = mongoose.model('budget', accountSchema);

module.exports = accountModel;
export {}