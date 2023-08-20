import axios from 'axios';
const stripe = Stripe(
  'pk_test_51N8NXiC5tPhldoVqeQvn7iN9Ckaf25qh4O4Q69fE0Nr3spGzuGri6UEKawU7rHpV0qZ7HrF5fVt2Bbhgda5CYxEt00V4iuZ1Vi'
);

export const bookTour = async (tourId) => {
  // 1) Get checkout sessoin from api
  const session = await axios(
    `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
  );
  // 2) Create checkout form + charge credit card

  await stripe.redirectToCheckout({
    sessionId: session.data.session.id,
  });
};
