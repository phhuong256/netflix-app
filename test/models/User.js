const mongoose = require('mongoose');

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('UserSchema', UserSchema);