import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Myprenav from './Myprenav';
import Mynavbar from './Mynavbar';
import Postnav from './Postnav';
import Mycarousel from './Mycarousel';
import Mycard from './Mycard';
import Bestselling from './Bestselling';
import Treatsoccasion from './Treatsoccasion';
import Delivery from './Delivery';
import Newsletter from './Newsletter';
import Myfotter from './Myfooter';



function App() {
  return (
    <div className="App">
     <Myprenav></Myprenav>
    <Mynavbar></Mynavbar>
    <Postnav></Postnav>
    <Mycarousel></Mycarousel>
    <Mycard></Mycard>
    <Bestselling></Bestselling>
    <Treatsoccasion></Treatsoccasion>
    <Delivery></Delivery>
    {/* some more elements here */}
    <Newsletter></Newsletter>
    <Myfotter></Myfotter>
    
    
    </div>
  );
}

export default App;
