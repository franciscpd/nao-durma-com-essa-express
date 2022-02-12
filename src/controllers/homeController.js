const homeController = {
  index: (req, res) => {
    return res.json({ mensagem: "Olá mundo!" });
  }
};

module.exports = homeController;