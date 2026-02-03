import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';

export default function Cart() {
  const cartData = useSelector((state) => state.cart);
  const cart = Array.isArray(cartData) ? cartData : cartData.items || [];

  let subtotal = 0;
  cart.forEach((item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    subtotal += price * (item.amount || 1);
  });

  return (
    <Container>
      <h2>Your Cart:</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))
      )}
      <h4>Subtotal: RM{subtotal}</h4>
    </Container>
  );
}
