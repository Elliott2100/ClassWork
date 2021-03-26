const express= require('express')
const router=express.Router() 
const product_controller=require('../controllers/product.controller')

//include the controller here
router.get('/test',product_controller.test)
router.get('/',(req,res)=>{
   res.send('Welcome to the Product Section')
})
//http://localhost:3000/products/create
router.post('/create',product_controller.product_create)
router.get('/:id',product_controller.product_details)
router.delete('/:id/delete',product_controller.product_delete)
router.put('/:id/update',product_controller.product_update)
//export the router hered
module.exports=router;