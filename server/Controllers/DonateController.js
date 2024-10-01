const Donation = require("../Models/DonatationModel");
const { transporter } = require("../Utils/MailSend");

// Create new feedback
const createDonate = async (req, res) => {
    try {
        const { name, email, whatsapp, age, message } = req.body;

        // Basic validation
        const errorMessage = [];
        if (!name) errorMessage.push("Name is required");
        if (!email) errorMessage.push("Email is required");
        if (!whatsapp) errorMessage.push("WhatsApp number is required");
        if (!age) errorMessage.push("Age is required");
        if (!message) errorMessage.push("Message is required");

        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(", ")
            });
        }

        const newFeedback = new Donation({
            name,
            email,
            whatsapp,
            age,
            message
        });

        await newFeedback.save();

        // Email template for user
        const userTemplate = `
<div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="text-align: center; color: #333;">Thank You for Your Generous Donation!</h2>
    <p style="font-size: 16px; color: #555;">Dear ${name},</p>
    <p style="font-size: 16px; color: #555;">We sincerely appreciate your support. Your contribution will go a long way in helping us achieve our mission. Here’s a summary of your donation details:</p>
    <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>WhatsApp Number:</strong> ${whatsapp}</li>
        <li><strong>Age:</strong> ${age}</li>
        <li><strong>Message:</strong> ${message}</li>
    </ul>
    <p style="font-size: 16px; color: #555;">We are grateful for your contribution and your belief in our cause. Your donation will make a meaningful impact.</p>
    <p style="font-size: 16px; color: #555;">Thank you once again for your generosity!</p>
    <p style="font-size: 16px; color: #555;">Best regards,</p>
    <p style="font-size: 16px; color: #555;">Kanu SRK Group</p>
</div>
`;

        // Email template for admin
        const adminTemplate = `
<div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="text-align: center; color: #333;">New Donation Received</h2>
    <p style="font-size: 16px; color: #555;">A new donation has been received with the following details:</p>
    <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>WhatsApp Number:</strong> ${whatsapp}</li>
        <li><strong>Age:</strong> ${age}</li>
        <li><strong>Message:</strong> ${message}</li>
    </ul>
    <p style="font-size: 16px; color: #555;">Please ensure proper acknowledgment of this donation and update the records accordingly.</p>
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
            subject: 'New Feedback Submission',
            html: adminTemplate,
        });
        res.status(200).json({
            success: true,
            data: newFeedback,
            message: "Feedback submitted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get all feedbacks
const getAllDonate = async (req, res) => {
    try {
        const feedbacks = await Donation.find();
        res.status(200).json({
            success: true,
            data: feedbacks
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get a single feedback by ID
const getDonateByID = async (req, res) => {
    try {
        const feedback = await Donation.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({
                success: false,
                message: "Feedback not found"
            });
        }
        res.status(200).json({
            success: true,
            data: feedback
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Update feedback by ID
// const updateFeedback = async (req, res) => {
//     try {
//         const { name, email, whatsapp, age, message } = req.body;

//         const updatedData = {
//             ...(name && { name }),
//             ...(email && { email }),
//             ...(whatsapp && { whatsapp }),
//             ...(age && { age }),
//             ...(message && { message })
//         };

//         const updatedFeedback = await Donation.findByIdAndUpdate(req.params.id, updatedData, {
//             new: true,
//             runValidators: true
//         });

//         if (!updatedFeedback) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Feedback not found"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: updatedFeedback,
//             message: "Feedback updated successfully"
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error"
//         });
//     }
// };

// Delete feedback by ID
const deleteDonate = async (req, res) => {
    try {
        const deletedFeedback = await Donation.findByIdAndDelete(req.params.id);
        if (!deletedFeedback) {
            return res.status(404).json({
                success: false,
                message: "Feedback not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Feedback deleted successfully"
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
    createDonate,
    getAllDonate,
    getDonateByID,
    deleteDonate
};
