import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },  
  contact: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, 
    required: false,
  },
  products: [productSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Shop = mongoose.model('Shop', shopSchema);
export default Shop;
