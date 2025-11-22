import Stripe from 'stripe';
import type { RequestHandler } from '@sveltejs/kit';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2024-06-20'
});

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { cartItems } = await request.json();

		// Create line items from the cart
		const line_items = cartItems.map((item: any) => ({
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.name,
					images: [item.image]
				},
				unit_amount: Math.round(item.price * 100) // cents
			},
			quantity: item.qty
		}));

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items,
			mode: 'payment',
			success_url: `${process.env.PUBLIC_BASE_URL}/success`,
			cancel_url: `${process.env.PUBLIC_BASE_URL}/cancel`
		});

		return new Response(JSON.stringify({ id: session.id, url: session.url }), {
			status: 200
		});
	} catch (err: any) {
		console.error('Error creating checkout session:', err);
		return new Response(JSON.stringify({ error: err.message }), { status: 500 });
	}
};
