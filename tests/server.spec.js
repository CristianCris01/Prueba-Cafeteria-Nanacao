const request = require("supertest");
const server = require("../index");
const app = require("../index");

describe("GET productos que devuelve 200", () => {
     it("Prueba Get /cafe", async () => {
          const response = await request(server).get("/cafes");
          expect(response.status).toBe(200);
     });

     it("Prueba status 404 /cafe/:id", async () => {
        const response = await request(app).delete("/cafes/:99999999");
        expect(response.status).toBe(404);
     });

     it("Prueba post /cafe", async () => {
        const response = await request(app).post("/cafes").send({
            "id": 5,
            "nombre": "Mocachino"

        })
        expect(response.status).toBe(201);
     });

     it("Responde 400 si los ids de la url y del payload no coinciden paraput /cafe/:id", async () => {
        const response = (await request(app).put("/cafes/:5")).send({
            "id": 6,
            "nombre": "Mocachino",

        })
        expect(response.status).toBe(400);
     })
});