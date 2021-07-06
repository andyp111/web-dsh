const app = require('../../../../server/app.js');
const request = require('supertest');

describe("Check if test work at all", () => {
  it("should return 2 for adding 1 + 1", () => {
    expect(1 + 1).toBe(2);
  })
})

describe("Should fail with already existing login information", () => {
  it("should return a 400 code for already existing login information", async () => {
    const response = await request(app)
      .post('/api/signup')
      .send({
        username: 'jordan',
        password: 'hoang',
        email: 'jordan@hoang',
        level: 'Junior'
      });

    expect(response.status).toBe(400);
    console.log(response.status);
    console.log(response.body.message);
  })
})

describe("Should create a new user and delete it successfully", () => {
  it("should return a 200 successful code for deleted user", async () => {
    const newUser = await request(app)
      .post('/api/signup')
      .send({
        username: 'andy',
        password: 'hoang',
        email: 'andy@hoang',
        level: 'Junior'
      });

    expect(newUser.status).toBe(200);
    console.log(newUser.status);
    expect(newUser.body.message).toBe('inserted')
    console.log(newUser.body.message);
  })
})

describe("Should create a new user and post it into the database", () => {
  it("should return a 200 successful code for newly created user", async () => {
    const response = await request(app)
      .post('/api/login')
      .send({
        username: 'ben',
        password: 'pham',
        email: 'ben@pham',
        level: 'Junior'
      });

    expect(response.status).toBe(200);
    console.log(response.status);
    expect(response.body.message).toBe('inserted')
    console.log(response.body.message);
  })
})