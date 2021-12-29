import React from 'react'
import SectionHeading from '../../component/section'
import InfoContainer from '../../component/shortInfo'
import "./adminLogistics.css"
import travel from '../../assest/images/travel.svg'
import caseImg from '../../assest/images/case.svg'
import rev from '../../assest/images/rev.svg'
import payrol from '../../assest/images/payroll.svg'
import finan from '../../assest/images/finan.svg'
import tl from '../../assest/images/tl.png'
import image7 from '../../assest/images/image 7.png'
import image6 from '../../assest/images/image 6.png'
import image9 from '../../assest/images/image 9.png'
import image10 from '../../assest/images/image 10.png'
const AdminAndLogistics = () => {
  return (
    <section className='admin-logistic layout'>
      <section className="adminLogistics">
        <div className="container padd-1rem">
            <div className="admin-flex">
                <div className="adimFlex admin-1">
                    <h2>Admin & Logistics</h2>
                    <p>Manage and track company assets as well as logistics for 
                        travelling employees</p>
                </div>
                <div className="adimFlex admin-2">
                    <img src={travel}/>
                    <h3>Travel & Logistics</h3>
                    <p>Make travel requests, get 
                        approvals, and have access to 
                          travel information.
                    </p>
                </div>
                <div className="adimFlex admin-2">
                    <img src={caseImg}/>
                    <h3>Travel & Logistics</h3>
                    <p>Manage the acquisition, 
                        assignment, and disposition of 
                        assets seamlessly.
                    </p>
                </div>
                
            </div>

            <div className="travel-dashboard">
                <img src={tl}/>
            </div>
        </div>
        
    </section>

      {/* Finance Section */}
    <section className="finance-section">
        <div className="layout padd-1rem">
            <div className="admin-flex">
                <div className="adimFlex admin-1">
                    <h2>Finance</h2>
                    <p>Generate invoices, track expenditure, and manage complex payrolls for <br/>
                         multiple teams and companies</p>
                </div>
                <div className="adimFlex admin-2">
                    <img src={rev}/>
                    <h3>RE Vouchers</h3>
                    <p>Track and manage expenditure 
                        for multiple teams across your 
                        organisation using Resource 
                        Edge Vouchers
                    </p>
                </div>
                <div className="adimFlex admin-2">
                    <img src={payrol}/>
                    <h3>Payroll</h3>
                    <p>Our easy to use systems takes 
                        away the pain of managing 
                        complex payrolls for 
                        organisations of all sizes.
                    </p>
                </div> 
            </div>
            <div className="travel-dashboard">
                <img src={finan}/>
            </div>
        </div>    
    </section>

    <section className="clients layout">
        <div className="client-logos padd-1rem">
            <img className="img-1" src={image7} alt="unnlogo"/>
            <img className="img-2" src={image6}  alt="tenecelogo"/>
            <img className="img-3" src={image9} alt="PEstate Logo"/>
            <img className="img-4" src={image10} alt="genesys logo"/>
        </div>
    </section>

  </section>
  )
}

export default AdminAndLogistics
