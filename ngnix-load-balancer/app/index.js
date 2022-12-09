const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const preFetch = (req, res, next) => {
  console.log('request to instance 1')
  // if(req.headers.authorization){
  //   console.log("authorization exits")
  // } else {
  //   console.log("authorization does not exists")
  // }
  next()
}

app.use('/', preFetch, createProxyMiddleware({
  target: 'https://random-data-api.com/api/users/random_user?size=1', changeOrigin: true
}));
app.listen(3000);