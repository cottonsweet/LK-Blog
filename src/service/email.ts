import nodemailer from "nodemailer";

export interface EmailData {
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ email, subject, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from: email,
    message,
    html: `
    <h1>제목 : ${subject}<h1>
    <div>본문: ${message}</div>
    <br/>
    <p>수신자: ${email}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
