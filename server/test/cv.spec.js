const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

require("dotenv").config();

describe("Templates", () => {
	/* Connecting to the database before each test. */
	beforeAll(async () => {
		await mongoose.connect(process.env.MONGO_URI);
	});

	/* Closing database connection after each test. */
	afterEach(async () => {
		await mongoose.connection.close();
	});

	it("generate a cover letter", async () => {
		const response = await supertest(app).post("/api/v1/generate").send({
			cover_letter: "Jane Cover letter",
			company_name: "Joy Doe LTD",
			company_address: "Zambia district",
			city: "Zambia",
			country: "Zambia",
			years_of_exp: "5 years",
			date: "18 November 2022",
			recipient_name: "Abu Khamal",
			recipient_department: "Engineering",
			recipient_email: "abu@joy.com",
			recipient_phone_no: 80973930034,
		});

		expect(response.status).toBe(201);
		expect(response.body.status).toHaveProperty("success");
		expect(response.body.response).toHaveProperty(data);
	});
});
