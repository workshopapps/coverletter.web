const Cos = require("../models/CustomerStories");
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
	databases: [mongoose],
	rootPath: "/admin",
});

// Here is just dummy code for the admin details and the admin email and password which would be stored in the env file

const ADMIN = {
	email: process.env.ADMIN_EMAIL || "peter@gmail.com",
	password: process.env.ADMIN_PASS || "qwerop",
};

// Here I am creating an authenticated build for the admin login so anybody cannot just login to the dashboard without an email address and password

const adminDashboard = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
	cookieName: process.env.ADMIN_COOKIE_NAME || "admin-bro",
	cookiePassword:
		process.env.ADMIN_COOKIE_PASS || "super-secret-long-password-for-admin",
	authenticate: async (email, password) => {
		if (email === ADMIN.email && password === ADMIN.password) {
			return ADMIN;
		}
		return null;
	},
});

module.exports = adminDashboard;
