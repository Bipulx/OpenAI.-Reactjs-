import "./Feature.css"
import React from "react"
import Features from "../../components/container/features/Features"
const featuredata =[
  {
    title: 'improving and distributes instantly',
    text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, natus open is a dangeroues for our job'
  },
   {
    title: 'Become the tended active',
    text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, natus open is a dangeroues for our job'
  },
   {
    title: 'message or am nothing',
    text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, natus open is a dangeroues for our job'
  },
   {
    title: 'Really boy law country',
    text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, natus open is a dangeroues for our job'
  }
]
const Feature = () => {
  return (
    <div className="gpt_features section_padding" id="feature">
      <div className="gpt_feature-heading">
        <h1 className="gradient_text">
          The Future is Now and <br />
          you just neeed to realize it. <br />
          tep into future today
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, natus?</p>
      </div>

        <div className="gpt_feature-container">
         {featuredata.map((item,index) =>(
          <Features title={item.title} text={item.text} key={item.title + index}/>

         ))}

         
        </div>
        
    </div>
  )
}

export default Feature
