const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: '',
		},
		status: {
			type: String,
			default: 'active',
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('User', UserSchema);
