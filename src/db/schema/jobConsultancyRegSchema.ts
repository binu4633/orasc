import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";
import type { IJobConsultancyReg } from "$src/app";

const jobConsultancyRegSchema = new Schema<IJobConsultancyReg>(
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
      unique:true
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

const JobConsultancyRegistration =mongoose.models.JobConsultancyRegistration || mongoose.model<IJobConsultancyReg>(
  "JobConsultancyRegistration",
  jobConsultancyRegSchema
);

export default JobConsultancyRegistration;
