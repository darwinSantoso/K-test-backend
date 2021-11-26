const { Product, sequelize } = require('../models/index');

class ProductsController {
  static async addNewProduct(req, res, next) {
    try {
      const { name, price, qty } = req.body;

      const newProduct = await Product.create({
        name,
        price,
        qty,
      });

      res.status(200).json(newProduct);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getAllProducts(req, res, next) {
    try {
      const products = await Product.findAll();

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;

      const foundProduct = await Product.findOne({
        where: {
          id,
        },
      });

      if (!foundProduct) {
        throw { name: 'productNotFound' };
      }

      res.status(200).json(foundProduct);
    } catch (err) {
      next(err);
    }
  }

  static async deleteProductById(req, res, next) {
    try {
      const { id } = req.body;

      const foundProduct = await Product.findOne({
        where: {
          id,
        },
      });

      if (!foundProduct) {
        throw { name: 'productNotFound' };
      }

      const deletedProduct = await Product.destroy({
        where: {
          id,
        },
      });

      res.status(200).json(foundProduct);
    } catch (err) {
      next(err);
    }
  }

  static async updateProductById(req, res, next) {
    try {
      const { name, price, qty } = req.body;
      const { id } = req.params;

      const foundProduct = await Product.findOne({
        where: {
          id,
        },
      });

      if (!foundProduct) {
        throw { name: 'productNotFound' };
      }

      const updatedProduct = await Product.update(
        {
          name,
          price,
          qty,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json(updatedProduct);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductsController;
