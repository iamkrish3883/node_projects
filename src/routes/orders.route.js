const express=require("express")
const router=express.Router();
var {insertProducts,makeOrder}=require("../controllers/orders.controller")

router.post("/insert",insertProducts);
router.post("/order",makeOrder)

module.exports=router;