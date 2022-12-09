const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express()

const prefetch = (req, res, next) => {
  if (req.headers.authorization) {
    console.log('authorization exist')
  } else {
    console.log("authorization does not exist")
  }
  next()
}

app.use("/app", prefetch, createProxyMiddleware({
  target: "http://localhost:3333",
  changeOrigin: true,
  pathRewrite: {
    '^/app/': '/'
  }
}))

app.listen(3000)