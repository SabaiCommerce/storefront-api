var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/storefront-db');

const Product = mongoose.model('products', {
  name: String,
  price: Number,
});

/* GET users listing. */
router.get('/:productName', async (req, res, next) => {

  const productName = req.params.productName;
  let product = await Product.findOne({ name: productName }).exec();

  res.json({
    "status": "success",
    "data": product
  }).send();
});

module.exports = router;
