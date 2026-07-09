import asyncHandler from "express-async-handler";
import Contact from "../models/Contact.js";

/**
 * @desc    Submit a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Your message has been sent successfully. Thank you for reaching out!",
    data: contact,
  });
});

/**
 * @desc    Get all contact messages (for the site owner)
 * @route   GET /api/contact
 * @access  Public (no auth wired up for this trainee-level project)
 */
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: contacts.length, data: contacts });
});
