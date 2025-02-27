import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";
import type { IStudentReg } from "$src/app";
import { string } from "zod";
const studentRegSchema = new Schema<IStudentReg>(
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
      unique:true
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
    preferredCourses: {
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

const StudentRegistration = mongoose.models.StudentRegistration ||  mongoose.model<IStudentReg>('StudentRegistration', studentRegSchema)


export default StudentRegistration;
