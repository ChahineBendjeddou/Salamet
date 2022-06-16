import React, { useEffect } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./add.css";
import Ambulance from '../../assets/ambulance.jpg'
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
          <img src={Ambulance}
            alt=""
            className="addImg" />
        </label>

        {/* <label htmlFor="fileInput" className="add">
          <MdAddCircleOutline className="addIcon" /> ADD PICTURE
        </label>

        <input id="fileInput" type="file" style={{ display: "none" }} /> */}
        <label for='title'>Title</label>
        <input type="text" id='title' name='title' placeholder="title"></input>
        <label for='description'>Description</label>
        <textarea placeholder="Add a description" id='description' name='description'></textarea>
        <label>Categorie</label>
        <select id="BlogType" name="BlogType">
          <option value="Car">Car</option>
          <option value="Accident">Accident</option>
          <option value="Health">Health</option>
          <option value="Discover">Discover</option>
          <option value="Nature">Nature</option>
          <option value="Weather">Weather</option>
          <option value="Crash">Crash</option>
          <option value="Help">Help</option>
        </select>
        <input id="fileInput" accept="image/*" type="file" style={{ display: "none" }} enctype="multipart/form-data" />
        <div className="images" id='images'>
          <div className="pic" >add Picture</div>
        </div>

        <button className="button">ADD POST</button>
      </form>
    </div>
  );
}

export default Add;
