const express = require("express")
const router = express.Router();
const productControll = require("../controllers/product-controller")

router.get("/landing",productControll.getProductsLanding)
router.get("/",productControll.getProducts)
router.get("/:productID",productControll.getProductByID)


module.exports = router;
