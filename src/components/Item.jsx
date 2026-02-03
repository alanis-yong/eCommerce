import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart/cartSlice';

export default function Item({ item }) {
  const dispatch = useDispatch();

  function addItem() {
    dispatch(addToCart({ ...item, amount: 1 }));
  }

  return (
    <Card className="h-100 shadow-sm"> 
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={item.image} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
          <br />
          <strong>Price: RM{item.price}</strong>
        </Card.Text>
        <Button variant="primary" onClick={addItem} className="mt-auto">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
