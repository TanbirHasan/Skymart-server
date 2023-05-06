const ContactMessage = require('../models/contactUs');

const addContactMessages = async (req, res) => {
	try {
		const message = await req.body;
		const result = await ContactMessage.create(message);
		res.send(result);
	} catch (error) {
		console.log(error);
	}
};

const getAllMessages = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const messages = await ContactMessage.find({})
			.skip(page * size)
			.limit(size);
		const count = await ContactMessage.estimatedDocumentCount();
		res.send({ messages, count });
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addContactMessages, getAllMessages };
