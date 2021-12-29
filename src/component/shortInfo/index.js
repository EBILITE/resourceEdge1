import React from 'react'
import "./shortInfo.css"
const InfoContainer = ({ imgSrc, InfoHeading, InfoContent }) => {
  return (
    <div className='message'>
      <img src={imgSrc} />
      <h1>{InfoHeading}</h1>
      <p>{InfoContent}</p>
    </div>
  )
}

export default InfoContainer;
