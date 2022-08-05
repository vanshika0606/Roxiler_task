const User = require("../model/userModel");
let courses = require('../controllers/courseController')

exports.registerUser = async (req, res, next) => {
  
   const {email ,  name, contact}= req.body;
  
    const user = await User.create({
     email,name,contact
    });

     user.id= user._id;
  
    res.status(200).json({
        success: true,
        user,
        message: "User registered and logged in successfully",
        
    })
  };


exports.getUsers = async(req, res,next)=>{
    const users = await User.find();
    res.status(200).json({
      success:true,
      message:"All users",
      users,
    });

}

exports.loginUser = async(req,res,next)=>{
    const {email,name} =req.body;

    const user= await User.findOne({email});
     user.id = user._id;
    res.status(200).json({
      success:true,
      message:"Logged in successfully",
       
      user
    });

};

exports.logout = async(req,res,next)=>{

  const id = "";

  res.status(200).json({
    success:true,
    message:"Logged out successfully",
    id
  });


}
  
exports.coursesEnrolled = async(req,res,next) =>{

  const user = User.findById(req.params.id);

  
  res.status(200).json({
    success:true,
    message:"courses are here",
    courses
  });

}