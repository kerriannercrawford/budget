const mongoose = require('mongoose');
const { Schema } = mongoose;

const PayeeSchema = new Schema({
  name: { 
    type: { payeeName: String, userId: String }, 
    required: true, 
    unique: true 
  },
  lastCategory: String,
  userId: { type: String, required: true }
})

const payeeModel = mongoose.model('payees', PayeeSchema);

module.exports = payeeModel;
export {}