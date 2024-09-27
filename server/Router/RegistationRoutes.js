const express = require("express");
const { createRegistation, getAllRegistrations, getRegistrationById, deleteRegistration } = require("../Controllers/RegistationController");


const Registationrouter = express.Router();

Registationrouter.post("/create-registation", createRegistation);
Registationrouter.get("/all-registation", getAllRegistrations);
Registationrouter.get("/get-single-registation/:id", getRegistrationById);
Registationrouter.delete("/delete-registation/:id", deleteRegistration);

module.exports = Registationrouter;
