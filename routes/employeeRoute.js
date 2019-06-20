const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var employeeCtrl = require('../controllers/employeeController')
var { Employee } = require('../models/employee');

// => localhost:3000/employees/
// router.get('/', (req, res) => {
//     Employee.find((err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
//     });
// });
router.get('/', function(req, res) {
    
    var employees = [];
    employeeCtrl.getEmployees().then(function(employee){
        if(employee.length>0){
            res.status(200).json({ employees: employee })
        }
    })
    
})
module.exports = router;