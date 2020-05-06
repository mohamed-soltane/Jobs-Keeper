const express = require('express');
const router = express.Router();


// @route  GET api/jobs
// @desc   Get all users jobs
// @access Private
router.get('/', (req, res) => {
    res.send('Get all jobs');
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