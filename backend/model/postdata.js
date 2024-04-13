const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    email: String,
    position:String,
    address: String
});

const dataModel = mongoose.model('post', schema);
module.exports = dataModel;
