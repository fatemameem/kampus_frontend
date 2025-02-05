import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP settings
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, // your receiving email
      subject: subject,
      text: `Message:\n${message} \n\nsender: ${firstName} ${lastName} \n\nemail: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error sending email", error });
  }
}
