import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Skill category is required"],
      enum: ["Frontend", "Backend", "Database", "Programming", "Tools", "Cloud"],
    },
    level: {
      type: Number,
      required: [true, "Skill level is required"],
      min: 0,
      max: 100,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
