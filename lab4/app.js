//locahost:3000/books
var express=require('express')
var app=express()
var r1=require('./router')
var Rbook=require('./bookrouter')
app.use('/Books',Rbook)
app.use('/students',r1)
app.use('/',(req,res)=>{
    res.send('Welcome')
})
var server=app.listen(3000,()=>{console.log("Server is running on 3000")})