"use server";

import nodemailer from "nodemailer";

export async function sendMail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true, // Gmail SSL
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: "fliesenprakaj@gmail.com", // TEST → später fliesenprakaj.at
      subject: `Neue Anfrage von ${name}`,
      text: message,
      html: `
        <h3>Neue Anfrage über das Kontaktformular</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Nachricht:</b><br>${message}</p>
      `,
    });

    console.log("✅ Mail sent:");
    console.log("  messageId:", info.messageId);
    console.log("  accepted:", info.accepted);
    console.log("  rejected:", info.rejected);
    console.log("  response:", info.response);

    return { success: true };
  } catch (error: any) {
    console.error("❌ Mail Error:", error);
    return { success: false, error: error.message };
  }
}
