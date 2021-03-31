const student=require('../model/student.model')
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