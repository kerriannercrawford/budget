const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  groupId: String,
  name: String,
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

const categoryModel = mongoose.model('budget', CategorySchema);

module.exports = categoryModel;
export {}