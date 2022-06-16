import React, { useEffect } from 'react'
import './popup.css'
import "../../routes/AddPost/add.css"
import './addImage.css'
import ambulance from '../../assets/ambulance.jpg'
import addImg from './addImage'
function Popup(props) {

  useEffect(() => {
    addImg()
  }, [])

  // return (props.trigger) ? (
  return (
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
            <label>Phone number</label>
            <input type="text" id='phone' name='phone' required placeholder="Phone number"></input>
            <label>Description</label>
            <textarea placeholder="Add a description"></textarea>
            <input id="fileInput" accept="image/*" type="file" style={{ display: "none" }} />
            <div className="images" id='images'>
              <div className="pic" >add Picture</div>
            </div>
            <button className="button" >SEND</button>
          </form>
        </div>
      </div>

    </div>
  )
  // : "";

}

export default Popup