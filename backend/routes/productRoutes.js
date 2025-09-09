import express from "express";
import { createProduct, getAllProducts, getProductByName } from "../controllers/productController.js";



const router = express.Router();

router.post("/",createProduct)
router.get("/", getAllProducts);


router.get("/:name", getProductByName);
export default router;