const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");

const adminBro = new AdminBro({
	databases: [], // We don’t have any resources connected yet.
	rootPath: "/admin", // Path to the AdminJS dashboard.
});
// Build and use a router to handle AdminJS routes.
const adminDashboard = AdminBroExpress.buildRouter(adminBro);

module.exports = adminDashboard;
