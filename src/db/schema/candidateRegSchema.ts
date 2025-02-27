import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";
import type { ICandidateReg} from "$src/app";

const candidateRegSchema = new Schema<ICandidateReg>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
    email: {
      type: String,
      unique:true,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    number: {
      type: Number,
    },
    qualification: {
      type: String,
    },
    preferredJobs: {
      type: String,
    },
    preferredCountries: {
      type: String,
    },
    cv: {
      fileName: { type: String, required: true },
      contentType: { type: String, required: true },
      size: { type: Number, required: true },
      data: { type: Buffer ,required: true},
    },
    registrationApprove:{
      type: String,
      enum: ["pending", "approved", "unapproved"],
    }
  },
  {
    timestamps: true,
  }
);

const CandidateRegistration = mongoose.models.CandidateRegistration ||  mongoose.model<ICandidateReg>('CandidateRegistration', candidateRegSchema)


export default CandidateRegistration;
