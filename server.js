const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


const items = require('./routes/api/items');


const app = express();
app.use(bodyParser.json())
//DB config
const url = process.env.ATLAS_URI;


//connect to mongo

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => console.log('mongodb connected...'))
.catch((err) => console.log(err));

app.use('/api/items', items)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));
