import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import logo from './assets/cake-cafe-logo.png';
import f1 from './assets/f1.webp';
import f2 from './assets/f2.webp';
import f3 from './assets/f3.webp';
import f4 from './assets/f4.webp';
import f5 from './assets/f5.webp';
import f6 from './assets/f6.webp';


function Myfotter(){
    return(
        <div className="container-fluid py-5" id="myfooter">
            {/* row 1 of 3 */}
            <div className="row">
                <div className="col-3 offset-1">
                
                Head Office<br></br><br></br>
                (Central Kitchen - Madipakkam)<br></br>
                No. 01/1563, Gandhi Nagar, Madipakkam, Chennai 600091<br></br>
                ad.kyscafe@gmail.com<br></br><br></br>

                Ph: +91 98765 43210
                
                </div>
                <div className="col-4 ">
                
                Have a question?<br></br><br></br>
                We're always here to lend a helping hand.<br></br>
                Customer Support Team hours are Monday-Sunday, 10 AM - 7 PM IST<br></br><br></br>

                CONTACT US<br></br>
                <span><FaInstagram /></span><span><FaFacebook /></span><span><FaWhatsappSquare /></span>
                
                </div>
                <div className="col-3">
                   
                    Policy<br></br><br></br>
                    
                    Shipping Policy<br></br>
                    Terms & Conditions<br></br>
                    Privacy Policy<br></br>
                    Cancellation & Return Policy<br></br>
                   
                </div>
            </div>

            {/* row 2 of 3 */}
            <div className="row text-center">
                <div className="col-12">
                    <img src={logo}></img>
                    <p>since 2024</p>
                </div>
            </div>

            {/* row 3 of 3 */}
            <div className="row text-center" id="footer3">
                <div className="col-10 offset-1">
                Top Searches:  <br></br><br></br>

            Cake shop in Chennai, Cake shop near me, Order cake online, Cake shop in Madipakkam, Order custom cakes, Nickys Cafe, Nicky's, Cake shop in Navalur, Cake shop in Chromepet, Order Wedding cakes, cakes for girls, Order cakes for boys, cakes for kids, cakes for anniversary, order birthday cake online, Order Pastry Online, Order cakes in Egattur
            <hr></hr>

            We accept the following paying methods<br></br><br></br>

            <img src={f1}></img>
            <img src={f2}></img>
            <img src={f3}></img>
            <img src={f4}></img>
            <img src={f5}></img>
            <img src={f6}></img> <br></br>


            © 2024  - Cake Cafe. Inspired by Nicky's Cafe & Fine Pastries. Developed by Hatishwar Singh
                </div>
            </div>
        </div>
    )
}

export default Myfotter;
