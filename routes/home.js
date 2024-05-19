var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "status": "success",
    "data": {
      "slideshow": [
        {
          "image": "image path/url",
          "link": "ULR"
        }
      ],
      "promotions": {
        "left": {
          "image": "",
          "title": "Women's Sale",
          "link": ""
        },
        "right": {
          "image": "",
          "title": "New Sneaker",
          "link": ""
        }
      },
      "products": [
        {
          "id": 1,
          "image": "",
          "name": "",
          "price": "",
          "description": "",
          "relatedProducts": [
            
          ]
        }
      ],
      "categories": {
        "main": {},
        "sub1": {},
        "sub2": {}
      }
    }
  }).send();
});



module.exports = router;
