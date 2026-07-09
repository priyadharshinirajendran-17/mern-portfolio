import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js";
import { validateContact } from "../middleware/validateContact.js";

const router = express.Router();

router.route("/").post(validateContact, createContact).get(getContacts);

export default router;
