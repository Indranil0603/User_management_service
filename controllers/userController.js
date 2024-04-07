const User = require("../models/userSchema.js");
const xss = require("xss");

const userController = {
	createUser: async (req, res) => {
		try {
			const { name, dob, age, location } = req.body;

			// Calculate age based on the provided date of birth (DOB)
			const dobDate = new Date(dob);
			const today = new Date();
			const calculatedAge = today.getFullYear() - dobDate.getFullYear();

			// Check if the calculated age matches the provided age
			if (calculatedAge !== age) {
				return res
					.status(400)
					.json({ error: "Age does not match with Date of Birth" });
			}

			// Sanitize user input to prevent XSS attacks
			const sanitizedData = {
				name: xss(name),
				dob: dobDate,
				age,
				location: {
					city: xss(location.city),
				},
			};

			const newUser = new User(sanitizedData);
			await newUser.save();
			res
				.status(201)
				.json({ message: "User created successfully", user: newUser });
		} catch (error) {
			res
				.status(500)
				.json({ error: "Failed to create user", details: error.message });
		}
	},

	getRandomUser: async (req, res) => {
		try {
			const randomUser = await User.aggregate([{ $sample: { size: 1 } }]);
			res.json({ user: randomUser });
		} catch (error) {
			res
				.status(500)
				.json({ error: "Failed to fetch random user", details: error.message });
		}
	},

	checkUserExistence: async (req, res) => {
		try {
			const { name } = req.body;
			const userExists = await User.exists({ name });
			res.json({ exists: userExists });
		} catch (error) {
			res.status(500).json({
				error: "Failed to check user existence",
				details: error.message,
			});
		}
	},

	filterUsersByAge: async (req, res) => {
		try {
			const { age } = req.body;
			const users = await User.find({ age: { $gte: age } });
			res.json({ users });
		} catch (error) {
			res.status(500).json({
				error: "Failed to filter users by age",
				details: error.message,
			});
		}
	},

	listUserNames: async (req, res) => {
		try {
			const users = await User.find({}, "name");
			const userNames = users.map((user) => user.name);
			res.json({ userNames });
		} catch (error) {
			res
				.status(500)
				.json({ error: "Failed to list user names", details: error.message });
		}
	},
};

module.exports = userController;
