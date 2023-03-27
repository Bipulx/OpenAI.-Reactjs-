import "./gpt.css"
import React from "react"
import Features from "../../../components/container/features/Features"

const Gpt = () => {
  return (
    <div className="gpt_whatgpt section_margin" id="whatgpt">
      <div className="gpt_whatgpt-features">
    <Features title="What is GPT-3" text="we so opimion friends me message as delighht.
    we front do With the capabilities of GPT-3 (from OpenAI), 
    he shared a sample of what he was able to create: a Figma plugin (called 'Designer') that has the ability to ."/>
      </div>
      <div className="gpt_whatgpt-heading">
        <h1 className="gradient_text">
          The Possibilites are beyond <br />
          Your imagination
        </h1>
        <p>Explore <br /> The Library</p>
      </div>
      <div className="gpt_whatgpt-container">
    <Features title="Chatbots" text ="Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Provident veniam libero aspernatur fuga suscipit veritatis atque et a labore aliquam"/>
    <Features title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit
    . Provident veniam libero aspernatur fuga suscipit veritatis atque et a labore aliquam"/>
    <Features title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Provident veniam libero aspernatur fuga suscipit veritatis atque et a labore aliquam"/>
      </div>
    </div>
  )
}

export default Gpt
