const Category = require('../models/categories');

const getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find({});
		return res.send(categories);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = getAllCategories;
