const mongoose = require('mongoose'); //connect with db
var validator = require('validator'); //validate form details


mongoose.connect('mongodb://127.0.0.1:27017/probase')
  .then(() => console.log('Connected!'));

const  userschema=mongoose.Schema({
    username:{
  type:String,
  required:true,
  minlength:3,
  maxlength:30,
    },
    email:{
        type:String,
  required:true,
  validate(value){
   if(!validator.isEmail(value)){
    throw new Error('Please enter a valid email');
} 
}
    },

    pno:{
        type:Number,
        required:true,
        min:10,
    }
});


const info=mongoose.model("probase",userschema);
module.exports=info;