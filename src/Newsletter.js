import Button from 'react-bootstrap/Button';


function Newsletter(){
    return(
        <div className="container-fluid">
            <div className="row text-center" id='newsletter'>
                <div className="">
                <h1>NEWSLETTER</h1>
                <p>Sign up to receive updates on new arrivals and special offers</p>
                </div>
                <div className="col-6 offset-3">
                    <form>
                        <input type="email" placeholder="your email here"></input>
                        <input type="submit" value="Subscribe" className='' varient='dark'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;