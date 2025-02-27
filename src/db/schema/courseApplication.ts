import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";

const courseApplicationSchema = new Schema(
  {
    name:{
     type:String
    },
    email:{
     type:String
    },
    country:{
     type:String
    },
    college:{
     type:String
    },
    university:{
     type:String
    },
    course:{
     type:String
    },
    userId: {
      type: mongoose.Schema.ObjectId,
    },
    courseId: {
      type: mongoose.Schema.ObjectId,
    },
    payment: {
      type: String,
      enum: ["autherized", "captured", "refunded"],
    },
    status: {
      type: String,
      enum: ["pending", "processing", "completed"],
    },
    result:{
      type:String,
      enum: ["pending", "rejected", "accepted"],
      default:"pending"
    }
  },
  {
    timestamps: true,
  }
);

const CourseApplication = mongoose.models.CourseApplication || mongoose.model("CourseApplication", courseApplicationSchema);

export default CourseApplication;
