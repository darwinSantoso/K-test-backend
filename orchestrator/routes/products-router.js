const express = require('express');
const ProductsController = require('../controllers/products-controller');
const router = express.Router();

router.get('/', ProductsController.getAllProducts);

router.get('/:id', ProductsController.getProductById);

router.delete('/', ProductsController.deleteProductById);

// router.put('/:id', ProductsController.updateProductById);

router.post('/', ProductsController.addNewProduct);

module.exports = router;
