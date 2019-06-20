var  User = require('../models/users');

exports.getUsers = function() {
    return new Promise(function(fulfill, reject) {
        User.find(function(err, result) {
            if (err) {
                fulfill([]);
            } else {
                fulfill(result);
            }
        })
    });
}
exports.validate = function(name,password) {
    return new Promise(function(fulfill, reject) {
        flag=false
        User.find(function(err, result) {
            if (err) {
                fulfill(false);
            } else {
                result.forEach(function(element) {
                    if(element.username==name && element.password == password ){
                        flag=true
                    }
                });
                if(flag==true){
                    fulfill(true)
                }
                else{
                    fulfill(false)
                }
            }
        })
    });
}