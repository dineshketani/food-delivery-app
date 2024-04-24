
// import React, { useState } from "react";
// import Navbar from "./navbar";

// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        Mobile: '',
        Email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.table("Registration Successful", formData);

        // Save form data to localStorage
        localStorage.setItem('user', JSON.stringify(formData));

        // Clear form data
        setFormData({
            name: "",
            Mobile: "",
            Email: "",
            password: "",
        });

        // Display alert for successful registration
        alert("Registration Successful");

        // Navigate to the login page
        navigate("/login");
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <div className="border w-25 mt-5 m-auto p-3">
                <h1 className="text-secondary text-center">Register Page</h1>
                <div className="mt-3">
                    <label>Name:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='name'
                        placeholder='Enter your Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3">
                    <label>Mobile:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='Mobile'
                        placeholder='Enter your Mobile Number'
                        value={formData.Mobile}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3">
                    <label>Email:</label>
                    <input
                        type='email'
                        className="form-control"
                        name='Email'
                        placeholder='Enter your email'
                        value={formData.Email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3">
                    <label>Password:</label>
                    <input
                        type='password'
                        className="form-control"
                        name='password'
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="btn btn-secondary w-100 mt-3" onClick={handleSubmit}>Register</button>
                </div>
                <p className="text-center mt-2">or</p>
                <div>
                    <button className="btn btn-primary w-100" onClick={handleLoginClick}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Register;