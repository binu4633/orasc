import { WEBHOOK_SECRET } from '$env/static/private';
import crypto from "crypto";
function verifySignature(payload, signature) {
  const secret = WEBHOOK_SECRET; // Replace with your Razorpay secret
  const generatedSignature = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(payload))
    .digest("hex");

  

  return generatedSignature === signature;
}

export default verifySignature;