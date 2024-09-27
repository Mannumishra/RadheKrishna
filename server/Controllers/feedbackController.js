const FeedbackModel = require("../Models/FeedbackModel");

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
