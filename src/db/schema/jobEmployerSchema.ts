import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";
import type { IJobEmployerReg } from "$src/app";

const jobEmployerRegSchema = new Schema<IJobEmployerReg>(
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

const JobEmployerRegistration =mongoose.models.JobEmployerRegistration || mongoose.model<IJobEmployerReg>(
  "JobEmployerRegistration",
  jobEmployerRegSchema
);

export default JobEmployerRegistration;
