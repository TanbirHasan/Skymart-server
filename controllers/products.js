const Product = require('../models/products');
const Category = require('../models/categories');

const getAllProducts = async (req, res) => {
	const products = await Product.find({});
	return res.send(products);
};

const addProduct = async (req, res) => {
	try {
		const product = await req.body;

		const result = await Product.create(product);
		return res.send(result);
	} catch (error) {
		console.log(error);
	}
};

const getSingleProduct = async (req, res) => {
	const id = req.params.id;
	const product = await Product.findById(id);
	return res.send(product);
};

const getRecentProducts = async (req, res) => {
	try {
		const product = await Product.find({}).sort({ _id: -1 });
		res.send(product);
	} catch (error) {
		console.log(error);
	}
};

// All products including highest rated, latest and search functionalities
const allProducts = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const latest = parseInt(req.query.latest);
		const bestRated = parseInt(req.query.bestRated);
		const searchProducts = req.query.searchProducts;

		const objectQuery = {};

		//* latest added products
		if (latest) {
			objectQuery.latest = latest;
		}

		//* highest rated products
		if (bestRated) {
			objectQuery.bestRated = bestRated;
			const products = await Product.find({
				productsName: { $regex: `${searchProducts}`, $options: 'i' },
			})
				.sort({ ratings: objectQuery.bestRated })
				.skip(page * size)
				.limit(size);
			const count = await Product.estimatedDocumentCount();
			return res.send({ products, count });
		}

		const products = await Product.find({
			productsName: { $regex: `${searchProducts}`, $options: 'i' },
		})
			.sort({ _id: objectQuery.latest, ratings: objectQuery.bestRated })
			.skip(page * size)
			.limit(size);
		const count = await Product.estimatedDocumentCount();
		return res.send({ products, count });
	} catch (error) {
		console.log(error.message);
	}
};

// All Products for admin dashboard
const paginatedProducts = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const products = await Product.find({})
			.skip(page * size)
			.limit(size);
		const count = await Product.estimatedDocumentCount();
		return res.send({ products, count });
	} catch (error) {
		console.log(error.message);
	}
};

const getProductRelatedToCategories = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const id = req.params.categoryId;
		const searchProducts = req.query.searchProducts;

		const productLength = await Product.find({ categoryId: id });
		const products = await Product.find({
			categoryId: id,
		})
			.skip(page * size)
			.limit(size);
		const count = productLength.length;
		return res.send({ products, count });
	} catch (error) {
		console.log(error.message);
	}
};

const updateProduct = async (req, res) => {
	try {
		const id = req.params.id;
		const product = req.body;
		const filter = Product.findById(id);
		const options = { upsert: true };
		const updatedDoc = {
			$set: product,
		};
		const result = await Product.updateOne(filter, updatedDoc, options);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

const updateAverageRating = async (req, res) => {
	try {
		const productId = req.params.productId;
		const averageRating = req.body.ratings;
		const filter = Product.findById(productId);
		const options = { upsert: true };
		const updatedDoc = {
			$set: {
				ratings: averageRating,
			},
		};
		const result = await Product.updateOne(filter, updatedDoc, options);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

const deleteProduct = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Product.findByIdAndDelete(id);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
	getAllProducts,
	getSingleProduct,
	allProducts,
	getRecentProducts,
	updateProduct,
	addProduct,
	deleteProduct,
	paginatedProducts,
	getProductRelatedToCategories,
	updateAverageRating,
};
