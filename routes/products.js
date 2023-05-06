const express = require('express');
const {
	getAllProducts,
	getSingleProduct,
	getRecentProducts,
	updateProduct,
	deleteProduct,
	getProductRelatedToCategories,
	addProduct,
	allProducts,
	paginatedProducts,
	updateAverageRating,
} = require('../controllers/products');

const verifyToken = require('../middlewares/verifyToken');

const productRoute = express.Router();

productRoute.route('/').get(getAllProducts);
productRoute.route('/addProduct').post(addProduct);
productRoute.route('/category/:categoryId').get(getProductRelatedToCategories);
productRoute.route('/recent-products').get(getRecentProducts);
productRoute.route('/paginated-products').get(paginatedProducts);
productRoute.route('/all-products').get(allProducts);
productRoute.route('/:id').get(getSingleProduct);
productRoute.route('/:id').put(updateProduct);
productRoute.route('/:id').delete(deleteProduct);
productRoute.route('/average-rating/:productId').put(updateAverageRating);

module.exports = productRoute;
