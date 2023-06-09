const path = require('path');
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const PORT = 3000;
const controller = require(__dirname + '/controllers/controller');

// const mongoURI = 'mongodb+srv://justindilts:obq374OSSmLJNoUF@jeopardy.qjtss6m.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.get('/api/categories', controller.getCats, function(req, res) {
  res.status(200).send(res.locals.cats);
});

// app.get('api/clues', controller.getClues, function(req, res) {
//   res.status(200).send(res.locals);
// });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;