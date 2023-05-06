const express = require('express');
const { addReviews, getAllReviews, getReviewsForSpecificProduct } = require('../controllers/reviews');
const Reviewroute = express.Router();

Reviewroute.route('/').get(getAllReviews);
Reviewroute.route('/:productId').get(getReviewsForSpecificProduct);
Reviewroute.route('/').post(addReviews);

module.exports = Reviewroute;
