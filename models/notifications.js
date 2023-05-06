const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var NotificationsSchema = new mongoose.Schema(
	{
		notificationMessage: {
			type: String,
			required: true,
		},
		sentTime: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Notification', NotificationsSchema);
