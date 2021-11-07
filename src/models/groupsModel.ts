const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupSchema = new Schema({
  name: { type: String, unique: true, required: true },
  categories: [ String ],
  assigned: {
    Number: {
      String: Number
    }
  },
  activity: {
    Number: {
      String: Number
    }
  },
  available: {
    Number: {
      String: Number
    }
  }
})

const groupModel = mongoose.model('budget', GroupSchema);

module.exports = groupModel;
export {}