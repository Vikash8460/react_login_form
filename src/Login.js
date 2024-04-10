import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import { AuthContext } from './context/AuthProvider'

import axios from './api/axios';
const LOGIN_URL = '/auth';

export const Login = () => {
    return (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="/home">Go to Home</a>
            </p>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Sign In</button>
            </form>
        </section>
        
    )
}

export default Login