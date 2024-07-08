const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const querySchema = new mongoose.Schema({
    email: String,
    concern: String,
    createdAt: { type: Date, default: Date.now }
});


const cartItemSchema = new mongoose.Schema({
    name: String,
    size: {
      type: String,
      enum: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    quantity: Number,
    price: Number,
  });
  
  const deliveryDetailsSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    postalCode: String,
    phone: String,
  });
  
  const cartSchema = new mongoose.Schema({
    cartItems: [cartItemSchema],
    deliveryDetails: deliveryDetailsSchema,
    createdAt: { type: Date, default: Date.now },
  });

const clothesSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String,
    image: String 
  });

const QueryModel = mongoose.model("querydata", querySchema)
const CartModel = mongoose.model("orderdata",cartSchema)
const ProductModel = mongoose.model("clothes",clothesSchema)
const Model = mongoose.model("userdata",Schema)

module.exports = { Model, QueryModel, CartModel, ProductModel };
