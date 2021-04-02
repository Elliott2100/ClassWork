const mongoose=require('mongoose')
const schema=mongoose.Schema
let studentschem= new schema({
      name:{type:String, required:true},
      reg_no:{type:Number,required:true, max:1000000000},
      gender:{type:String, required:true},
      email:{type:String,required:true},
      CNIC:{type:Number,required:true,max:99999999}
})
module.exports= mongoose.model('Students',studentschem)