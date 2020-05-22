const {Schema, model} = require('mongoose');

const jobSchema = new Schema({
    title: {type: String, required: true},
    company: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    skills: [String]
}, 
// May be used for job expiry
{timestamps: true});

module.exports = model('Job', jobSchema);