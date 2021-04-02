const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const students=require('./routes/student.route')
const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost/StudentDBS",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to the database')
})
.catch(err =>{
    console.log('Cannot Connect with the database',err)
    process.exit()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/students',students)
app.use('/',(req,res)=>{
    res.send('Welcome To Your Own Student API')
})

app.listen(3000,()=>{
    console.log('Server Active')
})