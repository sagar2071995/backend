const mongoose =  require('mongoose')
mongoose.connect('mongodb://sagar95:sagar1995@ds018258.mlab.com:18258/sagar2071995',{ useNewUrlParser: true },(err) =>{
    if(!err){
        console.log('Mongodb connection succesful..!!');
    }
    else{
        console.log('Error in db connection.!' + JSON.stringify(err,undefined,2));
    }
})
module.exports = mongoose