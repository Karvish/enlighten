const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

//Required All Routes
const eventRoute = require('./routes/event.route');
const userRoute = require('./routes/user.route');
  
//Middle Ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Server static assets if in production
app.use(express.static(path.join(__dirname, 'client/build')));

//Routes Config
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

//API Configs
app.use('/api', eventRoute);
app.use('/api', userRoute);

//Configs
const { mongoURI, port } = require('./config/keys');

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Connect to database
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB Connected');
      //start server
      app.listen(port, () => console.log(`Server running on port ${port}`));
  })
    .catch(err => console.log(err));




  