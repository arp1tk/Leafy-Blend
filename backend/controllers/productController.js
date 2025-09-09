import Product from "../models/productModel.js";

// @desc    Create a new product
// @route   POST /api/products
// @access  Private (Admin)
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      promoText,
      fullDescription,
      price,
      images,
      keyIngredients,
      tags,
      stock,
      category,
    } = req.body;

    // Check if product already exists
    const existingProduct = await Product.findOne({ slug });
    if (existingProduct) {
      return res.status(400).json({ message: "Product with this slug already exists" });
    }

    const newProduct = await Product.create({
      name,
      slug,
      description,
      promoText,
      fullDescription,
      price,
      images,
      keyIngredients,
      tags,
      stock,
      category,
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get single product by name
// @route   GET /api/products/:name
// @access  Public
export const getProductByName = async (req, res) => {
  try {
    const product = await Product.findOne({
      name: { $regex: req.params.name, $options: "i" }, // case-insensitive search
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};