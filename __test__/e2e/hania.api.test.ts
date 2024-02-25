import request from "supertest";
import { app } from "../../src";
import { server } from "../../src/index"; // Import the server instance

describe('/addresses', () => {
  it("Should return status 200 and empty array", async () => {
    await request(app)
      .get('/addresses')
      .expect(200, [
        { id: 1, status: 'real' },
        { id: 2, status: 'real' },
        { id: 3, status: 'real' }
      ])
  });

  // Close the server after all tests have completed
  afterAll(() => {
    server.close();
  });
});
