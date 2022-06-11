import React from 'react'
import './popup.css'
import "../../routes/AddPost/add.css"
import { MdAddCircleOutline } from "react-icons/md";
import ambulance from '../../assets/ambulance.jpg'

function popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}> X </button>
        {props.children}

        <div className="form">
          <form>
            <h1>REPORT AN ACCIDENT</h1>
            <label>
              <img src={ambulance}
                alt=""
                className="addImg" />
            </label>

            <label htmlFor="fileInput" className="add">
              <MdAddCircleOutline className="addIcon" /> ADD PICTURE
            </label>

            <input id="fileInput" type="file" style={{ display: "none" }} />
            <label>Description</label>
            <textarea placeholder="Add a description"></textarea>

            <button className="button">SEND</button>
          </form>
        </div>
      </div>
    </div>
  ) : "";
}

export default popup