
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Register/Login';
import Register from './Components/Register/Register';
import Myprofile from './Components/Register/Myprofile';
import Props from './Components/Home/Props';
import Biriyani from './Components/Home/Biriyani';
import Northindian from './Components/Home/Northindian';
import Chines from './Components/Home/Chines';
import Southindian from './Components/Home/Southindian';
import Order from './Components/Home/Order';
import Myaddress from './Components/Home/Myaddress';
import ProductDetail from './Components/Home/Item';

function App() {
  return (
    <div>

      <Router>
          
          {/* <Navbar /> */}
          <Routes>
              <Route path="/" element={<Home/>} />
              {/* <Route path="/about" element={<About/>} /> */}
              {/* <Route path='/service' element={<div>404 NOT FOUND</div>}/> */}
              <Route path='/login'  element={<Login/>}/>
              {/* <Route path="/donateus" element={<Contact/>}/> */}
              <Route path='/register' element={<Register/>} />
              <Route path='/myprofile' element={<Myprofile/>}/>
              <Route path='/props.links/:valuesId' element={<ProductDetail/>}/>
              <Route path='/props' element={<Props/>}/>
              <Route path='/myprofile' element={<Myprofile/>}/>
              <Route path='/biriyani' element={<Biriyani/>}/>
              <Route path='/northindian' element={<Northindian/>}/>
              <Route path='/chines' element={<Chines/>}/>
              <Route path='/southindia' element={<Southindian/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='/myaddress' element={<Myaddress/>}/>
              
              
              
          </Routes>
    
  </Router>
    
      </div>
  );
}

export default App;
