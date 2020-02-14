const mongoose = require('mongoose'),
      Task     = require('./Task'),
      uuid     = require('uuid/v4');

const clientSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    venmo: String,
    cashapp: String,
    phoneNumber: String,
    tasks: [Task],
    revenue: Number
});

module.exports = mongoose.model('Client', clientSchema);