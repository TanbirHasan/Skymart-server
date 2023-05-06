const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema(
	{
		productsName: {
			type: String,
			required: true,
		},
		picture: { type: String, required: true },
		quantity: {
			type: Number,
			default: 1,
		},
		sizes_color: {
			type: Boolean,
			default: false,
		},
		ratings: {
			type: Number,
			default: 4.5,
		},
		createdAt: {
			type: String,
			required: true,
		},
		oldPrice: {
			type: Number,
		},
		newPrice: {
			type: Number,
		},
		stockAmount: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		isFeatured: {
			type: Boolean,
			default: false,
		},
		size: {
			type: Array,
			required: true,
		},
		ifColorAvailable: {
			type: Boolean,
			default: false,
		},
		color: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at', // Use `created_at` to store the created date
			updatedAt: 'updated_at', // and `updated_at` to store the last updated date
		},
	}
);

//Export the model
module.exports = mongoose.model('Product', ProductSchema);
