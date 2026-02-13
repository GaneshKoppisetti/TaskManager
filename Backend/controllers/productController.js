const productSchema = require('../models/product');

// Controller to create a new product
exports.createProduct = async (req, res) => {
    try {
        console.log(`re body: ${JSON.stringify(req.body)}`)
        const { name, price } = req.body;   
        const newProduct = new productSchema({ name, price });
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }   
};
// Controller to get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productSchema.aggregate([{$match: {name:{$regex: 'bottle',$options: 'i'}}}]);
        // const products = await productSchema.aggregate([{$match: {name:{$regex: /^bottle$/,$options: 'i'}}}]);
        // const products = await productSchema.find({},{name:1,price:1,_id:0});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

//conroller to update product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;   
        const updatedProduct = await productSchema.findByIdAndUpdate(id, { name, price });
        // const updatedProduct = await productSchema.findByIdAndUpdate(id, { name, price }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

//controller to delete product
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;   
        const deletedProduct = await productSchema.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }   
};