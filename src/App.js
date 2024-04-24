
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Register/Login';
import Register from './Components/Register/Register';
import Myprofile from './Components/Register/Myprofile';

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
              {/* <Route path='/home' element={<Ho/>} />
              <Route path='/newlaunch' element={<NL/>} />
              <Route path='/products' element={<Products/>}/>
              <Route path='/contactus' element={<ContactUs/>}/>
              <Route path='/service' element={<Serv/>}/> */}
              <Route path='/myprofile' element={<Myprofile/>}/>
              
              
              
          </Routes>
    
  </Router>
    
      </div>
  );
}

export default App;
