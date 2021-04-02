const express=require('express')
const router=express.Router()
const student_controller=require('../controller/student.controller')
//test route
router.get('/test',student_controller.test)
//Find Student By id
router.get('/:id',student_controller.student_details)
router.get('/',(req,res)=>{
    res.send('Welcome to your route phase')
})
// DELETE
router.delete('/:id',student_controller.student_delete)
//CREATE
router.post('/admission',student_controller.student_create)
//Update
router.put('/:id/update',student_controller.student_update)
module.exports=router;