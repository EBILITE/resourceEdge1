import React from 'react'
import { Link, Linkn } from "react-router-dom";
import LogolandLogo from "../../assest/images/LogolandLogo.svg"
import Group from "../../assest/images/Group.svg"
import "./navigation.css"
const NavigationBar = () => {

  return (
    <nav >
      <div className="sm-screen">
        <div>
          <img src={Group} alt=""></img>
        </div>
        <div>
          <label htmlFor="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>

          </label>
          <input type="checkbox" id="hamburger" />
          <div className="dropWrapper">
            <div>

              <span className="nav-link"><a>Features</a></span>
              <span className="nav-link"><a>About</a></span>
            </div>
            <div>
              <button ><Link to={'/login'}>Log in</Link></button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg-screen layout" >
        <div>
          <span className="logo">resource edge</span>
          <span className="nav-link"><a>Features</a></span>
          <span className="nav-link"><a>About</a></span>
        </div>
        <div>
          <button>Sign up</button>
          <button ><Link to={'/login'}>Sign in</Link></button>
        </div>

      </div> */}
      <nav class="nav-wrapper lg-screen padd-1rem layout">
            <div class="navlist-1 nav-bar">
                <img src={LogolandLogo} alt=""/>
                <div class="nav-item"><a href="">Features</a> </div>
                <div class="nav-item"><a href="">About</a> </div>
            </div>
            <div class="navlist-2 nav-bar">
                <div class="nav-item sign-up"><a href="">Sign up</a> </div>
                <button ><Link to={'/login'}>Sign in</Link></button>
                {/* <button> <a href="">Sign in</a></button> */}
            </div>
        </nav>     

    </nav>
  )
}

export default NavigationBar
