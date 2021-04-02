const Students = require('../model/student.model')
exports.test = (req, res) => {
     res.send('This is just a test')
}
exports.student_create = (req, res) => {
     let setting = new Students({
          name: req.body.name,
          reg_no: req.body.reg_no,
          gender: req.body.gender,
          email: req.body.email,
          CNIC: req.body.CNIC
     });
     setting.save((err)=>{
          if (err) { 
               return next(err);
          }
          res.send('Created Successfully');
     });
}
exports.student_details = (req, res) => {
     Students.findById(req.params.id, (err, results) => {
          if (err) return next(err)
          
          console.log(results)
          res.send(results)
     })
}
exports.student_update=(req,res)=>{
     Students.findByIdAndUpdate(req.params.id,{$set:req.body},(err,product)=>{
       if(err) return next(err)
       res.send('Student Updated Succesfully')
     })
 }
 exports.student_delete=(req,res)=>{
     Students.findByIdAndDelete(req.params.id ,(err)=>{
         if(err) return next(err)
         res.send('Deleted Successfully')
     })
    }
