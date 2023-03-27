import "./possible.css"
import React from "react"
import possibilityImg from  "../../../assets/possibility.png"

const Possible = () => {
  return (
    <div className="gpt_possibility section_padding " id="possibility">
      <div className="gpt_possibility-image">
        <img src={possibilityImg} alt="" />
      </div>
      <div className="gpt_possibility-content">
        <h4>Request early acess to get started</h4>
        <h1 className="gradient_text">The page are beyond
          Your Imagination
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint iste tenetur facere optio repellendus laboriosam aliquid odio perspiciatis nihil quia.</p>
        <h4>Request early acess to get started</h4>
      </div>
    </div>
  )
}

export default Possible
