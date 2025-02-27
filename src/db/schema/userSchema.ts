import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";
import type { IUser } from "$src/app";

const courseItemSchema = new Schema({
  course: {
    type: String,
  },
  university:  {
    type: String,
  },
  country: {
    type: String,
  },
  applicationId: {
    type: String,
  },
});
const jobItemSchema = new Schema({
  jobTitle: {
    type: String,
  },
  company:  {
    type: String,
  },
  country: {
    type: String,
  },
  applicationId: {
    type: String,
  },
});

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordResetToken:{
      type: String,
      unique: true,
    },
    passwordResetExpires: Date,
    userType: {
      type: String,
      enum: ["admin", "employe", "user"],
      default: "user",
    },
    studentRegistrationId: {
      type: mongoose.Schema.ObjectId,
    },
    studentRegistrationApprove: {
      type: String,
      enum: ["pending", "approved", "unapproved"],
    },
    universityRegistrationId: {
      type: mongoose.Schema.ObjectId,
    },

    studentConsultantRegistrationId: {
      type: mongoose.Schema.ObjectId,
    },

    jobCandidateRegistrationId: {
      type: mongoose.Schema.ObjectId,
    },
    jobCandidateRegistrationApprove: {
      type: String,
      enum: ["pending", "approved", "unapproved"],
    },
    employerRegistrationId: {
      type: mongoose.Schema.ObjectId,
    },

    jobConsultantRegistrationId: {
      type: mongoose.Schema.ObjectId,
    },
    appliedCourses:[courseItemSchema],
    appliedJobs:[jobItemSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
