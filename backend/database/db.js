const mongoose = require("mongoose");


const connectDatabase = ()=>{


    mongoose.connect("mongodb://localhost:27017/Data" , {useNewUrlParser:true}).then((data)=>{
    console.log(`Mongodb connect with server 4000`)
}).catch((err)=>{
    console.log(err)
})


}

module.exports = connectDatabase;