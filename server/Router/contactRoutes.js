const express = require("express");
const { createContact, getAllContacts, deleteContact, getContactById } = require("../Controllers/contactController");

const Contactrouter = express.Router();

Contactrouter.post("/send-contact", createContact);
Contactrouter.get("/all-contact", getAllContacts);
Contactrouter.get("/get-single-contact/:id", getContactById);
Contactrouter.delete("/delete-contact/:id", deleteContact);

module.exports = Contactrouter;
