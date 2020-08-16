const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const debug = require('debug')('app');
// eslint-disable-next-line no-unused-expressions
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world');
});

// eslint-disable-next-line no-console
app.listen(port, debug(`listeningb on port ${port}`));
