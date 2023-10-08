import React from 'react';

const PasswordResetSent = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="mt-5">
        <h2>Password Reset Email Sent</h2>
        <p>
          A password reset email has been sent to the email address on file for your account, but it may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset.
        </p>
      </div>
    </div>
  );
};

export default PasswordResetSent;
