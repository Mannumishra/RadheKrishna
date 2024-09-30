const express = require("express");
const { createDonate, getAllDonate, getDonateByID, deleteDonate } = require("../Controllers/DonateController");


const Donaterouter = express.Router();

Donaterouter.post("/create-donate", createDonate);
Donaterouter.get("/all-donate", getAllDonate);
Donaterouter.get("/get-single-donate/:id", getDonateByID);
Donaterouter.delete("/delete-donate/:id", deleteDonate);

module.exports = Donaterouter;
