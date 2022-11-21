const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const UserModel = require("../models/User");

require("dotenv").config();

describe("Auth: forgot", () => {
	/* Connect to the database for each test. */
	beforeAll(async () => {
		await mongoose.connect(process.env.DB_CONNECTION);
	});

	/* Closing database connection after each test. */
	afterEach(async () => {
		await mongoose.connection.close();
	});

	it("should reset Password for the user", async () => {
		const response = await supertest(app)
			.post("/api/v1/auth/forgot")
			.send({ email: user.email, subject: "Password Reset", message });

		console.log(response.body);
		expect(response.status).toBe(205);
		expect(response.body).toHaveProperty("user");
	});
});
