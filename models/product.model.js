import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "Product name must be at least 3 characters"]
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
    validate: {
      validator: function (val) {
        return Number.isInteger(val) && val > 0;
      },
      message: `quantity is not a positive integer`
    }
  },
  price: {
    type: Number,
    required: true,
    default: 0,
    min: [0.01, 'Price must be a positive number']
  },
  image: {
    type: String
  }


}, {
  timestamps: true
})

const Product = mongoose.model("Product", ProductSchema)

export default Product;