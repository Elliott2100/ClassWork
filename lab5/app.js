const express=require('express')
const bodyParser=require('body-parser')
const product=require('./routes/product.route')
const app=express()
const mongoose=require('mongoose')
//mongoose connection
mongoose.connect("mongodb://localhost/productDb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to the dataabase')
})
.catch(err =>{
    console.log('Cannot COnnect with the database',err)
    process.exit()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//http:localhost:3000/products/
app.use('/products',product)
app.use('/',(req,res)=>{
    res.send('Welcome')
})
app.listen(3000,()=>{
    console.log("Server is up and running on port 3000")
})