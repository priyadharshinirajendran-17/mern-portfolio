import asyncHandler from "express-async-handler";
import Skill from "../models/Skill.js";

/**
 * @desc    Get all skills, sorted by category then display order
 * @route   GET /api/skills
 * @access  Public
 */
export const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find().sort({ category: 1, order: 1 });
  res.status(200).json({ success: true, count: skills.length, data: skills });
});
