const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const ProductHistorySchema = new mongoose.Schema({
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	productsName: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
	oldPrice: {
		type: Number,
		required: true,
	},
	currentPrice: {
		type: Number,
		required: true,
	},
	oldStockAmount: {
		type: Number,
		required: true,
	},
	newStockAmount: {
		type: Number,
		required: true,
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	updatedAt: {
		type: String,
		required: true,
	},
	newStockAdded: {
		type: Number,
		required: true,
	},
});

//Export the model
module.exports = mongoose.model('ProductHistory', ProductHistorySchema);
