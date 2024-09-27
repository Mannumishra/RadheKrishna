const RigistatonModel = require("../Models/RegistationModel");
const { transporter } = require("../Utils/MailSend");


const createRegistation = async (req, res) => {
    try {
        const { name, whatsappNumber, address, age, message } = req.body
        const errorMessage = [];
        if (!name) errorMessage.push("Name is required");
        if (!whatsappNumber) errorMessage.push("WhatsApp number is required");
        if (!address) errorMessage.push("Address is required");
        if (!age) errorMessage.push("Age is required");
        if (!message) errorMessage.push("Message is required");

        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(", ")
            });
        }

        const newRegistration = new RigistatonModel({
            name,
            whatsappNumber,
            address,
            age,
            message
        });

        await newRegistration.save();

        // Email template for admin
        const adminTemplate = `
    <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="text-align: center; color: #333;">New Registration Submission</h2>
        <p style="font-size: 16px; color: #555;">A new registration has been received:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>WhatsApp Number:</strong> ${whatsappNumber}</li>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Age:</strong> ${age}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p style="font-size: 16px; color: #555;">Please take the necessary actions based on this registration.</p>
        <p style="font-size: 16px; color: #555;">Best regards,</p>
        <p style="font-size: 16px; color: #555;">Kanu SRK Group</p>
    </div>
`;

        // Send email to admin
        await transporter.sendMail({
            from: 'kanusrkgroup.official@gmail.com', // Replace with your email
            to: "kanusrkgroup.official@gmail.com",
            subject: 'New Registration Submission',
            html: adminTemplate,
        });
        res.status(200).json({
            success: true,
            data: newRegistration,
            message: "Registration Send successfully"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await RigistatonModel.find();
        res.status(200).json({
            success: true,
            data: registrations
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


const getRegistrationById = async (req, res) => {
    try {
        const registration = await RigistatonModel.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({
                success: false,
                message: "Registration not found"
            });
        }
        res.status(200).json({
            success: true,
            data: registration
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


const deleteRegistration = async (req, res) => {
    try {
        const deletedRegistration = await RigistatonModel.findByIdAndDelete(req.params.id);
        if (!deletedRegistration) {
            return res.status(404).json({
                success: false,
                message: "Registration not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Registration deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createRegistation,
    getAllRegistrations,
    getRegistrationById,
    deleteRegistration
};
