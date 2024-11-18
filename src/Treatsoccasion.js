import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ca1 from './assets/ca1.jpg';
import cak2 from './assets/cak2.jpg';
import cak3 from './assets/cak3.jpg';
import cak4 from './assets/cak4.jpg';
import ca5 from './assets/ca5.jpg';
function Treatsoccasion(){
    return(
        <div className='container-fluid text-center text-uppercase my-5'>
            <div className="row">
                <div className='my-5'>
                <div>
                <h1>TREATS FOR ANY OCCASION</h1>
                <p>Cake Cafe & Fine Pastries prides itself on using the finest ingredients in all of our items.</p>
                </div>
                </div>


                <div className="col-2 offset-1">
                <Card >
                <Card.Img variant="top" src={ca1} />
                <Card.Body>
                    <Card.Title>PHOTOSHEET CAKES</Card.Title>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2 ">
                <Card >
                <Card.Img variant="top" src={cak2} />
                <Card.Body>
                    <Card.Title>WEDDING CAKES</Card.Title>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2 ">
                <Card >
                <Card.Img variant="top" src={cak3} />
                <Card.Body>
                    <Card.Title>BIRTHDAY CAKES</Card.Title>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2 ">
                <Card >
                <Card.Img variant="top" src={cak4} />
                <Card.Body>
                    <Card.Title>CAKE FOR BOYS</Card.Title>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-2 ">
                <Card >
                <Card.Img variant="top" src={ca5} />
                <Card.Body>
                    <Card.Title>CAKE FOR GIRLS</Card.Title>
                    
                </Card.Body>
                </Card>
                </div>
                </div>

               
                </div>

    )

}

export default Treatsoccasion;