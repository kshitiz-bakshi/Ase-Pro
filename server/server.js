const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbConfig = require('./config/dbConfig')
const port = process.env.PORT || 6000;

const userRoute = require('./routes/userRoutes');

app.use('./user', userRoute);

app.listen(port, ()=> console.log(`Node/Express server started on' ${port}`));
