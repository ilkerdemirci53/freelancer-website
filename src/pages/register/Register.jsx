import React from "react";
import "./Register.scss";
import buyer from "../../../public/images/freelancer.jpg";
import freelancer from "../../../public/images/buyer.jpg";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="card">
          <div className="left">
            <div className="img">
              <img src={freelancer} alt="" />
            </div>
            <div className="text">
              <h2>I am a Seller!</h2>
              <Link to="/seller">
                <button>Register as a Seller</button>
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="img">
              <img src={buyer} alt="" />
            </div>
            <div className="text">
              <h2>I am a Buyer!</h2>
              <Link to="/buyer">
                <button>Register as a Buyer</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
