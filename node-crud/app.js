// importing modules
const express = require('express');

const userRoutes = require('./routes/user');

// express app
const app = express();
const port = process.env.port || 8000;

// express middleware
app.use(express.json());

//add routing to app
app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log("Server is running")
});