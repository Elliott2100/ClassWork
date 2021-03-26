var express=require('express')
var router=express.Router()
//localhost:3000/Books/
router.get('/',(req,res)=>{
    res.send("Add books")
})
router.put('/',(req,res)=>{
    res.send('Update a book')
})
router.post('/',(req,res)=>{
    res.send('Add a book')
})
router.delete('/',(req,res)=>{
    res.send("Delete a book")
})
module.exports=router