import validator from "validator";

/**
 * Validates the incoming contact form payload before it reaches the
 * controller/database. Returns a 400 with a clear message on failure.
 */
export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  if (!email || !validator.isEmail(email)) {
    errors.push("A valid email address is required");
  }

  if (!message || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors.join(". ") });
  }

  next();
};
