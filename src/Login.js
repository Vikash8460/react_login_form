import React from 'react'

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