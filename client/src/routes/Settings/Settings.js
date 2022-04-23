import "./Settings.css";
import { FaUserCircle } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
          <Navbar />
        <form className="settingsForm">
        <h1>UPDATE YOUR PROFILE </h1>
        <FaUserCircle className="user"/>
          <div className="settingsPP">
       
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Name</label>
          <input type="text" placeholder="Salamat" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Salamat@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
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
          <div className="buttons">
          <button className="btn" type="submit">
            UPDATE
          </button>
          <button className="btn" type="submit">
             DELETE
          </button>
          </div>
        
        </form>
      </div>
     
    </div>
   
  );
}