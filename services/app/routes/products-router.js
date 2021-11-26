const express = require('express');
const ProductsController = require('../controllers/products-controller');
const router = express.Router();

router.get('/:id', ProductsController.getProductById);

router.put('/:id', ProductsController.updateProductById);

router.get('/', ProductsController.getAllProducts);

router.delete('/', ProductsController.deleteProductById);

router.post('/', ProductsController.addNewProduct);

module.exports = router;
