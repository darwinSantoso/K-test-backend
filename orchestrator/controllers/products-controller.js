const { productsAPI } = require('../lib/apis');

class ProductsController {
  static async addNewProduct(req, res, next) {
    try {
      const { data: newProduct } = await productsAPI({
        method: 'POST',
        url: '/products',
        data: req.body,
      });

      res.status(200).json(newProduct);
    } catch (err) {
      res.status(err.response.status).json(err.response.data);
    }
  }

  static async getAllProducts(req, res, next) {
    try {
      const { data: products } = await productsAPI({
        method: 'GET',
        url: '/products',
      });

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;

      const { data: foundProduct } = await productsAPI({
        method: 'GET',
        url: `/products/${id}`,
      });

      res.status(200).json(foundProduct);
    } catch (err) {
      next(err);
    }
  }

  static async deleteProductById(req, res, next) {
    try {
      const { data: deletedProduct } = await productsAPI({
        method: 'DELETE',
        url: `/products`,
        data: req.body,
      });

      res.status(200).json(deletedProduct);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductsController;
