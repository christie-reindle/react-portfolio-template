import React from "react";
import PreloadImage from "react-preload-image";

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {

  return (
    
    <a
      href={projectLink ? projectLink : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      <PreloadImage
        lazy
        className="card"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
            imgUrl +
            ")",
        }}
      >
        <div className="content">
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
        </div>
      </PreloadImage>
    </a>
  )
}

export default Card
