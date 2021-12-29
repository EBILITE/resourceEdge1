import React from 'react'
import Welcome from '../../component/welcome'
import AdminAndLogistics from '../../contents/AdminLogistics'
import HumanResources from '../../contents/HumanResources'
import Footer from '../../contents/Footer'
import NavigationBar from '../../contents/Navigation'
import "./webpage.css"

const Landing = () => {
  return (
    <div>
      <NavigationBar/>
      <Welcome />
      <HumanResources />
      <AdminAndLogistics />
      <Footer />
    </div>
  )
}

export default Landing