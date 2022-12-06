const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

require("dotenv").config();

describe("Admin", () => {
    /* Connecting to the database before each test. */
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI);
    });
    /* Closing database connection after each test. */
    afterEach(async () => {
        await mongoose.connection.close();
    });

    jest.setTimeout(1000000)
    it("it should signup lead-admin", async () => {
        const response = await supertest(app).post("/admin/signup").send({
            email:"lead@gmal.com",
            name:"lead",
            password:"mypalead",
            adminCode:"12345",
            role:"Lead-admin"
        });
        expect(response.status).toBe(201);
        expect(response.body.status).toHaveProperty("success");
        expect(response.body.response).toHaveProperty('Sign up was successful');
    });
    it("it should not signup lead-admin", async () => {
        const response = await supertest(app).post("/admin/signup").send({
            email:"lead@gmal.com",
            name:"lead",
            password:"mypalead",
            adminCode:"12345",
            role:"Lead-admin"
        });
        expect(response.status).toBe(400);
        expect(response.body.status).toHaveProperty("fail");
        expect(response.body.response).toHaveProperty('Email already exist');
    });
    it("it should signup admin", async () => {
        const response = await supertest(app).post("/admin/signup").send({
            email:"grea@gmal.com",
            name:"grea",
            password:"mypasswer",
            adminCode:"12345",
            role:"Admin"
        });
        expect(response.status).toBe(201);
        expect(response.body.status).toHaveProperty("success");
        expect(response.body.response).toHaveProperty('Sign up was successful');
    });
    it("it should not signup admin", async () => {
        const response = await supertest(app).post("/admin/signup").send({
            email:"grea@gmal.com",
            name:"grea",
            password:"mypasswer",
            adminCode:"12345",
            role:"Admin"
        });
        expect(response.status).toBe(400);
        expect(response.body.status).toHaveProperty("fail");
        expect(response.body.response).toHaveProperty('Email already exist');
    });
    it("it should verify lead-admin", async () => {
        const response = await supertest(app).post("/admin/verify").send({
            confirmationCode:"12345"
        });
        expect(response.status).toBe(201);
        expect(response.body.status).toHaveProperty("success");
        expect(response.body.response).toHaveProperty('You have been successfully verified');
    });
    it("it should verify admin", async () => {
        const response = await supertest(app).post("/admin/verify").send({
            confirmationCode:"12345"
        });
        expect(response.status).toBe(201);
        expect(response.body.status).toHaveProperty("success");
        expect(response.body.response).toHaveProperty('You have been successfully verified');
    });
});

