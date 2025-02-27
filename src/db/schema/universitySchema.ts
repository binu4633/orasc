import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";
import type { IUniversityReg } from "$src/app";

const universityRegSchema = new Schema<IUniversityReg>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    universityName: {
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

const UniversityRegistration =mongoose.models.UniversityRegistration || mongoose.model<IUniversityReg>(
  "UniversityRegistration",
  universityRegSchema
);

export default UniversityRegistration;
