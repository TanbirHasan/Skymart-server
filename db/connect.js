const mongoose = require('mongoose');
const colors = require('colors');
mongoose.set('strictQuery', true);

const connectDB = async (uri) => {
	try {
		await mongoose.connect(uri).then(() => {
			console.log('Connected to MongoDB successfully'.blue.bold.italic);
		});
	} catch (error) {
        console.log("Could not connect to MongoDB...", error);
    }
};

module.exports = connectDB;
