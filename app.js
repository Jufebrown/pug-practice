`use strict`

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set(`view engine`, `pug`)

const names = ["Larry", "Moe", "Curly", "Mr. Rogers"]

app.get('/', (req, res, next) => {
  res.render('index', {subtitle: `This came from my JS data`, names, loggedIn: false})
})
