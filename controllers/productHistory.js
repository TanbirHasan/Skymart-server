const ProductHistory = require('../models/productHistory');

const addOrderHistory = async (req, res) => {
	try {
		const productHistory = await req.body;
		const result = await ProductHistory.create(productHistory);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

const getProductHistory = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const productId = req.params.productId;
		const historyLength = await ProductHistory.find({ productId });
		const history = await ProductHistory.find({ productId })
			.sort({ updatedAt: -1 })
			.skip(page * size)
			.limit(size);
		const count = historyLength.length;
		res.send({ history, count });
	} catch (error) {
		console.log(error.message);
	}
};

const clearAllHistory = async (req, res) => {
	try {
		const id = req.params.productId;
		const result = await ProductHistory.deleteMany({ productId: id });
		res.send(result);
	} catch (error) {
		console.log(error);
	}
};

const deleteSingleHistory = async (req, res) => {
	try {
		const id = req.params.historyId;
		const result = await ProductHistory.findOneAndDelete({ id });
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addOrderHistory, getProductHistory, clearAllHistory, deleteSingleHistory };
