const RigistatonModel = require("../Models/RegistationModel")


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
        res.status(200).json({
            success: true,
            data: newRegistration,
            message: "Registration created successfully"
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
