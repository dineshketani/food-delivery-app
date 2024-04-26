import React,{ useState} from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import values from '../Home/Data';
import { FaCrown } from "react-icons/fa6";

function Navbar() {

  const[search, setSearch] = useState("");

const userData = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const divStyle = {
    color: '#FFD700',
    size: '25px',
  };

    const home = () => {
        navigate('/');
    };

    const handleLoginClick = () => {
      navigate('/register');
  };

    const handleClick = () => {
      navigate('/login');
  };
  const myprofile = () => {
    navigate('/myprofile');
};
const myaddress = () => {
  navigate('/myaddress');
};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height: "60px"}}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"><IoRestaurant className='logoo' /></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
             

             
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle logogo" onClick={home} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <IoRestaurant className='logoo' />
              </a>
              <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={myprofile} href="#">{userData ? userData.name : 'MyProfile'}</a></li>
                <li><a className="dropdown-item" onClick={myaddress} href="#">Address</a></li>
                {/* <li><a className="dropdown-item" href="#">Home</a></li> */}
                <li><a className="dropdown-item" onClick={handleLoginClick}  href="#">New User</a></li>
                <li><a className="dropdown-item" onClick={handleClick} href="#">Log Out</a></li>
                <li><a className="dropdown-item" href="#">Hungry Hub Gold<FaCrown  style={divStyle}/></a></li>

                
              </ul>
            </li>
            


          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" value={search} placeholder="Search" aria-label="Search"
              onChange={(e) => setSearch(e.target.value) }/>
             <div className="template_Container">
          { 
            
              values.filter(values => values.h.toLowerCase().includes(search.toLowerCase())).map((values) => {
                return(
                  <div className="template" key={values.h}>
                      {/* <img src={values.imgsrc} alt="" />
                      <h3>{values.h}</h3>
                      <p className="price">${values.rate}</p> */}
                  </div> 
                )
              })
          } 
         </div>
            <button className="btn btn-outline-success" type="search">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;