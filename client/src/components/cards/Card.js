import React from 'react'
import './Card.css'
function Card({title, imageUrl, body, more}) {
  return (
    <div className="card-container">

       <div className="image-container">
         <img src={imageUrl} alt=''/>
       </div>

       <div className="card-title">
        <h3>{title}</h3>
       </div>

       <div className="card-body">
        <p> {body} <br />  <span> {more} </span> </p>  
       
       </div>

    </div>
  )
}

export default Card