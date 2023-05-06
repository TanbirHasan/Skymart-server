const Orders = require('../models/orders');
const Product = require('../models/products');
const User = require('../models/users');
const ContactMessage = require('../models/contactUs');


const getAllOrders = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const orders = await Orders.find({})
			.skip(page * size)
			.limit(size);
		const count = await Orders.estimatedDocumentCount();
		res.send({ orders, count });
	} catch (error) {
		res.send({
			error: error.message,
		});
		console.log(error.message);
	}
};

const getOrdersForSingleUser = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const email = req.params.email;
		const orderLength = await Orders.find({ email: email });
		const orders = await Orders.find({ email: email })
			.skip(page * size)
			.limit(size);
		const count = orderLength.length;
		console.log(count);
		res.send({ orders, count });
	} catch (error) {
		res.send({
			error: error.message,
		});
		console.log(error.message);
	}
};

const addOrdersInfo = async (req, res) => {
	try {
		const orderInfo = req.body;
		const result = await Orders.create(orderInfo);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

const getTotalPrice = async (req, res) => {
	try {
		const totalPrice = await Orders.find({}).select({ totalPrice: 1 });
		const productsLength = await Product.estimatedDocumentCount();
		const ordersCount = await Orders.estimatedDocumentCount();
		const users = await User.find({ role: '' });
		const totalUsers = users.length;
		const totalContactMessage = await ContactMessage.estimatedDocumentCount();
		res.send({ totalPrice, productsLength, ordersCount,totalUsers,totalContactMessage });
	} catch (error) {
		console.log(error);
	}
};

module.exports = { addOrdersInfo, getAllOrders, getOrdersForSingleUser, getTotalPrice };
