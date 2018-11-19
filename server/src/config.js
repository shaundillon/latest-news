// Get an API key from https://newsapi.org/register
const { APIKEY } = process.env;

if (!APIKEY) {
  console.error('APIKEY environment variable missing. Please re-run with `APIKEY=<key> npm run server`');
  process.exit(1);
}

module.exports = {
  apiKey: APIKEY,
  newsApi: 'https://newsapi.org/',
};
