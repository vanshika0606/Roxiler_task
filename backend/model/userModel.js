const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    id:{
        type:String,
        
    },
    course:[{
        type: mongoose.Schema.ObjectId,
        ref: "Course",
        required:true
      }],

})

module.exports = mongoose.model("User", userSchema);