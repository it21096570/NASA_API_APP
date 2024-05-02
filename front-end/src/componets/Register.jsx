import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend with registration data
      const response = await axios.post('http://localhost:8081/user/register', {
        name,
        email,
        password,
      });

      console.log(response);

      // If the registration is successful
      if (response.status === 201) {
        toast.success('User registered successfully!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;

        // Check for different error scenarios
        if (statusCode === 400) {
          toast.error(error.response.data.error);
        } else if (statusCode === 409) {
          toast.error();
        } else {
          toast.error('An error occurred during registration.');
        }
      } else {
        toast.error('Network error. Please try again.');
      }
    }
  };

  return (
    <div className="outer-container">
      <div className="login-container">
        <h2>REGISTER</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <button
            style={{ backgroundColor: '#101718', marginTop: '5px' }}
            onClick={() => navigate('/')}
            className="register"
          >
            Already Registered
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register
