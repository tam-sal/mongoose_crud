import Product from "../models/product.model.js";


// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Get Product by Id
const getById = async (req, res) => {
  const { id } = req.params;
  try {

    const productById = await Product.findById(id)
    return !productById ? res.status(404).json({ message: `${id} not found` }) : res.status(200).json(productById)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Post a product

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({ success: 'Product Created', 'Product': product })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

// Update a product

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const options = { new: true, runValidators: true };
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, options);
    return !product ? res.status(404).json({ message: "product not found" }) : res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Delete a product

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    return !product ? res.status(404).json({ message: "product not found" }) : res.status(200).json({ message: `${product.name} has been successfully deleted` })

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export { getProducts, getById, createProduct, updateProduct, deleteProduct }

