const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "bditens",
})
//Create
app.post("/item", (req, res) => {
    const { item } = req.body;
    let SQL = "INSERT INTO lista ( itens ) VALUES (?)";
    db.query(SQL, item, (err, result) => {
        console.log(err);
    })
})

//Read
app.get("/item", (req, res) => {
    let SQL = "SELECT * from lista";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

//Delete
app.delete("/item/:id", (req, res) => {

        const { id } = req.params;
        console.log("informação: ", id)

        let SQL = "DELETE FROM lista WHERE (`id` = ?)";

        db.query(SQL, id, (err, result) => {
            console.log(err);
        })
})

app.listen(3007, () => {
    console.log("rodando servidor");
});