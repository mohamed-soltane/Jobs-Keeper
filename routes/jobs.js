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
router.post('/', (req, res) => {
    res.send('Add  new job');
});

// @route  PUT api/jobs/:id
// @desc   Update  job 
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update job');
});

// @route  DELETE api/jobs
// @desc   Delete  job 
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete job');
});

module.exports = router;