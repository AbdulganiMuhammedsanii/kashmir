import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia", // Updated to the correct API version
});

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    const { amount, email } = body;

    // Validate the amount and email
    if (!amount || amount <= 0 || !email) {
      return new NextResponse("Invalid donation amount or email", { status: 400 });
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
            unit_amount: amount * 100, // Convert dollars to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email, // Send a receipt to this email
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-cancel`,
    });

    // Return the session URL to redirect the user
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new NextResponse("Failed to create session", { status: 500 });
  }
}
