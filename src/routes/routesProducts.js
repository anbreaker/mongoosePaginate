const {Router} = require('express');
const router = Router();

const Product = require('../models/Product');

router.get('/products', async (request, response) => {
  const products = await Product.find();
  response.json(products);
});

router.post('/products', async (request, response) => {
  const newProduct = new Product(request.body);
  const productSave = await newProduct.save();
  response.send(productSave);
});

module.exports = router;
