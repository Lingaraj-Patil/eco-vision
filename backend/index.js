const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "se3ret";

const app = express();


app.use(express.json());
app.use(cors());

const hardcodedUser = {
  username: "admin",
  password: "password123"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      const token = jwt.sign(
        { username: hardcodedUser.username }, 
        JWT_SECRET
      );

      return res.status(200).json({
        message: "Login successful",
        token
      });
    } else {
      return res.status(403).json({
        message: "Invalid credentials"
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
