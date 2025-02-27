import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";

const jobApplicationSchema = new Schema(
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
    jobTitle:{
     type:String
    },
    company:{
     type:String
    },
    place:{
     type:String
    },
    
    userId: {
      type: mongoose.Schema.ObjectId,
    },
    jobId: {
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

const JobApplication = mongoose.models.JobApplication || mongoose.model("JobApplication", jobApplicationSchema);

export default JobApplication;
