import React, { useState,useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button } from 'react-bootstrap';
import Mycontext from '../../context/UserState';
const Registration = () => {
    const { isLoggedIn, setLoggedIn,userId,setUserId} = useContext(Mycontext);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        comfirm_password:''
    });
    const [confirmPassword,setConfirmPassword]= useState('');
    const [passwordError, setPasswordError] = useState('');
    const onHandleChange = (e) => {
        console.log('isLoggedIn'+isLoggedIn);
        console.log('isLoggedIn'+userId);
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };
    const checkConfirmPassword=()=>{
        if(confirmPassword!=userData.password)
        {
            setPasswordError("Password Not mathched!");
            console.log("Password Not mathched!");
        }else{
            setPasswordError('')
        }
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        if (userData.password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        try {
            // // Fetch existing user data
            // const existingUsers = await axios.get('http://localhost:3000/comments');

            // // Append the new user to the existing array
            // const updatedUsers = [...existingUsers.data, userData];

            // Update the "user" array on the server
           const response =  await axios.post('http://localhost:3000/user', userData);
            setLoggedIn(true);
            setUserId(response.data.id);
            console.log('User registered successfully!');
            console.log(response.data.id);
        } catch (error) {
            console.log('Error registering user:', error);
        }
    };

    return (
        <div className='container'>
            <h1>Registration!</h1>
            <Form onSubmit={onSubmitChange}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={onHandleChange}  placeholder='Name'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={onHandleChange} placeholder='Email'/> 
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" name="phone" onChange={onHandleChange} placeholder='Phone'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={onHandleChange}  placeholder='password'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="comfirm_password" onChange={(e)=>setConfirmPassword(e.target.value)} onBlur={checkConfirmPassword} placeholder='Confirm Password' /> 
                    <Form.Label>{passwordError && <span className="error-message">{passwordError}</span>}</Form.Label>
                </Form.Group>
    
                <Button type="submit" variant="primary">Register</Button>
            </Form>
        </div>
    );
};

export default Registration;
