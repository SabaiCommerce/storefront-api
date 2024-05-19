var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:productId', function(req, res, next) {
  res.json({
    "status": "success",
    "data": {
      "id": 1,
      "image": "",
      "name": "",
      "price": "",
      "description": "",
      "relatedProducts": [
        
      ]
    }
  }).send();
});

module.exports = router;
