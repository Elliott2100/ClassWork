var express=require('express')
var router=express.Router()
//localhoost:3000/students/
router.post('/',(req,res)=>{
    res.send('Welcome to my home page')
})
//localhoost:3000/students/about
router.get('/about',(req,res)=>{
    res.send("Welcome to about page")
})
module.exports=router