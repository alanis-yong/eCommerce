import { Container, Row, Col } from 'react-bootstrap';
import Item from '../components/Item';
import penImg from '../assets/pen.jpg'; 
import laptopImg from '../assets/laptop.png';
import iphoneImg from '../assets/iphone.jpg';

const items = [
  { id: 1, name: 'Pen', price: 10, image: penImg },
  { id: 2, name: 'Laptop', price: 1000, image: laptopImg },
  { id: 3, name: 'iPhone', price: 500, image: iphoneImg },
];

export default function Home() {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
