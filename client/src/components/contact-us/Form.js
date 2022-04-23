import React from "react";
import { Link } from "react-router-dom";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <h1>Register</h1>
        <label>Name</label>
        <input type="text" placeholder="Name"></input>
        <label>Email</label>
        <input type="email" placeholder="Email"></input>
        <label>Phone number</label>
        <input type="text" placeholder="Phone number"></input>
        <label>Blood Type</label>
        <select id="BloodType" name="Blood">
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <label>Password</label>
        <input type="password" placeholder="Password"></input>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password"></input>
        <button className="btn">Submit</button>
        <div className="question">
          <Link to="/LogIn">
            Already have an account ?<span> Click here</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;