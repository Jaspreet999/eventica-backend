const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

//require routes

const port = process.env.PORT || 1313

//database connectivity

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

//use passport for configuration

//routes the requests


app.listen(port,(req,res)=>{
    console.log("server running at port : " + port)
})

module.exports = app