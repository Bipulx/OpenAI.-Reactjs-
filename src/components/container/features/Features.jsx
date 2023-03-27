import "./features.css"
import React from "react"


const Features = (props) => {
  return (
    <>
    <div className="gpt_features-container_feature">
      <div className="gpt_features-container_feature-title">
        <div></div>
      <h1>{props.title}</h1>
    
      </div>

    </div>

    <div className="gpt_features-container-text">
     <p>{props.text}</p> 
    </div>

    </>
  )
}

export default Features
