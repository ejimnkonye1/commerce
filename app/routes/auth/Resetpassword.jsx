import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth'; // Import the necessary Firebase auth function
import { auth } from '../../Firebase'; // Import the Firebase auth object
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ResetPassword = () => {
  const [resetEmail, setResetEmail] = useState(''); // State for the email used in password reset
  const navigate = useNavigate(); // Initialize the navigate function

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, resetEmail) // Use sendPasswordResetEmail from Firebase auth
      .then(() => {
        // Password reset email sent successfully
        console.log('Password reset email sent');
        navigate('/reset-message'); // Use navigate to redirect to the reset-message route
      })
      .catch((error) => {
        // Handle errors
        console.error('Password reset error:', error);
      
      });
  };

  return (
    <div className="container mb-4 mt-3">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="reset-password-form p-4 border">
            <h2 className="mb-4">Reset Password</h2>
            <form>
              <div className="form-group">
                <label htmlFor="resetEmail">Username or email:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="resetEmail"
                  placeholder="Enter your username or email"
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>
            <div className='mt-3'>
            <button type="" onClick={handleResetPassword} className="btn btn-primary btn-block">
                Reset Password
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
