const express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userController')
router.get('/', function(req, res) { 
    var employees = [];
    userCtrl.getUsers().then(function(user){
        if(user.length>0){
            res.status(200).json({ user: user })
        }
    })
    
})
router.post('/login',function(req,res){
    var data = req.body.data;
    username = data.username
    password = data.password
    userCtrl.validate(username,password).then(function(result){
        if(result== true){
            res.status(200).json({ success: true }) 
        }
        else{
            res.status(200).json({ success: false }) 
        }
    })
})
module.exports = router;