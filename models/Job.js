const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title:{
        type: String,
        requires: true
    },
    companyName: {
        type: String,
        requires: true  
        },
    email: {
        type: String,
        requires: true
        },
    phone: {
        type: String,
        requires: true  
    },
    location: {
        type: String,
        requires: true  
    },
    date: {
        type: Date,
        default: Date.now  
   }
});

module.exports = mongoose.model('job', JobSchema)