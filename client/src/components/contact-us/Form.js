import React from "react";
import { Link } from "react-router-dom";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form action='/register' method='post'>
        <h1>Register</h1>
        <label for='firstname'>FirstName</label>
        <input type="text" id='firstname' name='firstname' required placeholder="FirstName"></input>
        <label for='lastname'>LastName</label>
        <input type="text" id='lastname' name='lastname' required placeholder="LastName"></input>
        <label for='username'>Username</label>
        <input type="text" id='username' name='username' required placeholder="UserName"></input>
        <label for='email'>Email</label>
        <input type="email" id='email' name='email' required placeholder="Email"></input>
        <label for='phone'>Phone number</label>
        <input type="text" id='phone' name='phone' required placeholder="Phone number"></input>
        <label for='bloodType'>Blood Type</label>
        <select id="bloodType" name="bloodType" required>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <label for='password'>Password</label>
        <input type="password" id='password' name='password' required placeholder="Password"></input>
        {/* <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password"></input> */}
        <button className="btn">Register</button>
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