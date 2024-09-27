const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "kanusrkgroup.official@gmail.com",
        pass: "lmuj utrv cdgt fguv"
    }
})

module.exports = {
    transporter
}