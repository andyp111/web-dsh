const app = require("../../../../server/app.js");
const request = require("supertest");

const login = {
  username: "jordan",
  password: "hoang",
  email: "jordan@hoang",
  level: "junior",
};

const signup = {
  username: "ben",
  password: "pham",
  email: "ben@pham",
  level: "Junior",
};

describe("Should fail with already existing login information", () => {
  it("should return a 400 code for already existing login information", async () => {
    const response = await request(app).post("/api/signup").send({
      username: "jordan",
      password: "hoang",
      email: "jordan@hoang",
      level: "Junior",
    });

    expect(response.status).toBe(400);
    console.log(response.status);
    console.log(response.body.message);
  });
});

describe("Should create a new user and delete it successfully", () => {
  it("should return a 200 successful code for deleted user", async () => {
    const newUser = await request(app).post("/api/signup").send({
      username: "andy",
      password: "hoang",
      email: "andy@hoang",
      level: "Junior",
    });

    expect(newUser.status).toBe(200);
    console.log(newUser.status);
  });
});
//will fail when signing up more than once
describe("Should create a new user and post it into the database", () => {
  it("should return a 200 successful code for newly created user", async () => {
    const response = await request(app).post("/api/signup").send(signup);

    expect(response.status).toBe(200);
    console.log(response.status);
  });
});


describe("Should fail to login user with incorrect password", () => {
  it("should return 400 for incorrect login password", async () => {
    const response = await request(app).post("/api/login").send({
      username: 'jordan',
      password: 'incorrectpassword'
    })

    expect(response.status).toBe(400);
  })
})

describe("Should correctly login user with correct username and password", () => {
  it("should return 200 for correct login password and username", async () => {
    const response = await request(app).post("/api/login").send({
      username: 'jordan',
      password: 'hoang'
    })

    expect(response.status).toBe(200);
  })
})