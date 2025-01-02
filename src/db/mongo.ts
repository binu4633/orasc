import mongoose,{Mongoose} from "mongoose";

import { MONGO_URL_DEV,MONGO_URL_PRO,NODE_ENV} from '$env/static/private';
import type { Connect } from "vite";


const connectDB = async()=>{

    try {
        
        let conn:Mongoose;

       
        if(NODE_ENV ==='development'){
            conn= await mongoose.connect(MONGO_URL_DEV)
        }else{
            conn = await mongoose.connect(MONGO_URL_PRO);
        }
        
        console.log(`Mongodb connected: ${conn.connection.host}`);
    } catch (error:any) {
        
        console.error(`mongoose Error ${error.message}`);
    }
}

export default connectDB;