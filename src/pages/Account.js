import React from "react";

function MyAccount() {
  return (
    <div className="container">
        
        <div className="row mt-5">
        <h5 className="mt-3"> <strong>MY Account</strong></h5>
        <div className="col-md-6 mt-5">
    <div className="login-form   p-4 border">
    <h2 className="mb-4">Login</h2>
    <form>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          className="form-control form-control-sm"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control form-control-sm"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Login
      </button>
    </form>
    <div className="text-center mt-3">
      <a href="/forgot-password">Lost your password?</a>
    </div>
  </div>
</div>

<div className="col-md-6 mt-5">
  <div className="signup-form  p-4 border">
      <h2 className="mb-4">Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control form-control-sm"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          I agree with the <a style={{textDecoration: "none"}} href="#">privacy policy</a>.
        </label>
      </div>
        
    <div className=" ">
        <button type="submit" className="btn btn-success btn-block ">
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
