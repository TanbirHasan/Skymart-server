const Notification = require('../models/notifications');

const addNotification = async (req, res) => {
	try {
		const notification = req.body;
		const result = await Notification.create(notification);
		res.send(result);
	} catch (error) {
		console.log(error.message);
		res.send({ error: error.message });
	}
};

const getAllNotifications = async (req, res) => {
	try {
		const notifications = await Notification.find({});
		res.send(notifications);
	} catch (error) {
		console.log(error.message);
	}
};

const deleteSingleNotification = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Notification.findByIdAndDelete(id);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

const clearAllNotifications = async (req, res) => {
	try {
		const result = await Notification.deleteMany();
		res.send(result);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addNotification,
	getAllNotifications,
	deleteSingleNotification,
	clearAllNotifications,
};
