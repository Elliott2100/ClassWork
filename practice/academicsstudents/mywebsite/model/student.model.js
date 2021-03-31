const mongoose=require('mongoose')
const schema=mongoose.Schema
let studentschema=new schema({
    courseid:{type:Number,required:true,max:100},
    code:{type:String,required:true,max:100},
    title:{type:String,required:true,max:100},
    crhr:{type:Number,required:true,max:30},
    semester:{type:Number,required:true,max:10}
})

module.exports=mongoose.model('courses',studentschema)