const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		index: true, // Index for quick retrieval by name
	},
	dob: {
		type: Date,
		required: true,
	},
	age: {
		type: Number,
		required: true,
		index: true, // Index for filtering users by age
	},
	location: {
		city: {
			type: String,
			required: true,
		},
		
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
