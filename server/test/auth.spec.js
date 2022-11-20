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
<<<<<<< HEAD
			email: "janed@gmail.com",
			password: "Jam123",
=======
			email: "jao@gmail.com",
			password: "Janio123",
>>>>>>> dev
		});

		console.log(response.body);
		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty("Signup was successful.");
	});

	it("should not signup a user", async () => {
		const response = await supertest(app).post("/api/v1/auth/signup").send({
			name: "Jane Doe",
			email: "jao@gmail.com",
			password: "Janio123",
		});

		console.log(response.body);
		expect(response.status).toBe(400);
		expect(response.body).toHaveProperty("Email already exists.");
	});

	it("should login a user", async () => {
		const response = await supertest(app)
			.post("/api/v1/auth/login")
			.set("content-type", "application/json")
			.send({
				email: "jao@gmail.com",
				password: "Janio123",
			});

		console.log(response.body);
		expect(response.status).toBe(201);
		expect(response.body.status).toHaveProperty("success");
		expect(response.body.token).toHaveProperty(token);
	});
	it("should verify a user", async () => {
		const response = await supertest(app).post("/api/v1/auth/verify").send({
			otp: "12345",
		});

		console.log(response.body);
		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty(
			"User has been successfully verified"
		);
	});

	it("error verifying a user", async () => {
		const response = await supertest(app).post("/api/v1/auth/verify").send({
			otp: "1234",
		});

		console.log(response.body);
		expect(response.status).toBe(400);
		expect(response.body).toHaveProperty("Verification failed");
	});
});
