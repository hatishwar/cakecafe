import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from './assets/card1.jpg';
import card2 from './assets/card2.jpg';
import card3 from './assets/card3.jpg';
import card4 from './assets/card4.jpg';


function Mycard() {
  return (
    <div className='container-fluid text-center text-uppercase my-5'>
      <div className='row'>
      <div className='my-5'>
      <h1>OUR PRODUCTS</h1>
      <p>Cake Cafe & Fine Pastries prides itself on using the finest ingredients in all of our items.</p>
      </div>
      <div className='col-12 col-md-2 offset-md-2'>
       <Card >
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Cakes</Card.Title>
        
      </Card.Body>
    </Card>
    </div>

    <div className='col-12 col-md-2'>
       <Card >
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Pastries</Card.Title>
        
      </Card.Body>
    </Card>
    </div>

    <div className='col-12 col-md-2'>
       <Card >
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Party Menu</Card.Title>
       
      </Card.Body>
    </Card>
    </div>

    <div className='col-12 col-md-2'>
       <Card >
      <Card.Img variant="top" src={card4} />
      <Card.Body>
        <Card.Title>Customized Cakes</Card.Title>
       
      </Card.Body>
    </Card>
    </div>
    </div>

    </div>
  );
}

export default Mycard;
