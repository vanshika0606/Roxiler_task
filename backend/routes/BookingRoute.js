const express = require("express");
const {
  firstRoute,
  secondRoute,
  thirdRoute,
  fourthRoute
} = require("../controllers/BookingController");

const router = express.Router();

router.route("/first").post(firstRoute);
router.route("/second").post(secondRoute);
router.route("/third").post(thirdRoute);
router.route("/fourth").post(fourthRoute);
// router.route("/orders").get(Allorders);
// router.route("/updateOrder/:id").put(updateOrder);
// router.route("/deleteOrder/:id").delete(deleteOrder);


module.exports = router;
