import { Schema } from "mongoose";
import mongoose from "mongoose";
import type { ICourseAdd } from "$src/app";

const courseSchema = new Schema<ICourseAdd>(
  {
    country: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },

    studyLevel: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    subCourse: {
      type: String,
    },
    compus: {
      type: String,
      required: true,
    },
    eligibility: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    intake: {
      type: String,
      required: true,
    },
    tutionFee: {
      type: String,
      required: true,
    },
    intenship: {
      type: String,
    },
    courseLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Course =mongoose.models.Course || mongoose.model<ICourseAdd>("Course", courseSchema);

export default Course;
