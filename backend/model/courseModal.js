const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    },
    userr:[{
        type: mongoose.Schema.ObjectId,
        ref: "User",
       
      }],
      enrolled:[{
          email:{
            type:String
          }
      }]
})

module.exports = mongoose.model("Course", courseSchema);