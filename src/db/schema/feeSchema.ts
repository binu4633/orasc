import { Schema } from "mongoose";
import mongoose from "mongoose";
import { number } from "zod";

const feeSchema = new Schema({
      studentRegistrationFee:{
            type:Number,
            default:0
      },
      jobCandidateRegistrationFee:{
            type:Number,
            default:0
      },
      courseApplicationFee:{
            type:Number,
            default:0
      },
      jobApplicationFee:{
            type:Number,
            default:0
      },
});


const Fees = mongoose.models.Fees ||mongoose.model('Fees',feeSchema);

export default Fees;