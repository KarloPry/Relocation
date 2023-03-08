
const express = require('express')
var app = express()
let dominio = 'https://www.google.com/'
app.listen(process.env.PORT || 3000,()=>{
    console.log("Sí sirve")
})
app.get('/', function (req,res){
        res.redirect(dominio)
    })