const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");

const adminJs = new AdminJS({
	databases: [], // We don’t have any resources connected yet.
	rootPath: "/admin", // Path to the AdminJS dashboard.
});
// Build and use a router to handle AdminJS routes.
const adminDashboard = AdminJSExpress.buildRouter(adminJs);

module.exports = adminDashboard;
