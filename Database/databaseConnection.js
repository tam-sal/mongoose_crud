import mongoose from 'mongoose';
import express from 'express'
import productRouter from '../routes/product.routes.js';

const app = express()
app.use(express.json())
app.use(productRouter)

const connect = async () => {

  const PORT = 3000;
  try {
    await mongoose.connect(process.env.conn_string)
    console.log("Connected to DB");
    app.listen(PORT || 5050, () => {
      console.log(`Listening on port ${PORT}`);
    })

  } catch (error) {
    console.error(error.message)
  }
}

export default connect;