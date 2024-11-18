import Card from 'react-bootstrap/Card';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import d1 from './assets/d1.png';
import d2 from './assets/d2.png';
import d4 from './assets/d4.png';

function Delivery(){
    return(
        <div className='container-fluid text-center text-uppercase my-5' id='delivery'>
            <div className="row">
                <div>
                <h1>DELIVERY AND PICKUP OPTIONS</h1>
                <div id='lowbar'>
                _
                </div>
                <p>
DELIVERY AND PICKUP OPTIONS
We make it easy for you to get Cake Cafe Items, wherever you are. Order now for Delivery & Pickup, place an order to pickup at your local shop, or get in touch with our team to arrange custom catering for your next event.</p>
                
                </div>


                <div className="col-3 offset-2 mycards">
                <Card >
                <Card.Img variant="top" src={d1} />
                <Card.Body>
                    <Card.Title>EGATTUR</Card.Title>
                    <Card.Body><span><FaInstagram /></span><span><FaFacebook /></span><span><FaWhatsappSquare /></span></Card.Body>
                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-3 mycards">
                <Card >
                <Card.Img variant="top" src={d2} />
                <Card.Body>
                    <Card.Title>NAVALUR</Card.Title>
                    <Card.Body><span><FaInstagram /></span><span><FaFacebook /></span><span><FaWhatsappSquare /></span></Card.Body>

                    
                </Card.Body>
                </Card>
                </div>
                <div className="col-3 mycards">
                <Card >
                <Card.Img variant="top" src={d4} />
                <Card.Body>
                    <Card.Title>MADIPAKKAM</Card.Title>
                    <Card.Body><span><FaInstagram /></span><span><FaFacebook /></span><span><FaWhatsappSquare /></span></Card.Body>

                    
                </Card.Body>
                </Card>
                </div>
                </div>
            </div>
    )
}

export default Delivery;