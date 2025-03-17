const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "deltaDB",
    password: "satyam",
});

let getRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS userCount FROM users`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            let count = result[0].userCount;
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Some error in DB");
    }
});

app.listen("8080", () => {
    console.log("Server listening on port 8080");
});

process.on("SIGINT", () => {
    connection.end(err => {
        if (err) {
            console.error("Error closing the database connection:", err.message);
        } else {
            console.log("Database connection closed.");
        }
        process.exit();
    });
});
