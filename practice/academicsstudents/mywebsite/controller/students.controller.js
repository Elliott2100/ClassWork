const student=require('../model/student.model')
const express = require('express');
let app = express();
let router = express.Router();
 
exports.details=(req,res)=>{
    student.findById({courseid:req.params.id},(err,doc)=>{
        if(err) return res.render(err)
         res.render('show',{page:'For show',menuId:"show",doc:doc})
    })
}
exports.list=(req,res)=>{
    student.find((err,courses)=>{
        if(!err){
           res.render('courses',{page:'Students',menuId:'list',courses:courses})
        }else{
           console.log('Error in retrieving Products'+JSON.stringify(err,undefined,2))
        }
    })
}

exports.show = (req,res)=>{
    console.log(':id>>',req.params.id)
    student.findOne({courseid:req.params.id}).then(function(results){
            res.render('show', {
              page:"Course Details",
              menuId:"Details",
              course:results
            })


    }).catch(function(err){
        console.log(err)
    })
        
      

}