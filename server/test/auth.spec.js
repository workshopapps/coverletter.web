const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const UserModel = require("../models/User");

require("dotenv").config();

describe("Auth: Signup", () => {
	/* Connecting to the database before each test. */
	beforeAll(async () => {
		await mongoose.connect(process.env.MONGO_URI);
	});

	/* Closing database connection after each test. */
	afterEach(async () => {
		await mongoose.connection.close();
	});

	it("should signup a user", async () => {
		const response = await supertest(app).post("/api/v1/auth/signup").send({
			name: "Jane Doe",
			email: "janed@gmail.com",
			password: "Jam123",
		});

		console.log(response.body);
		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty("user");
	});
});
