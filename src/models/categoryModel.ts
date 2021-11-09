const mongoose = require('mongoose');
const { Schema } = mongoose;
const { YEAR_DEFAULT, MONTH_DEFAULT } = require('../util/util');

const CategorySchema = new Schema({
  name: { 
    type: { categoryName: String, userId: String }, 
    required: true,
    unique: true
  },
  groupId: String,
  userId: String,
  note: String,
  year: { type: Number, default: YEAR_DEFAULT()},
  month: { type: Number, default: MONTH_DEFAULT()},
  assigned: { type: Number, default: 0.00 },
  activity: { type: Number, default: 0.00 },
  available: { type: Number, default: 0.00 }
})

// GOAL - Spending target, current balance vs planned goal 
// Balance by date - current balance vs remaining balance / time remaining

// Eventual auto-assign 

const categoryModel = mongoose.model('categories', CategorySchema);

module.exports = categoryModel;
export {}