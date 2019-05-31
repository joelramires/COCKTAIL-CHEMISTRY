const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/auth-uploads';
mongoose.Promise = Promise;
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});

const routes = require('./routes')

app.use(routes);

app.listen(PORT, () => console.log(`Listening on Localhost:${PORT}`));