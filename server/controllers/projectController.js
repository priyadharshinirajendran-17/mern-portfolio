import asyncHandler from "express-async-handler";
import Project from "../models/Project.js";

/**
 * @desc    Get all projects, sorted by display order
 * @route   GET /api/projects
 * @access  Public
 */
export const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 });
  res.status(200).json({ success: true, count: projects.length, data: projects });
});

/**
 * @desc    Get a single project by id
 * @route   GET /api/projects/:id
 * @access  Public
 */
export const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json({ success: true, data: project });
});
