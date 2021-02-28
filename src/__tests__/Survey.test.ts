import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations();
    });

    it("Should be able to create a new Survey", async () => {
        const response = await request(app).post("/surveys").send({ title: "exemple", description: "description exemple" });
        expect(response.status)
            .toBe(201);
    });

    it("Should be able to get all surveys", async () => {
        const response = await request(app).get("/surveys")
        expect(response.body.length).toBeGreaterThan(0);
    });

});