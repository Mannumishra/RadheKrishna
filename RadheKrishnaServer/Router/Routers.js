
const { CreateArtist, getArtist, updateArtist, deleteArtist, getSingleArtist } = require("../Controllers/Artist.Controller")
const upload = require("../Middleware/Multer")

const Router = require("express").Router()


Router.post("/event", upload.single("image"), CreateArtist)
Router.put("/event/:_id", upload.single("image"), updateArtist)
Router.get("/event", getArtist)
Router.get("/event/:_id", getSingleArtist)
Router.delete("/event/:_id", deleteArtist)

module.exports = Router