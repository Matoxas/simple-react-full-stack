const express = require('express');
const mongoose = require('mongoose');

const app = express();

// CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
// Allow Cors
app.use(allowCrossDomain);


// DB Config
const db = require('../../config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//   app.use(express.cookieParser());
//   app.use(express.session({ secret: 'cool beans' }));
//   app.use(express.methodOverride());
//   app.use(app.router);

// ROUTES
app.use('/api/items', require('./routes/api/items'));

app.use(express.static(`${__dirname}/public`));


// LISTEN TO PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
