const validator = require("validator");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: String
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;