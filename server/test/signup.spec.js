const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

require("dotenv").config();

describe("Auth", () => {
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
			email: "agbajeinioluwa@gmail.com",
			password: "Janio123",
		});

		console.log(response.body);
		expect(response.status).toBe(201);
		expect(response.body).toBe("Signup was successful.");
	});

	it("should not signup a user", async () => {
		const response = await supertest(app).post("/api/v1/auth/signup").send({
			name: "Jane Doe",
			email: "agbajeinioluwa@gmail.com",
			password: "Janio123",
		});

		console.log(response.body);
		expect(response.status).toBe(400);
		expect(response.body).toBe("Email already exists.");
	});

	it("should verify a user", async () => {
		const response = await supertest(app).post("/api/v1/auth/verify").send({
			otp: "9661",
		});

		expect(response.status).toBe(200);
		expect(response.body).toBe("User has been successfully verified");
	});

	it("error verifying a user", async () => {
		const response = await supertest(app).post("/api/v1/auth/verify").send({
			otp: "12345",
		});

		expect(response.status).toBe(400);
		expect(response.body).toBe("Verification failed");
	});
});
