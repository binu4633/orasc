import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";

type IEnquiry = {
      name:string;
      number:number;
      email:string;
      message:string
}

const enquirySchema = new Schema<IEnquiry>({
   name:{
      type:String,
      required:true
   },
   number:{
      type:Number,
      required:true
   },
   email:{
      type:String,
      required:true
   },
   message:{
      type:String,
      
   },
},{
      timestamps:true,
      
  }
)

const Enquiry = mongoose.models.Enquiry ||  mongoose.model<IEnquiry>('Enquiry', enquirySchema)


export default Enquiry;