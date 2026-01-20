const express = require("express");
const uuid = require("uuid");
const port = 3000;

let { companies } = require("./data");

const app = express();


app.get("/api/companies", (req, res) => {
    res.send(companies);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/companies", (req, res) => {
    const company_wo_id = req.body;
    const company = { ...company_wo_id, id: uuid.v4() };
    companies.push(company);
    res.send(company);
});

app.put("/api/companies/:id", (req, res) => {
    const id = req.params.id;
    const company = req.body;
    for (let i in companies) {
        if (companies[i].id === id) {
            companies[i] = { ...company };
        }
    }

    res.send(company);
});

app.delete("/api/companies/:id", (req, res) => {
    const id = req.params.id;
    companies = companies.filter(company => company.id !== id);
    res.send({ message: "Successfully deleted", id });
});


app.listen(port);