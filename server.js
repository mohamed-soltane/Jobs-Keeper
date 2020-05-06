const express = require('express');

const app = express();
app.get('/', (req, res) => res.json({msg: 'Welcome to Jobs Keeper API'}));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));