const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const OrderSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		mobile: {
			type: Number,
			required: true,
		},
		address1: {
			type: String,
			required: true,
		},
		address2: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		zip: {
			type: Number,
			required: true,
		},
		cart: {
			type: Array,
			required: true,
		},
		orderPlaced: {
			type: String,
			required: true,
		},

		totalPrice: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Order', OrderSchema);
