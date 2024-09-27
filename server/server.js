const dotenv = require("dotenv")
const express = require("express")
dotenv.config()
const cors = require("cors")
const { connectDB } = require("./Config/db")

const Router = require('./Router/Routers');
const vedioRouter = require('./Router/VedioRouter');
const galleryRouter = require('./Router/GalleyRouter');
const dressRouter = require("./Router/DressRouter")
const Registationrouter = require("./Router/RegistationRoutes")
const Contactrouter = require("./Router/contactRoutes")
const Feedbackrouter = require("./Router/feedbackRoutes")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api", Router);
app.use("/api", vedioRouter);
app.use("/api", galleryRouter);
app.use("/api", dressRouter);
app.use("/api", Registationrouter);
app.use("/api", Contactrouter);
app.use("/api", Feedbackrouter);

app.set(express.static("./public"));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("Server Is Running")
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server Is running at ${process.env.SERVER_PORT} port`)
})


connectDB()

