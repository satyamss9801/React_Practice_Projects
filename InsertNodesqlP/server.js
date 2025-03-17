const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Create a MySQL connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "satyam",
  database: "practice",
});

conn.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

const query = "INSERT INTO name(name) VALUES (?)";

// Handle form submission using POST
app.post("/reg", (req, res) => {
  const value = req.body.value;

  if (!value) {
    return res.status(400).send("Name cannot be empty.");
  }

  conn.query(query, [value], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Error executing query");
    } else {
      console.log("Data inserted successfully:", results);
      res.status(200).send("Data inserted successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
