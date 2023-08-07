const Product = require("../models/product");
const User = require("../models/user");

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index,
  update,
  remove,
  show,
  requireAdmin,
};

// Admin check
function requireAdmin(req, res, next) {
    if (!req.user || !req.user.isAdmin) {
        return res.status(403).json({ error: 'Admin access required' });
    }
    next();
};

// List all products
async function index(req, res) {
  try {
    const products = await Product.find({}).populate('user').exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controllers/products.js
async function create(req, res) {
  const user = await User.findById(req.user._id); // fetch user from token
    
  if (!user.isAdmin) {
    return res.status(403).json({ error: "Only admin can add a product." });
  }

  if (!req.file) return res.status(400).json({ error: "Please upload a product image." });

  const filePath = `e-commerce-js/products/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: "Error uploading to AWS." });
    }

    try {
      const product = await Product.create({
        name: req.body.name,
        image: data.Location,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        user: req.user,
      });

      await product.populate('user');
      res.status(201).json({ data: product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}


// Update a product
async function update(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user.isAdmin) {
      return res.status(403).json({ error: "Only admin can update a product." });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    if (req.file) {
      const filePath = `e-commerce-js/products/${uuidv4()}-${req.file.originalname}`;
      const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };

      s3.upload(params, async function (err, data) {
        if (err) {
          console.log(err);
          return res.status(400).json({ error: "Error uploading to AWS." });
        }
        product.image = data.Location;
      });
    }

    Object.assign(product, req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


// Delete a product
async function remove(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user.isAdmin) {
      return res.status(403).json({ error: "Only admin can delete a product." });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    await product.remove();
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


async function show(req, res) {
  try {
    const product = await Product.findById(req.params.id).populate('user');
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

