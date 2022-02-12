const express = require("express");

const homeController = require("../controllers/homeController");
const productController = require("../controllers/productController");

const routes = express.Router();

routes.get("/", homeController.index);

// retorna todos os produtos
routes.get("/products", productController.all);
// retorna um produto pelo id
routes.get("/products/:id", productController.get);
// cria um novo produto
routes.post("/products", productController.create);
// atualiza um produto
routes.put("/products/:id", productController.update);
// deleta um produto
routes.delete("/products/:id", productController.delete);

module.exports = routes;