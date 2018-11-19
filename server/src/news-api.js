/* eslint-disable no-console */

const fetch = require('node-fetch');
const querystring = require('querystring');

const config = require('./config');

const API_URL = `${config.newsApi}v2/everything`;

const formatParams = params => querystring.stringify({
  apiKey: config.apiKey,
  ...params,
});

const urlWithParams = (params) => `${API_URL}?${formatParams(params)}`;

const search = async (params) => {
  try {
    const response = await fetch(urlWithParams(params),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.json();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  search,
};
