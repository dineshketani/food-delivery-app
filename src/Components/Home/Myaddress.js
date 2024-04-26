import React from 'react'
import Navbar from '../Navbar/Navbar'

function Myaddress() {
    const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <Navbar/>
        <div className='p-1'>
       <h1 className='text-center'>Delivery Address</h1>
       <div className='my-5 '>{userData && <h3 className='text-secondary'>First Name = {userData.firstName}</h3>}</div>

      <div className='my-5'>{userData && <h3 className='text-secondary'>Last Name = {userData.lastName}</h3>}</div>
       <div className='my-5'>{userData && <h3 className='text-secondary'>Street = {userData.streetAddress}</h3>}</div>

       <div className='my-5 '>{userData && <h3 className='text-secondary'>City = {userData.city}</h3>}</div>

      <div className='my-5'>{userData && <h3 className='text-secondary'>State = {userData.state}</h3>}</div>
       <div className='my-5'>{userData && <h3 className='text-secondary'>Zip Code = {userData.zipCode}</h3>}</div>
       </div>
    </div>
  )
}

export default Myaddress