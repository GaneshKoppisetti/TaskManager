const express = require('express');
const router = express.Router();
const { createProduct,getAllProducts,updateProduct,deleteProduct} = require('../controllers/productController');
router.post('/createProduct', createProduct);
router.get('/getAllProducts', getAllProducts);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router