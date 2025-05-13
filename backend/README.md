# Login API with Hardcoded Credentials 

This backend demonstrates a simple login system using **Node.js** and **Express.js** with hardcoded credentials. Upon successful login, a **JWT (JSON Web Token)** is generated and returned to the client.

---

## Features

- Login using hardcoded username and password.
- Generates a JWT on successful login.
- Handles errors and provides descriptive messages for invalid credentials or server errors.
- Simple and lightweight for prototyping.

---

## API Endpoints

### **POST /login**

- Authenticates a user using hardcoded credentials.
- Takes `username` and `password` in the request body.
- Verifies the credentials against hardcoded values.
- Generates and returns a JSON Web Token (JWT) on successful authentication.
- Returns appropriate error messages for unsuccessful attempts.
