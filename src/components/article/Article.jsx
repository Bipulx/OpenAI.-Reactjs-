import "./Article.css"
import React from "react"

const Article = (props) => {
  return (
    <div className="gpt_blog-container_article">
      <div className=" gpt_blog-container_article-img">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="gpt_blog-container_article-content">
        <p>{props.date}</p>
        <h3>{props.title}</h3>
      <p>Read full article</p>
      </div>

    </div>
  )
}

export default Article
