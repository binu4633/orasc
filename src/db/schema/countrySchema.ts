import { Schema, model, Types } from "mongoose";
import mongoose from "mongoose";

const countrySchema = new Schema({
      countries:{
            type:[String]
      }
});


const Country =mongoose.models.Country || mongoose.model('Country',countrySchema);

export default Country;