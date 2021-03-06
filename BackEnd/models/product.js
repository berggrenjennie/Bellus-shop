//feedback on productSchema!
mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  subCategory1: {
    type: String,
    required: true
  },
  subCategory2: {
    type: String
  },
  model:{
    type: String
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  material:{
    type: String,
  },
  size:{
    type: String,
  },
  color:{
    type: String,
  },
  price:{
    type: Number,
    required: true
  },
  rating:{
    type: Number,
  },
  isSale:{
    type: Boolean,
    required: true,
    default: false
  },
  salePercent:{
    type: Number,
    required: true,
    default: 0.00
  },
  isOnlyBigImage:{
    type: Boolean,
    required: true,
    default: false
  },
  imagePath: {
    type: String,
    required: true
  },
  bigImagePath:{
    type: String
  },
  icon1: {
    type: String
  },
  icon2: {
    type: String
  },
  icon3: {
    type: String
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
