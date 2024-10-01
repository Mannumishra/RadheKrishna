const ContactModel = require("../Models/ContactModel");
const { transporter } = require("../Utils/MailSend");

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

        // Email template for user
        const userTemplate = `
    <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="text-align: center; color: #333;">Thank for inquiry on our website. </h2>
        <p style="font-size: 16px; color: #555;">Dear ${name},</p>
        <p style="font-size: 16px; color: #555;">Thank you for reaching out to us. Here’s a summary of your submission:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Mobile Number:</strong> ${mobileNumber}</li>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p style="font-size: 16px; color: #555;">Best regards,</p>
        <p style="font-size: 16px; color: #555;">Kanu SRK Group</p>
    </div>
`;

        // Email template for admin
        const adminTemplate = `
    <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="text-align: center; color: #333;">New Inquiry Recieved.</h2>
        <p style="font-size: 16px; color: #555;">A new contact form submission has been received:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Mobile Number:</strong> ${mobileNumber}</li>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p style="font-size: 16px; color: #555;">Please take the necessary actions.</p>
        <p style="font-size: 16px; color: #555;">Best regards,</p>
        <p style="font-size: 16px; color: #555;">Kanu SRK Group</p>
    </div>
`;

        // Send email to user
        await transporter.sendMail({
            from: 'kanusrkgroup.official@gmail.com', // Replace with your email
            to: email,
            subject: 'Thank You for Your Feedback',
            html: userTemplate,
        });

        // Send email to admin
        await transporter.sendMail({
            from: 'kanusrkgroup.official@gmail.com', // Replace with your email
            to: "kanusrkgroup.official@gmail.com",
            subject: 'New Contact Submission',
            html: adminTemplate,
        });
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
