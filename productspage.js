const express = require('express');
const productsRepo = require('./products');
const productsIndexTemplate = require('./indexproducts');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(productsIndexTemplate({ products }));
});

module.exports = router;
