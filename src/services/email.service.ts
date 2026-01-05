import { Client } from "postmark";

const serverToken = process.env.POSTMARK_API_TOKEN;

if (!serverToken) {
  console.warn(
    "POSTMARK_API_TOKEN is not set in environment variables. Email sending will fail."
  );
}

const client = new Client(serverToken || "");

interface SendEmailOptions {
  to: string;
  subject: string;
  htmlBody?: string;
}

export const sendEmail = async (options: SendEmailOptions) => {
  const { to, subject, htmlBody } = options;

  const fromAddress = process.env.POSTMARK_SENDER_SIGNATURE || "noreply@shipflex.com";

  try {
    const response = await client.sendEmail({
      From: fromAddress,
      To: to,
      Subject: subject,
      HtmlBody: htmlBody,
      MessageStream: "outbound",
    });

    return response;
  } catch (error) {
    console.error(`[EMAIL-SERVICE] Fallback email also failed:`, error);
    throw new Error(`Failed to send verification email: ${error}`);
  }
};
