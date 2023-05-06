const Reviews = require('../models/reviews');

const getAllReviews = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const review = await Reviews.find({})
			.sort({ date: -1 })
			.skip(page * size)
			.limit(size);
		const count = await Reviews.estimatedDocumentCount();
		res.send({ review, count });
	} catch (error) {
		console.log(error);
	}
};

const getReviewsForSpecificProduct = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const productId = req.params.productId;
		const reviewLength = await Reviews.find({ productId });
		const review = await Reviews.find({ productId })
			.sort({ _id: -1 })
			.skip(page * size)
			.limit(size);
		const count = reviewLength.length;
		res.send({ review, count });
	} catch (error) {
		console.log(error);
	}
};

const addReviews = async (req, res) => {
	try {
		const review = await req.body;
		const result = await Reviews.create(review);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addReviews, getAllReviews, getReviewsForSpecificProduct };
