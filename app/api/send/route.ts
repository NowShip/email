import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template";
import { PlaidVerifyIdentityEmail } from "../../../react-email-starter/emails/magic-link";
import { StripeWelcomeEmail } from "@/react-email-starter/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "help@alirezasamadi.com",
      to: ["alirs.dev@gmail.com"],
      subject: "Hello world",
      react: PlaidVerifyIdentityEmail({
        validationCode: "JFKLAJS",
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
