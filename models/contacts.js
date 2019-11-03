var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var contactSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
    },
    { timestamps: true }
  );

module.exports = mongoose.model('Contact', contactSchema)
