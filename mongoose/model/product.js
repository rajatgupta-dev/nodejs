const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  price: Number,
  discountedPercentage: Number,
  rating: Number,
  brand: Number,
  category: String,
  thumbnail: String,
  images: [ String ]
});

exports.Product = mongoose.model('Product',productSchema)