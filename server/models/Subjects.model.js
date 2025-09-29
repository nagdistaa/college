import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Subject title is required"],
    },
    link: {
      type: String,
      required: [true, "Subject link is required"],
    },
    category: {
      type: String,
      required: [true, "Subject category is required"],
    },
    type: {
      type: String,
      required: [true, "Subject type is required"],
      enum: ["questions", "summary"],
    },
    author: {
      type: String,
      required: [true, "Subject author is required"],
    },
  },
  { timestamps: true }
);

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;
