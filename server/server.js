const dotenv = require("dotenv")
const express = require("express")
dotenv.config()
const cors = require("cors")
const { connectDB } = require("./Config/db")

const Router = require('./Router/Routers');
const vedioRouter = require('./Router/VedioRouter');
const galleryRouter = require('./Router/GalleyRouter');
const dressRouter = require("./Router/DressRouter")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api", Router);
app.use("/api", vedioRouter);
app.use("/api", galleryRouter);
app.use("/api", dressRouter);

app.set(express.static("./public"));
app.use("/public", express.static("public"));

app.get("/" ,(req,res)=>{
  res.send("Server Is Running")
})

app.listen(process.env.SERVER_PORT ,()=>{
  console.log(`Server Is running at ${process.env.SERVER_PORT} port`)
})


connectDB()
















// const express = require('express');
// const app = express();
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();
// const Router = require('./Router/Routers');
// const vedioRouter = require('./Router/VedioRouter');
// const galleryRouter = require('./Router/GalleyRouter');
// const { connectDB } = require('./Config/db');

// connectDB();
// dotenv.config();

// // Middleware setup
// app.use(cors());
// app.use(express.json());

// app.use("/api", Router);
// app.use("/api", vedioRouter);
// app.use("/api", galleryRouter);

// app.set(express.static("./public"));
// app.use("/public", express.static("public"));

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Port setup
// const PORT = process.env.PORT || 5000;
// console.log(`Port: ${PORT}`);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
