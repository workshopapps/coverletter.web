const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const UserModel = require("../models/User");

require("dotenv").config();

describe("Templates", () => {
	/* Connecting to the database before each test. */
	beforeAll(async () => {
		await mongoose.connect(process.env.MONGO_URI);

		await UserModel.create({
			name: "Jane Doe",
			email: "jao@gmail.com",
			password: "Janio123",
		});

		const loginResponse = await supertest(app)
			.post("/api/v1/auth/login")
			.set("content-type", "application/json")
			.send({
				email: "jao@gmail.com",
				password: "Janio123",
			});

		token = loginResponse.body.token;
	});

	/* Closing database connection after each test. */
	afterEach(async () => {
		await mongoose.connection.close();
	});

	it("should get a template", async () => {
		const response = await supertest(app).get(`api/v1/get-doctor/${1}`);

		expect(response.status).toBe(200);
		expect(response.body.message).toEqual(
			"Template requested successfully"
		);
		expect(response.body.data).toEqual({ template });
	});

	it("should return an error for an invalid template request", async () => {
		const response = await supertest(app).get(`api/v1/get-doctor/${""}`);

		expect(response.status).toBe(400);
		expect(response.body.message).toEqual("Template does not exist");
	});

	it("getAlltemplates", async () => {
		const response = await supertest(app).get("/api/v1/template");

		expect(response.status).toBe(200);
		expect(response.body.message).toEqual(
			"Template requested successfully"
		);
		expect(response.body.data).toEqual({ template });
	});

	it("Not getting All templates", async () => {
		const response = await supertest(app).get("/api/v1/template");

		expect(response.status).toBe(500);
	});

	it("edit the template", async () => {
		const response = await supertest(app)
			.post("/api/v1/template/:id")
			.send({
				template: "Lets test this ",
			});

		expect(response.status).toBe(200);
		expect(response.body.message).toHaveProperty(
			"Template edited successfully"
		);
		expect(response.body.data).toEqual({ editedTemplate });
	});

	it("Error Editing", async () => {
		const response = await supertest(app).get("/api/v1/template");

		expect(response.status).toBe(500);
	});
});
