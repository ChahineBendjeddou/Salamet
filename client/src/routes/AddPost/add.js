import React, { useEffect } from "react";
import "./add.css";
import addImg from '../../components/popups/addImage'
import '../../components/popups/addImage.css'

function Add() {
  useEffect(() => {
    addImg()
  }, [])
  return (
    <div className="form">
      <form method="post" action='/addBlog' enctype="multipart/form-data">
        <h1>ADD POST</h1>
        <label>
          <img src='https://res.cloudinary.com/chahineyelpcamp/image/upload/q_auto:low/v1655509848/Salamet/ambulance_xegenw.jpg'
            alt=""
            className="addImg" />
        </label>
        <label for='title'>Title</label>
        <input type="text" id='title' name='blog[title]' placeholder="title" required></input>
        <label for='description'>Description</label>
        <textarea placeholder="Add a description" id='description' name='blog[body]' required></textarea>
        <label>Categorie</label>
        <select id="BlogType" name="blog[type]" required>
          <option value="Car">Car</option>
          <option value="Accident">Accident</option>
          <option value="Health">Health</option>
          <option value="Discover">Discover</option>
          <option value="Nature">Nature</option>
          <option value="Weather">Weather</option>
          <option value="Crash">Crash</option>
          <option value="Help">Help</option>
        </select>
        <input id="fileInput" accept="image/*" type="file" style={{ display: "none" }} name='images' multiple />
        <div className="images" id='images'>
          <div className="pic" name='pic'>add Picture</div>
        </div>

        <button className="button">ADD POST</button>
      </form>
    </div>
  );
}

export default Add;
