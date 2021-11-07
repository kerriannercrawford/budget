const mongoose = require('mongoose');
const { Schema } = mongoose;

const PayeeSchema = new Schema({
  payees: [
    {
      id: { type: String, required: true, unique: true },
      name: String,
      lastCategory: String
    }
  ]
})

const payeeModel = mongoose.model('payees', PayeeSchema);

module.exports = payeeModel;
export {}