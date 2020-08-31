const {Router} = require('express');
const router = Router();

const Product = require('../models/Product');

router.get('/products', async (request, response) => {
  const limit = parseInt(request.query.limit, 10) || 5;
  const page = parseInt(request.query.page, 10) || 1;
  const products = await Product.paginate({}, {limit, page});
  response.json(products);
});

router.post('/products', async (request, response) => {
  const newProduct = new Product(request.body);
  const productSave = await newProduct.save();
  response.send(productSave);
});

module.exports = router;
