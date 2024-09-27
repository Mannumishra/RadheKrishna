const FeedbackModel = require("../Models/FeedbackModel");
const { transporter } = require("../Utils/MailSend");

// Create new feedback
const createFeedback = async (req, res) => {
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

        const newFeedback = new FeedbackModel({
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
        <h2 style="text-align: center; color: #333;">Thank You for Your Feedback!</h2>
        <p style="font-size: 16px; color: #555;">Dear ${name},</p>
        <p style="font-size: 16px; color: #555;">Thank you for providing your feedback. Here’s a summary of your submission:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>WhatsApp Number:</strong> ${whatsapp}</li>
            <li><strong>Age:</strong> ${age}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p style="font-size: 16px; color: #555;">We appreciate your input and will consider it in our future improvements.</p>
        <p style="font-size: 16px; color: #555;">Best regards,</p>
        <p style="font-size: 16px; color: #555;">Kanu SRK Group</p>
    </div>
`;

        // Email template for admin
        const adminTemplate = `
    <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="text-align: center; color: #333;">New Feedback Submission</h2>
        <p style="font-size: 16px; color: #555;">A new feedback form submission has been received:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>WhatsApp Number:</strong> ${whatsapp}</li>
            <li><strong>Age:</strong> ${age}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p style="font-size: 16px; color: #555;">Please take the necessary actions based on this feedback.</p>
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
const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await FeedbackModel.find();
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
const getFeedbackById = async (req, res) => {
    try {
        const feedback = await FeedbackModel.findById(req.params.id);
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

//         const updatedFeedback = await FeedbackModel.findByIdAndUpdate(req.params.id, updatedData, {
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
const deleteFeedback = async (req, res) => {
    try {
        const deletedFeedback = await FeedbackModel.findByIdAndDelete(req.params.id);
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
    createFeedback,
    getAllFeedbacks,
    getFeedbackById,
    deleteFeedback
};
