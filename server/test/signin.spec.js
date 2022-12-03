const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

require("dotenv").config();

describe("SignIn", () => {
	/* Connecting to the database before each test. */
	beforeAll(async () => {
		await mongoose.connect(process.env.MONGO_URI);
	});

	/* Closing database connection after each test. */
	afterEach(async () => {
		await mongoose.connection.close();
	});

	it("should login a user", async () => {
		const response = await supertest(app)
			.post("/api/v1/auth/login")
			.set("content-type", "application/json")
			.send({
				email: "agbajeinioluwa@gmail.com",
				password: "Janio123",
			});

		console.log(response.body);
		expect(response.status).toBe(201);
		expect(response.body.status).toBe("success");
	});
});
