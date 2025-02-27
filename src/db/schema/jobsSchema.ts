import { Schema } from "mongoose";
import mongoose from "mongoose";
import type { IJobAdd } from "$src/app";

const jobSchema = new Schema<IJobAdd>({
    country:{
      type:String,
      required:true
    },
    place:{
      type:String,
      required:true
    },
    jobTitle:{
      type:String,
      required:true
    },
    company:{
      type:String,
      
    },
    qualification:{
      type:String,
      required:true
    },
    specification:{
      type:String
    },
    salary:{
      type:String,
      required:true
    },
    experience:{
      type:String,
    },
    description:{
      type:String,
    },

},{
      timestamps:true,
      
  })

const Job = mongoose.models.Job || mongoose.model<IJobAdd>('Job',jobSchema);

export default Job;

