const mongoose = require('mongoose');
const { Schema } = mongoose;

const YEAR_DEFAULT = () => {
  return new Date().getFullYear();
}

const MONTH_DEFAULT = () => {
  return (new Date().getMonth() + 1)
}

const GroupSchema = new Schema({
  name: { type: { userId: String, groupName: String }, required: true },
  categories: { type: [ String ], default: [] },
  userId: { type: String, required: true },
  year: { type: Number, default: YEAR_DEFAULT()},
  month: { type: Number, default: MONTH_DEFAULT()},
  assigned: { type: Number, default: 0.00 },
  activity: { type: Number, default: 0.00 },
  available: { type: Number, default: 0.00 }
})

const groupModel = mongoose.model('groups', GroupSchema);

module.exports = groupModel;
export {}