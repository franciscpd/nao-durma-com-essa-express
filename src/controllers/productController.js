const productController = {
  all: (req, res) => {
    // lógica de obter todos os registros do banco

    return res.json({
      data: [
        {
          id: 1,
          name: "Produto 1",
          price: 100,
        },
        {
          id: 2,
          name: "Produto 2",
          price: 200,
        },
      ],
    });
  },
  get: (req, res) => {
    const { id } = req.params;

    // lógica para carregar o produto
    if (id === "1") {
      return res.json({
        data: {
          id: 1,
          name: "Produto 1",
          price: 100,
        }
      });
    }

    return res.status(404).json({ erro: "Produto não encontrado" });
  },
  create: (req, res) => {
    // Lógica de criação do produto

    return res.json({ data: req.body });
  },
  update: (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    // lógica para atualizar o produto
    if (id === "2") {
      return res.json({
        data: {
          id,
          name,
          price,
        }
      });
    }

    return res.status(404).json({ erro: "Produto não encontrado" });
  },
  delete: (req, res) => {
    // lógica para remover o produto

    return res.status(200).json({ status: "ok" });
  },
};

module.exports = productController;
