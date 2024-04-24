

import React from 'react'
// import Navbar from './Navbar';
import Navbar from '../Navbar/Navbar';

function Myprofile() {
    const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
        <Navbar/>
        <div className='p-5'>
       <h1>USER INFORMATION</h1>
       <div className='my-5 '>{userData && <h3 className='text-secondary'>Name = {userData.name}</h3>}</div>

      <div className='my-5'>{userData && <h3 className='text-secondary'>Email = {userData.Email}</h3>}</div>
       <div className='my-5'>{userData && <h3 className='text-secondary'>Phone Number = {userData.Mobile}</h3>}</div>
       </div>
    </div>
  )
}

export default Myprofile