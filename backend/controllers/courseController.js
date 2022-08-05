const Course = require("../model/courseModal");
const User = require("../model/userModel");


let enrolled=[];
let coursenrol=[]

exports.AddCourse = async (req, res, next) => {
  
   
  const {title, description,startDate, endDate} = req.body;

  if(startDate> endDate){
    return (next(
        res.status(400).json({
            success: false,
            message: "Start date is not valid",
           
        })
    ))
}

    const course = await Course.create({
     title,
     description,
     startDate,
     endDate
    });

   
  
    res.status(200).json({
        success: true,
        message: "Course added successfully",
        course,
    })
  };


  exports.getCourses = async(req, res,next)=>{
    const courses = await Course.find();
    res.status(200).json({
      success:true,
      message:"All Courses",
      courses,
    });

  }

  exports.enrollCourse = async(req,res,next) =>{
         
    const course = Course.findById(req.params.id);
    
    const {email} = req.body;
    
   
      const user= await User.findOne({email});
      
      if(!user){
        return (next(
          res.status(400).json({
            success:false,
            message:"Register to enroll course",
            
          })
          ))
        }

        
      
       user.course.push(req.params.id)
       coursenrol.push(req.params.id)
      const userr=course.userr
     
      enrolled.push({email})

      


      res.status(200).json({
        success:true,
        message:"course enrolled",
        email,
     
      });
  
  }

exports.usersEnrolled = async(req,res,next)=>{

  const course = Course.findById(req.params.id);
  res.status(200).json({
    success:true,
    message:"users Enrolled in this course",
    enrolled
  });
}

  
module.exports.coursenrol= coursenrol;