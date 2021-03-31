var express = require('express');
const student_controller=require('../controller/students.controller')
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home' ,menuId:'Home' });
});
router.get('/students',student_controller.list)
router.get('/students/show/:id',student_controller.show)

module.exports = router;
