import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import bg from '../../images/bg.png';


const LoginPage = () =>
{
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try
        {
            // Send login request to the backend API
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (response.ok)
            {
                const id  = responseData.user.id; // Extract the userId and token from the response data
                console.log(responseData);
                localStorage.setItem('userId', id); // Save the userId to localStorage
                // localStorage.setItem('token', token); // Save the token to localStorage
                // Login successful
                console.log('Login successful:', responseData);
                // Redirect to the dashboard or perform any other actions
                Navigate('/dashboard')
            } else
            {
                // Login failed
                const errorData = responseData;
                console.log('Login failed:', errorData.message);

                // Display the error message
                setErrorMessage(errorData.message);
            }
        } catch (error)
        {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='login-main'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}>
            <h2>Doheney.</h2>
           <div className='text-sec'>
                <h1>Introducing Global<br />Payroll you can run <br />in your sleep</h1>
                <p>Pay Team members hired through your own<br/> entities in 90+ countries with Global payroll</p>
                <h3>Learn more -&gt;</h3>
            </div>
            <form onSubmit={handleSubmit} className='login-form'>
                <h3>Login</h3>
             {errorMessage && <p>{errorMessage}</p>}
                <label>
                    Email:
                    <input
                        type="text"
                        placeholder='Enter your email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        placeholder='Enter your password'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Log In</button>
                </form>
        </div>
    );
};

export default LoginPage;
