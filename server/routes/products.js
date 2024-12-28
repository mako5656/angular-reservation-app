const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('', async (req, res) => {
    try {
        const foundProducts = await Product.find({});
        res.json(foundProducts);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const foundProduct = await Product.findById(productId);
        res.json(foundProduct);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

module.exports = router;