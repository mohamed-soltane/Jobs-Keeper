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
    location: {
        type: String,
        requires: true  
    },
    status: {
        type: String,
        requires: true,
        default: 'Applied'
    },
    date: {
        type: Date,
        default: Date.now  
   }
});

module.exports = mongoose.model('job', JobSchema)