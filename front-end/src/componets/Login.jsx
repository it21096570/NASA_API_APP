import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate(); // Navigation hook

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the backend with registration data
            const response = await axios.post('https://nasa-api-app.onrender.com/user/login', {
                email,
                password,
            });

            console.log(response);

            // If the registration is successful
            if (response.status === 200) {
                toast.success('User login successfully!');
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                const statusCode = error.response.status;

                // Check for different error scenarios
                if (statusCode === 400) {
                    toast.error(error.response.data.error);
                } else if (statusCode === 401) {
                    toast.error('Invalid username or password');
                } else {
                    toast.error('An error occurred during login.');
                }
            } else {
                toast.error('Network error. Please try again.');
            }
        }
    };

    const register = () => {
        navigate('/register');
    };

    return (
        <div className="outer-container">

            <div className="login-container">
                <h2>LOGIN</h2>

                <form>
                    <input type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleLogin}>Login</button>
                    <button style={{ backgroundColor: '#1709d8', marginTop: '5px' }} onClick={register} className="register">Register</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
