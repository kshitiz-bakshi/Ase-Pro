const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbConfig = require('./config/dbConfig')
const port = process.env.PORT || 4000;

const usersRoute = require('./routes/usersRoutes');

app.use('/api/users', usersRoute);

app.listen(port, ()=> console.log(`Node/Express server started on' ${port}`));
