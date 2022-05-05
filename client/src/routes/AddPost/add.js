import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./add.css";

function add() {
  return (
    <div className="form">
      <form>
        <h1>ADD POST</h1>
        <label>
          <img src="/src/assets/ambulance.jpg" 
          alt=""
          className="addImg" />
        </label>

        <label htmlFor="fileInput" className="add">
            <MdAddCircleOutline className="addIcon"/> ADD PICTURE
          </label>

          <input id="fileInput" type="file" style={{ display: "none" }} />
        <label>Title</label>
        <input type="text" placeholder="Name"></input>
        <label>Description</label>
        <textarea placeholder="Add a description"></textarea>
        <label>Categorie</label>
        <select id="BloodType" name="Blood">
          <option value="Car">Car</option>
          <option value="Accident">Accident</option>
          <option value="Health">Health</option>
          <option value="Discover">Discover</option>
          <option value="Nature">Nature</option>
          <option value="Weather">Weather</option>
          <option value="Crash">Crash</option>
          <option value="Help">Help</option>
        </select>

        <button className="button">ADD POST</button>
      </form>
    </div>
  );
}

export default add;
