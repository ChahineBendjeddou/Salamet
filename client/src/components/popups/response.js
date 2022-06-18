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
