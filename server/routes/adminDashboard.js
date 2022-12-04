const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const mongoose = require("mongoose");
AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
	databases: [mongoose], // We don’t have any resources connected yet.
	rootPath: "/admin", // Path to the AdminJS dashboard.
});

const ADMIN = {
	email: process.env.ADMIN_EMAIL || "peter@gmail.com",
	password: process.env.ADMIN_PASS || "qwerop",
};
// Build and use a router to handle AdminJS routes.
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
