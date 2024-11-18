import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import cake1 from './assets/cake1.jpg';
import cake3 from './assets/cake3.jpg';
import cake from './assets/cake.jpg';

function Mycarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image src={cake1} width='100%' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={cake3} width='100%' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={cake} width='100%' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousel;