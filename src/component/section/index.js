import React from 'react'
import "./section.css"
const SectionHeading = ({ SecHeading, SecContent }) => {
  return (
    <div className='section-head'>
      <h1>{SecHeading}</h1>
      <p>{SecContent}</p>
    </div>
  )
}

export default SectionHeading