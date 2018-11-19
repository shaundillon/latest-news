/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const express = require('express');
const app = express();
const newsApi = require('./news-api');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/news', async (req, res) => {
  try {
    const results = await newsApi.search(
      req.query,
    );
    return res.json(results.articles);
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
