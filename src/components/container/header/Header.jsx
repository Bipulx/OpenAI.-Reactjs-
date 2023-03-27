import "./header.css"
import React from "react"
import people from "../../../assets/people.png"
import ai from "../../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt_header section_padding" id="home">
      <div className="gpt_header-content">
        <h1 className="gradient_text">
          Let's Build Something
          amezing With Gpt-3 
          Open AI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus est itaque adipisci, nam earum!</p>
        <div className="gpt_header-content_input">
          <input type="email" placeholder="your email adress" />
          <button>Get Started</button>
        </div>
        <div className="gpt_header-content_people">
          <img src={people} alt="" />
          <p>1000 people requested acess a visit in last 24 hours</p>
          
        </div>
        
      </div>
      <div className="gpt_header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  )
}

export default Header
