
const { createDress, getDress, getSingleDress, updateDress, deleteDress } = require("../Controllers/DressControllar")
const upload = require("../Middleware/Multer")

const dressRouter = require("express").Router()


dressRouter.post("/dress", upload.single("dressImage"), createDress)
dressRouter.get("/dress", getDress)
dressRouter.get("/dress/:_id", getSingleDress)
dressRouter.delete("/dress/:_id", deleteDress)
dressRouter.put("/dress/:_id", upload.single("dressImage"), updateDress)

module.exports = dressRouter