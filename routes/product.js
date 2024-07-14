var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/storefront-db');

const Product = mongoose.model('products', {
  name: String,
  price: Number,
});

/* GET users listing. */
router.get('/:productNameOrId', async (req, res, next) => {

  const productNameOrId = req.params.productNameOrId;
  let product = await Product.findOne({
    $or: [
      { name: productNameOrId },
      { id: parseInt(productNameOrId)}
    ]
  })
  .exec();

  res.json({
    "status": "success",
    "data": product
  });
});

module.exports = router;
