import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";
import type { IStudentAgentReg } from "$src/app";

const studentAgentRegSchema = new Schema<IStudentAgentReg>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    businessName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique:true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },

    country: {
      type: String,
    },

    number: {
      type: Number,
    },
    website: {
      type: String,
    },
    registrationApprove:{
      type: String,
      enum: ["pending", "approved", "unapproved"],
      default:'pending'
    }
  },
  {
    timestamps: true,
  }
);

const StudentAgentRegistration =mongoose.models.StudentAgentRegistration || mongoose.model<IStudentAgentReg>(
  "StudentAgentRegistration",
  studentAgentRegSchema
);

export default StudentAgentRegistration;
