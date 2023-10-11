import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import the necessary functions
import { auth } from '../Firebase'; // Import the Firebase auth object
import { Link, Navigate, useNavigate } from 'react-router-dom';
function MyAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function
  const [error, setError] = useState(null); // State variable for error message

  const validateForm = () => {
    // Get the values of email and password from state
    const emailValue = email.trim();
    const passwordValue = password.trim();
  
    // Define a regular expression pattern for a valid email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the email is valid
    const isEmailValid = emailPattern.test(emailValue);
  
    // Check if the password meets the minimum length requirement
    const isPasswordValid = passwordValue.length >= 8;
  
    // Update the state to indicate form validity
    setIsFormValid(isEmailValid && isPasswordValid);
  
    // Return true if the form is valid, otherwise false
    return isEmailValid && isPasswordValid;
  };
  
  // In your handleSignUp function, you can use validateForm like this:
  
  const handleSignUp = (e) => {
    e.preventDefault();
  
    // Perform client-side validation
    const isFormValid = validateForm();
  
    if (isFormValid) {
      // Form is valid, proceed with registration
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User signed up:', user);
          navigate('/dashboard');
        })
        .catch((error) => {
          console.error('Sign-up error:', error);
          setError(error.message); // Set the error message
        });
    }
  };
  

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    signInWithEmailAndPassword(auth, email, password) // Use signInWithEmailAndPassword from auth
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log('User signed in:', user);
        navigate('/dashboard');

      })
      .catch((error) => {
        // Handle errors
        console.error('Sign-in error:', error);
        setError(error.message); // Set the error message
      });
  };

  return (
    <div className="container mb-5">
      {/* Your account page content */}
      
      <div className="row mt-5">
        <h5 className="mt-3"> <strong>MY Account</strong></h5>
        {error && <div className=" container alert alert-danger">{error}</div>} {/* Display error message */}
        <div className="col-md-6 mt-5">
          
          <div className="login-form p-4 border">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  name="email" // Add name attribute
                  className="form-control form-control-sm"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password" // Add name attribute
                  className="form-control form-control-sm"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div> */}
              <div className='mt-3'>
              <button type="submit"  className="btn btn-primary btn-block mb-3">
                Login
              </button>
              </div>
           
            </form>
            <div className="text-center mt-3">
              <Link style={{textDecoration:'none'}} to="/reset-password">Lost your password?</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <div className="signup-form p-4 border">
            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  name="email" // Add name attribute
                  className="form-control form-control-sm"
                  id="email"
                
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password" // Add name attribute
                  className="form-control form-control-sm"
                  id="password"
                  placeholder="Enter your password"
                  required  
                  minLength={'8'}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  I agree with the <a style={{ textDecoration: "none" }} href="#">privacy policy</a>.
                </label>
              </div> */}
              <div className="mt-3">
              <button
               type="submit"
                className="btn btn-success btn-block mb-4">
                Register
               </button>

              </div>
         
            </form>
            <div className="text-center mt-3">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
