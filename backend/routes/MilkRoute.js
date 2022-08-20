const express = require("express");
const {
  PlaceOrder, Allorders, updateOrder, deleteOrder
} = require("../controllers/MilkController");

const router = express.Router();

router.route("/placeOrder").post(PlaceOrder);
router.route("/orders").get(Allorders);
router.route("/updateOrder/:id").put(updateOrder);
router.route("/deleteOrder/:id").delete(deleteOrder);


module.exports = router;
