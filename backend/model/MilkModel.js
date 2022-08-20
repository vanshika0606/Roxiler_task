const mongoose = require("mongoose");

const MilkdeliverySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    Address:{
        city: {
            type: String,
            required: true,
          },
      
          state: {
            type: String,
            required: true,
          },
      
          country: {
            type: String,
            required: true,
          },
          pinCode: {
            type: Number,
            required: true,
          },
         
    },
    phoneNo: {
        type: Number,
        required: true,
      },
      orderDate:{
        type:String,
        required:true,
       
      }


})

module.exports = mongoose.model("Delivery", MilkdeliverySchema);