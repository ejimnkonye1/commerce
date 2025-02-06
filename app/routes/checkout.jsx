// BillingAddressForm.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BillingAddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="container">
         <form >
      <div className="row">
        <div className="col-md-8  p-3 mt-5">
        <div className="card">
    <div className="card-body">
            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                 
                  required
                />
                <div className="invalid-feedback">{formErrors.firstName}</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  
                  required
                />
                <div className="invalid-feedback">{formErrors.lastName}</div>
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                 
                  required
                />
                <div className="invalid-feedback">{formErrors.email}</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="number" className="form-label">
                  Number
                </label>
                <input
                  type="number"
                  className={`form-control ${formErrors.number ? 'is-invalid' : ''}`}
                  id="number"
                  name="number"
                  value={formData.number}
              
                  required
                />
                <div className="invalid-feedback">{formErrors.number}</div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                id="address"
                name="address"
                value={formData.address}
            
                required
              />
              <div className="invalid-feedback">{formErrors.address}</div>
            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
                  id="city"
                  name="city"
                  value={formData.city}
                 
                  required
                />
                <div className="invalid-feedback">{formErrors.city}</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.state ? 'is-invalid' : ''}`}
                  id="state"
                  name="state"
                  value={formData.state}
                 
                  required
                />
                <div className="invalid-feedback">{formErrors.state}</div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="zip" className="form-label">
                ZIP Code
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.zip ? 'is-invalid' : ''}`}
                id="zip"
                name="zip"
                value={formData.zip}
              
                required
              />
              <div className="invalid-feedback">{formErrors.zip}</div>
            </div>

           </div>
           </div>
          
        </div>
         <div className="col-md-4 p-3 mt-5">
  <div className="card">
    <div className="card-body">
   
      
     
    

        <div className="">
          <button type="submit"  className="btn btn-primary payment float-right mt-3">
            Palce Order
          </button>
        </div>
        <div className="">
         
          <button type="button"   className="btn btn-danger payment float-right mt-3">
            Continue Shopping
          </button>
          
        </div>
    </div>
  </div>
</div>
       
      </div>
</form>
    </div>
  );
};

export default BillingAddressForm;