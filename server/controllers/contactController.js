import asyncHandler from "express-async-handler";
import Contact from "../models/Contact.js";
import transporter from "../config/email.js";

/**
 * @desc    Submit a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Save message to MongoDB first
  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
  });

  // Respond immediately
  res.status(201).json({
    success: true,
    message: "Your message has been received successfully. Thank you for reaching out!",
    data: contact,
  });

  // Send email in the background
  transporter
    .sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message: ${subject || "No Subject"}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}

Message:
${message}
      `,
      html: `
        <h2>📩 New Portfolio Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No Subject"}</p>

        <hr>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    .then(() => {
      console.log("✅ Email notification sent successfully.");
    })
    .catch((err) => {
      console.error("========== EMAIL ERROR ==========");
      console.error(err);
      console.error("=================================");
    });
});

/**
 * @desc    Get all contact messages
 * @route   GET /api/contact
 * @access  Public
 */
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts,
  });
});