import React from "react";
import toolImage1 from "../src/images/home1.jpg";
import toolImage2 from "./images/came2.jpeg";
import toolImage3 from "./images/4g car gps tracker.jpg"

import './styles/About.css';
function Tools() {
  return (
    <div className="container mt-4 ">
      
      <div className="row">
        
        
        <div className="col-md-4 col-lg-3 mb-4 ">
        <h5>Tutorials</h5>
        <div className="">
        <div className=" d-flex justify-content-center ">
          <img  src={toolImage2} className="" alt="Tool 1" style={{width: "50%"}} />
          </div>
          <div className="card-body">
          
          <p className="card-text">How to link to your phone</p>
          </div>
          </div>
        </div>
        
        <div className="col-md-4 col-lg-3 mb-4 ">
        <div className="">
        <div className=" d-flex justify-content-center">
          <img  src={toolImage2} className="" alt="Tool 1" style={{width: "50%"}} />
          </div>
          <div className="card-body">
          <p className="card-title">WIFI</p>
          <p className="card-text">Gps tracker gf09</p>
          </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 mb-4 ">
        <div className="">
        <div className="d-flex justify-content-center ">
          <img  src={toolImage2} className="" alt="Tool 1" style={{width: "50%"}} />
          </div>
          <div className="card-body">
          <p className="card-title">WIFI</p>
          <p className="card-text">Gps tracker gf09</p>
          </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3  mb-4 ">
        <div className="">
        <div className="d-flex justify-content-center ">
          <img  src={toolImage2} className="" alt="Tool 1" style={{width: "50%"}} />
          </div>
          <div className="card-body">
          <p className="card-title">WIFI</p>
          <p className="card-text">Gps tracker gf09</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
