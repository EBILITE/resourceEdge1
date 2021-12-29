import React from 'react'
import "./welcome.css"
import relax from "../../assest/images/relax.svg"
const Welcome = () => {
  return (
    <section className='welcome layout'>
      <div className="welcome-side-1 side padd-1rem">
        <h3>Throw paperwork  into the trash where it belongs.</h3>
        <span>Eliminate all the hassle involved in managing <br/> people operations by automating it.</span>
      </div>
      <div className="welcome-side-2 side">
        <img src={relax}  alt=""/>
      </div>

    </section>
  )
}

export default Welcome