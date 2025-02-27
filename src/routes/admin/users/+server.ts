import type { RequestHandler } from "./$types";
import User from "$db/schema/userSchema";

import { json, error } from "@sveltejs/kit";

export const GET: RequestHandler = async ({url}) => {
  let keyword = url.searchParams.get("keyword");
  const page = Math.floor(Number(url.searchParams.get("page"))) || 1;
 
  const limit = 3;
  const skip = (page - 1) * limit;
  let query;
  if (keyword) {
   query = {
    email: { $regex:keyword, $options: 'i' },
    };
  } else {
    query = {};
  }





//   await Product.find({
//     name: { $regex: searchKeyword, $options: 'i' } // 'i' for case-insensitive
// });

  const totalNum = await User.countDocuments(query);
  const totalPages = Math.ceil(totalNum / limit);
 
//   if (page < 1 || page > totalPages) {
//     throw new Error("");
//   }

try {
    const users = await User.find(query)
    .sort("createdAt")
    .skip(skip)
    .limit(limit)
    .select("firstName lastName email userType");

  console.log('users', users)  
 
  return json({ users, totalPages, page }); 
} catch (error) {
    
}
 
};
