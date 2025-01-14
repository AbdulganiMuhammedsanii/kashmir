import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia", // Make sure this matches your Stripe account's version
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, email, name } = body;
    console.log(amount, email, name);
    // Validate
    if (!amount || amount <= 0 || !email || !name) {
      console.log("heyy");
      return new NextResponse("Invalid donation amount, email, or name", { status: 400 });
    }

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Custom Donation",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email, // For convenience at checkout
      payment_intent_data: {
        receipt_email: email,
        description: `Donation by ${name}. Futures of Kashmir Inc is classified as a 509(a)(2) Public Charity organization by the standards of the Internal Revenue Service (IRS). Therefore, your donation is fully tax-deductible to the extent provided by law and based on your tax situation. Please note that a 2.2% transaction fee is applied to your donation. Your donation contributes to making sure that all children have supportive learning environments and access to an education that recognizes and uplifts their own sense of identity. The Futures of Kashmir team and recipients greatly appreciate your donation and hope you continue to support our mission. Sincerely, Futures of Kashmir.`
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new NextResponse("Failed to create session", { status: 500 });
  }
}
