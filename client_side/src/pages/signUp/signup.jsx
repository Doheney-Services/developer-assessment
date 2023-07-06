import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'
const SignupPage = () =>
{
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullname:'',
    });
    const [successMessage, setSuccessMessage] = useState('');
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
            // Send signup request to the backend API
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok)
            {
                // Signup successful
                const userData = await response.json();
                console.log('Signup successful:', userData);
                setSuccessMessage('Signup successful. Redirecting to login page..');
                // Redirect to the login page or perform any other actions

                setTimeout(() =>
                {
                    Navigate('/login');
                }, 3000);
            } else
            {
                // Signup failed
                const errorData = await response.json();
                console.log('Signup failed:', errorData.message);
                setErrorMessage('Please input fields to sign up')
            }
        } catch (error)
        {
            console.error('Error during signup:', error);
        }
    };

    return (
        <React.Fragment >
            <div className='main-div'>
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit} className='form'>
                    {errorMessage && <span>{errorMessage}</span>}
                    {successMessage && <p>{successMessage}</p>}
                    <label>
                        fullname:
                        <input
                            type="text"
                            placeholder='Enter your fullname'
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        email:
                        <input
                            type="text"
                            placeholder='Enter a valid email'
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
                            placeholder='Enter a password'
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button type="submit" className='btn01'>Sign Up</button>
                    <br />
                    <button type='button' className='btn02' onClick={() => Navigate('/login')}>Login</button>

                </form>
            </div>
        </React.Fragment>
    );
};

export default SignupPage;
