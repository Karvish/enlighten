const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({  
    emp_id: String,
    user_id: String,
    event_id: String,
    detail: {
        title: String,
        description: String,
        instructors:[{
            emp_id: String,           
            name: String
        }],
        thumb_img: String,
        held_on:  { type: Date},
        held_at:  String             
    },
    published: Boolean,
    likes: [{
        emp_id: String,
        date: { type: Date, default: Date.now }
    }],
    comments: [{
        emp_id: String,
        text: { type: String, required: true },
        date: { type: Date, default: Date.now }
    }],
    created_at: { type: Date, default: Date.now},
    updated_at: { type: Date, default: Date.now }
});

module.exports = Event = mongoose.model('events', eventSchema);