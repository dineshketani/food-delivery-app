import React from 'react'
// import Nav from './navabout';
import './Navbar.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
// import img1 from './Users/apple/Desktop/my-new-react-app/src/components1/Navbar';

function Foot() {
  return (
    <div>
        {/* <img className='w-100' src={img1}/> */}
      <footer className='bg-body-tertiary m-auto text-center foot w-100  p-3'>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><FaFacebookF />FaceBook</span></a>
        <a className='aa' target="_blank" href='https://www.instagram.com/flipkart/?hl=en'><span><FaInstagram />Instagram</span></a>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><IoMdGlobe />Website</span></a>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><BsTwitterX /> X</span></a>
      </footer>
    </div>
  )
}

export default Foot;