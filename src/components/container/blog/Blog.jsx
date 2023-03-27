import "./blog.css"
import React from "react"
import Article from "../../article/Article"

import blog01 from "../../../assets/blog01.png"
import blog02 from "../../../assets/blog02.png"
import blog03 from "../../../assets/blog03.png"
import blog04 from "../../../assets/blog04.png"
import blog05 from "../../../assets/blog05.png"
const Blog = () => {
  return (
    <div className="gpt_blog section_padding" id="blog">
      <div className="gpt_blog-heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging
          About it
        </h1>
      </div>
      <div className="gpt_blog-container">
      <div className="gpt_blog-container_groupA">
      <Article imgUrl={blog01} date="apr1 2023" title="Gpt-3 and Open Ai is the Future"/>
      </div>
      <div className="gpt_blog-container_groupB">
        <Article imgUrl={blog02} date="apr1 2023" title="Gpt-3 and Open Ai is the Future"/>
        <Article imgUrl={blog03} date="apr1 2023" title="Gpt-3 and Open Ai is the Future"/>
        <Article imgUrl={blog04} date="apr1 2023" title="Gpt-3 and Open Ai is the Future"/>
        <Article imgUrl={blog05} date="apr1 2023" title="Gpt-3 and Open Ai is the Future"/>
      </div>
      </div>
    </div>
  )
}

export default Blog
