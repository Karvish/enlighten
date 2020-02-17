const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({  
    emp_id: String,
    user_id: String,
    name: String,
    email: String,
    avatar: String,
    role: String  
});

module.exports = User = mongoose.model('users', userSchema);