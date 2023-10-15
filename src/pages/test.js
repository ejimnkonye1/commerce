import React from "react";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Added loading state
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Set loading to true when the login button is clicked
      setIsLoading(true);
  
      // Simulate an API call (replace with your actual login logic)
      setTimeout(() => {
        // Simulate a successful login
        // In a real application, you would handle authentication and redirection here
        console.log('Login successful!');
        setIsLoading(false); // Set loading back to false
      }, 2000); // Simulating a 2-second login process
    };
  
    return (
      <div>
        <h2>Login</h2>
        {isLoading ? ( // Conditional rendering based on the loading state
          <div className="loader"></div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    );
  }
  export default Login;