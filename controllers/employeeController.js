var { Employee } = require('../models/employee');

exports.getEmployees= function() {
    return new Promise(function(fulfill, reject) {
        Employee.find(function(err, result) {
            if (err) {
                fulfill([]);
            } else {
                fulfill(result);
            }
        })
    });
}