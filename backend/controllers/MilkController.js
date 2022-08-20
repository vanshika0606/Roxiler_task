const Delivery = require("../model/MilkModel");


exports.PlaceOrder = async (req, res, next) => {
  
 
  
    const order = await Delivery.create(
     req.body
    );

    res.status(200).json({
        success: true,
        order,
        message: "Order placed successfully",
        
    })
  };


exports.Allorders = async(req, res,next)=>{
  const filters = req.query;
    
    const orders = await Delivery.find();

    const filteredOrders = orders.filter( order=>{
     
      
      let isValid= true;
     
      isValid = isValid && order.orderDate == filters.orderDate;

      return isValid;
    
    })
    res.status(200).json({
      success:true,
      message:"All orders",
      filteredOrders,
    });

}


exports.updateOrder = async(req,res,next)=>{

  let order = await Delivery.findById(req.params.id);

  if(!order){

    return ( res.status(404).json({
      success:true,
      message:"order not found",
      
    })
    )
  }
  
  order = await Delivery.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });


  res.status(200).json({
    success: true,
    message:"updated order",
    order,
  });


}


exports.deleteOrder = async (req, res, next) => {
  const order = await Delivery.findById(req.params.id);

  if (!order) {
    return ( res.status(404).json({
      success:true,
      message:"order not found",
      
    }));
  }

  
 
  await order.remove();

  res.status(200).json({
    success: true,
    message: "order Deleted Successfully",
  });
};





