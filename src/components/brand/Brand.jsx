import "./brand.css"
import React from "react"
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import atlassian from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"

const Brand = () => {
  return (
    <div className="gpt_brand section_padding">
      <div className="">
        <img src={google} alt="google" />
      </div>
      <div className="">
        <img src={slack} alt="slack" />
      </div>
      <div className="">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand
