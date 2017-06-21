var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var rilis1 = function (req,res) {
  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    function (e, data, result){
      if (e) {
        res.status(500).send(e)
      } else {
        res.send(data)
      }
  })
}

var rilis2 = function (req,res) {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    function (e, data, result){
      if (e) {
        res.status(500).send(e)
      } else {
        res.send(data)
      }
  })
}

var rilis3 = function (req,res) {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.city}`,
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    function (e, data, result){
      if (e) {
        res.status(500).send(e)
      } else {
        res.send(data)
      }
  })
}

var rilis4 = function (req,res) {
  oauth.post(
    'https://api.twitter.com/1.1/statuses/update.json?status=' + req.body.status,
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    req.body.status,
    "status",
    function (e, data, result){
      if (e) {
        res.status(500).send(e)
      } else {
        res.send(data)
      }
  })
}

module.exports = {
  rilis1,
  rilis2,
  rilis3,
  rilis4
};
