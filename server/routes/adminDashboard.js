const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");
const Admin = require("../models/Admin");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
	databases: [mongoose],
	rootPath: "/admin",
});

// Here I am creating an authenticated build for the admin login so anybody cannot just login to the dashboard without an email address and password

const adminDashboard = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
	authenticate: async (email, password) => {
		try {
			email = email.toLowerCase();
			const admin = await Admin.findOne({
				email,
			});
			const adminDetails = {
				email: admin.email,
			};
			const checkPassword = await admin.comparePassword(password);
			if (!checkPassword) {
				return null;
			}
			if (admin && checkPassword) {
				return adminDetails;
			}
		} catch (error) {
			return null;
		}
		return null;
	},
});

module.exports = adminDashboard;
