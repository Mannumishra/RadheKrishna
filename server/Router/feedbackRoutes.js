const express = require("express");
const { createFeedback, getAllFeedbacks, getFeedbackById, deleteFeedback } = require("../Controllers/feedbackController");


const Feedbackrouter = express.Router();

Feedbackrouter.post("/create-feedback", createFeedback);
Feedbackrouter.get("/all-feedback", getAllFeedbacks);
Feedbackrouter.get("/get-single-feedback/:id", getFeedbackById);
Feedbackrouter.delete("/delete-feedback/:id", deleteFeedback);

module.exports = Feedbackrouter;
