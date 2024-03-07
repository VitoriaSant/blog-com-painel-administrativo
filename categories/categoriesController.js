const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("Rotas Categorias");
});

router.get("/categories", (req, res) => {
    res.send("Rotas para criar categorias");
});


module.exports = router;