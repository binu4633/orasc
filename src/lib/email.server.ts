import nodemailer from 'nodemailer';
import { EMAIL_USERNAME,EMAIL_PASSWORD,EMAIL_HOST,EMAIL_PORT} from '$env/static/private';
import resetEmail from './resetEmail';

const resetPasswordEmail = async(options)=>{
      const transporter = nodemailer.createTransport({
            host: EMAIL_HOST, // Replace with your SMTP server
            port:EMAIL_PORT, // Common port for SMTP
            secure: false, // true for 465, false for other ports
            auth: {
                user: EMAIL_USERNAME, // Your email
                pass: EMAIL_PASSWORD, // Your email password
            },
        });

        const mailOptions = {
            from:'orasc.com',
            to:options.email,
            subject:options.subject,
           //  text:options.message,
            html:resetEmail(options.resetUrl,options.name),
         }  

         try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
        } 
}

export {resetPasswordEmail}

// Looking to send emails in production? Check out our Email API/SMTP product!
// var transport = nodemailer.createTransport({
//       host: "sandbox.smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: "24d6b14e34c29e",
//         pass: "139f5ee43727f0"
//       }
//     });
