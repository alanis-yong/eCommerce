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
      <div style={{ 
        height: '200px', 
        width: '100%', 
        backgroundColor: '#f8f9fa', // Light gray background to fill the empty space
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Card.Img 
          variant="top" 
          src={item.image} 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            width: 'auto',  // Allows the image to keep its natural width
            height: 'auto', // Allows the image to keep its natural height
            objectFit: 'contain' // Shows the WHOLE image
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
