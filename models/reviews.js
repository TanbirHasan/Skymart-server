const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const ReviewsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		review: {
			type: String,
			required: true,
		},
		userRating: {
			type: Number,
			required: true,
		},
		userImage: {
			type: String,
			required: true,
		},
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		averageRatings: {
			type: Number,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Review', ReviewsSchema);
