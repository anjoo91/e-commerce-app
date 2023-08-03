const Product = require("../models/product");

module.exports = {
    getProducts,
};

async function getProducts(req, res){
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
