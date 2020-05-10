const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Job = require('../models/Job');



// @route  GET api/jobs
// @desc   Get all users jobs
// @access Private
router.get('/', auth, async(req, res) => {
    try{
        const jobs = await Job.find({ user: req.user.id }).sort({ date: -1 });
        res.json(jobs);
    }catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}); 


// @route  POST api/jobs
// @desc   Add  new job 
// @access Private
router.post('/', [ auth, [
    check('title', 'title is required')
    .not()
    .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, companyName, location, status, date } = req.body;

    try {
        const newJob = new Job ({
            title,
            companyName,
            location,
            status,
            date,
            user: req.user.id
         }); 

         const job = await newJob.save();

         res.json(job);
        }catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        } 
    });
  

// @route  PUT api/jobs/:id
// @desc   Update  job 
// @access Private
router.put('/:id', auth,  async (req, res) => {
    const { title, companyName, location, status} = req.body;

    // Build Job Object
    const jobFields = {};
    if(title) jobFields.title = title;
    if(companyName) jobFields.companyName = companyName;
    if(location) jobFields.location = location;
    if(status) jobFields.status = status;


    try{
        let job = await Job.findById(req.params.id);

        if(!job) return res.status(404).json({ msg: 'Job not found' });

        //Make sure User Owns job
        if(job.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'Not authorized'});     
        }
        job = await Job.findByIdAndUpdate(
         req.params.id,
         { $set: jobFields},
         {  new: true });

         res.json(job)
    }catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        } 
});

// @route  DELETE api/jobs
// @desc   Delete  job 
// @access Private
router.delete('/:id',auth,  async(req, res) => {
    try{
        let job = await Job.findById(req.params.id);

        if(!job) return res.status(404).json({ msg: 'Job not found' });

        //Make sure User Owns job
        if(job.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'Not authorized'});     
        }
        await Job.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Contact removed' })
    }catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        } 
});

module.exports = router;