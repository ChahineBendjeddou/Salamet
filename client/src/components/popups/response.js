import React from 'react'
import "./response.css"

function response(props) {
  return (props.trigger) ? (
    <div className="response">
        <div className="response-inner">
            <button className="close-response">X</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default response
/*
import { useState } from 'react'

 const [buttonPopup, setButtonPopup]=  useState(false);
yn7at dakhl button
onClick={()=> setButtonPopup(true)} 

<Response trigger={buttonPopup} setTrigger={setButtonPopup}>
<h2>Request send !</h2>
</Response> */