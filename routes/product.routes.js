import { Router } from "express";
import { getProducts, getById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const productRouter = Router();
const base = '/api/products'

productRouter.get('/', (req, res) => {
  return res.send("API Connected")
})

productRouter.get(base, getProducts)
productRouter.get(base + "/:id", getById)

productRouter.post(base, createProduct)
productRouter.put(base + "/:id", updateProduct)
productRouter.delete(base + "/:id", deleteProduct)


export default productRouter;


