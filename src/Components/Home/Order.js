// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// function Order() {
    
//     const navigate = useNavigate();

//   const home = () => {
//     navigate('/');
//   };

//   const [address, setAddress] = useState({
//     firstName: '',
//     lastName: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     zipCode: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress(prevAddress => ({
//       ...prevAddress,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Update localStorage with form data
//     localStorage.setItem('user', JSON.stringify(formData));
  
//     // Clear form data
//     setAddress({
//       firstName: '',
//       lastName: '',
//       streetAddress: '',
//       city: '',
//       state: '',
//       zipCode: ''
//     });
  
//     // Optional: Navigate to home page after form submission
//     navigate('/');
  
//     // Show success message
//     alert('Address received successfully!');
//   };
  

//   return (
//     <form onSubmit={handleSubmit} className="mt-4 m-4">
//   <div className="mb-3">
//     <label htmlFor="firstName" className="form-label">First Name:</label>
//     <input type="text" className="form-control" id="firstName" name="firstName" value={address.firstName} onChange={handleChange} required />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="lastName" className="form-label">Last Name:</label>
//     <input type="text" className="form-control" id="lastName" name="lastName" value={address.lastName} onChange={handleChange} required />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="streetAddress" className="form-label">Street Address:</label>
//     <input type="text" className="form-control" id="streetAddress" name="streetAddress" value={address.streetAddress} onChange={handleChange} required />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="city" className="form-label">City:</label>
//     <input type="text" className="form-control" id="city" name="city" value={address.city} onChange={handleChange} required />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="state" className="form-label">State:</label>
//     <input type="text" className="form-control" id="state" name="state" value={address.state} onChange={handleChange} required />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="zipCode" className="form-label">Zip Code:</label>
//     <input type="text" className="form-control" id="zipCode" name="zipCode" value={address.zipCode} onChange={handleChange} required />
//   </div>
//   <button type="submit"  className="btn btn-primary">Submit</button>
// </form>

//   );
// }

// export default Order;


import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Order() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        setFormData({
            firstName: '',
            lastName: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ''
        });
        navigate('/');
        alert('Address received successfully!');
    };

    return (
        <div className="container">
            <h2 className="mt-4 mb-3">Address Form</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">Street Address:</label>
                    <input type="text" className="form-control" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State:</label>
                    <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip Code:</label>
                    <input type="text" className="form-control" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Order;