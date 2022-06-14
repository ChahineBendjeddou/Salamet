import React from 'react'
import './popup.css'
import "../../routes/AddPost/add.css"
import { MdAddCircleOutline } from "react-icons/md";
import ambulance from '../../assets/ambulance.jpg'

function Popup(props) {

  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}> X </button>
        {props.children}

        <div className="form">
          <form>
            <h1>REPORT AN ACCIDENT</h1>
            <label>
              <img
                src={ambulance}
                id='image'
                alt=""
                className="addImg" />
            </label>

            <label htmlFor="fileInput" className="add">
              <MdAddCircleOutline className="addIcon" /> ADD PICTURE
            </label>

            <input id="fileInput" accept="image/*" type="file" onchange={(e) => {
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                document.querySelector('#image').style.backgroundImage = `url(${reader.result})`;
                // const image = document.getElementById('image');
                // image.src = URL.createObjectURL(reader.result);
              }
              )
              reader.readAsDataURL(this.files[0])
            }}
              style={{ display: "none" }} />
            <label>Phone number</label>
            <input type="text" id='phone' name='phone' required placeholder="Phone number"></input>
            <label>Description</label>
            <textarea placeholder="Add a description"></textarea>

            <button className="button" >SEND</button>
          
          </form>
        </div>
      </div>
    </div>
  ) : "";
}

export default Popup