const supertest = require("supertest");
const app = require("../app.js");

describe("GET /add", () => {
  it("should return 5 for a=2 and b=3", async () => {
    const response = await supertest(app).get("/add?a=2&b=3");
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(5);
  });
});
