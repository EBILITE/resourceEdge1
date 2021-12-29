import React from 'react'
import SectionHeading from '../../component/section'
import InfoContainer from '../../component/shortInfo'
import "./humanResources.css"
import hr1 from '../../assest/images/hr1.svg'
import hr2 from '../../assest/images/hr2.svg'
import hr3 from '../../assest/images/hr3.svg'
import dashpic from '../../assest/images/dashpic.svg'
const HumanResources = () => {
  return (
    <>
      <section className='human-resources hr-section'>
        <div className="layout padd-1rem">
                <div className="hr-items1">
                    <h2>Human Resources</h2>
                    <p>Onboard new employees, manage the employee lifecycle <br/> and measure employee performance.</p>
                </div>
                <div className="hr-items2">
                    <div className="hr-flex">
                        <img src={hr1}/>
                        <h3>Employee Management</h3>
                        <p>From Hiring & Onboarding to Retiring, the 
                            Resource Edge Employee Management 
                            module  eliminates all the complexities & 
                            paperwork involved in managing your team.</p>
                    </div>
                    <div className="hr-flex">
                        <img src={hr2}/>
                        <h3>Employee Management</h3>
                        <p>Manage and track employee performance with 
                            our easy-to-use tools for goal setting, performance 
                            agreements and performance reviews. </p>
                    </div>
                    <div className="hr-flex">
                        <img src={hr3}/>
                        <h3>Employee Management</h3>
                        <p>Employees can request for paid time off, 
                            vacations, sick leaves or educational leaves 
                            and get approvals all within Resource Edge. 
                            HR managers can equally ensure compliance.</p>
                    </div>
                </div>
                
                <div className="hr-items3">
                    <img src={dashpic}/>
                </div>
        </div>   

      </section>
    </>
  )
}

export default HumanResources
