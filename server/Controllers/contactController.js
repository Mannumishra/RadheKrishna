const ContactModel = require("../Models/ContactModel");

// Create a new contact
const createContact = async (req, res) => {
    try {
        // console.log(req.body)
        const { name, email, mobileNumber, address, message } = req.body;

        // Basic validation
        const errorMessage = [];
        if (!name) errorMessage.push("Name is required");
        if (!email) errorMessage.push("Email is required");
        if (!mobileNumber) errorMessage.push("Mobile Number is required");
        if (!address) errorMessage.push("Address is required");
        if (!message) errorMessage.push("Message is required");

        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(", ")
            });
        }

        const newContact = new ContactModel({
            name,
            email,
            mobileNumber,
            address,
            message
        });

        await newContact.save();
        res.status(200).json({
            success: true,
            data: newContact,
            message: "Contact Send successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get all contacts
const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.status(200).json({
            success: true,
            data: contacts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get a contact by ID
const getContactById = async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }
        res.status(200).json({
            success: true,
            data: contact
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Update a contact by ID
// const updateContact = async (req, res) => {
//     try {
//         const { name, email, mobileNumber, address, message } = req.body;

//         const updatedData = {
//             ...(name && { name }),
//             ...(email && { email }),
//             ...(mobileNumber && { mobileNumber }),
//             ...(address && { address }),
//             ...(message && { message })
//         };

//         const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, updatedData, {
//             new: true,
//             runValidators: true
//         });

//         if (!updatedContact) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Contact not found"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: updatedContact,
//             message: "Contact updated successfully"
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error"
//         });
//     }
// };

// Delete a contact by ID
const deleteContact = async (req, res) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Contact deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createContact,
    getAllContacts,
    getContactById,
    deleteContact
};
