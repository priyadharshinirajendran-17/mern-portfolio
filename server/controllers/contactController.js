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

  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
  });

  // Send a notification email to the portfolio owner.
  // If email fails, we don't fail the whole request — the message is
  // already safely saved in MongoDB either way.
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New portfolio message: ${subject || "No subject"}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `
        <h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
  } catch (emailError) {
  console.error("========== EMAIL ERROR ==========");
  console.error(emailError);
  console.error("=================================");
}

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