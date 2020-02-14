const mongoose = require('mongoose'),
      uuid = require('uuid/v4');

module.exports = mongoose.Schema({
    title: String,
    desc: String,
    dueDate: Date,
    price: Number,
    priority: String,
    labels: [String]
});