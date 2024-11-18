import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import cake7 from './assets/cake7.jpg';
import cake9 from './assets/cake9.jpg';
import cake11 from './assets/cake11.jpg';
import cake12 from './assets/cake12.jpg';
import cake13 from './assets/cake13.jpg';

function Bestselling(){
    return(
        <div className="container-fluid" id='bestselling'>
            <div className='row'>
                <div className='col-6'>
                <h1>Best Selling</h1>
                <p>Surprise Your Loved Ones</p>
                </div>
                <div className='col-6 text-center'>
                    <Button variant='dark' size="lg">View All</Button>
                </div>
            </div>
            <div className="row">
                <div>
               
                </div>


                <div className="col-2 offset-1">
                <Card >
                <Card.Img variant="top" src={cake7} />
                <Card.Body>
                    <Card.Title className='cardhead'>Cookies & Cream Cake</Card.Title>
                    <Card.Body>Rs=900.00<br></br> inclusive of all taxes</Card.Body>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2">
                <Card >
                <Card.Img variant="top" src={cake9} />
                <Card.Body>
                    <Card.Title className='cardhead'>Lotus Biscoff Cake</Card.Title>
                    <Card.Body>Rs=1040.00<br></br> inclusive of all taxes</Card.Body>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2">
                <Card >
                <Card.Img variant="top" src={cake11} />
                <Card.Body>
                    <Card.Title className='cardhead'>Salted Caramel Cheesecake</Card.Title>
                    <Card.Body>Rs=1350.00<br></br> inclusive of all taxes</Card.Body>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2">
                <Card >
                <Card.Img variant="top" src={cake12} />
                <Card.Body>
                    <Card.Title className='cardhead'>Chocolate Truffle</Card.Title>
                    <Card.Body>Rs=900.00<br></br> inclusive of all taxes</Card.Body>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2">
                <Card >
                <Card.Img variant="top" src={cake13} />
                <Card.Body>
                    <Card.Title className='cardhead'>Mango Caramel Cake</Card.Title>
                    <Card.Body>Rs=900.00<br></br> inclusive of all taxes</Card.Body>
                    
                </Card.Body>
                </Card>
                </div>
            </div>

            <div className='row text-center'>
                    <div className='col-12 offset 5'>
                    <Button id='loadmore'>Load More</Button>

                    </div>
                </div>
        </div>
    )
}

export default Bestselling;