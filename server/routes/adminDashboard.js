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
const adminDashboard = AdminBroExpress.buildRouter(adminBro);

module.exports = adminDashboard;
