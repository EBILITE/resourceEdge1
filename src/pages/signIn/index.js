import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import watch from '../../assest/images/watch.svg'
import authLogo from '../../assest/images/authLogo.svg'
import Alogo from '../../assest/images/Alogo.svg'
import editFilled from '../../assest/images/edit-filled.svg'
import "./signIn.css"
const SignIn = () => {
  const navigate = useNavigate()
  const [IsLoggedIn, setIsLoggedIn] = useState(true)
  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (Email !== null) {
      const password = document.getElementById("logPasword")
      setPassword(password.value)
    } else {
      const email = document.getElementById("logEmail")
      setEmail(email.value)
      setIsLoggedIn(false)
      email.value = ""
    }
  }
  if (Password !== null) {
    navigate('/dashboard')
  }


  return (
    <main className='signIn'>
      <img src={authLogo} alt=""/>
      <form onSubmit={handleFormSubmit}>
        <header>
          <img src={Alogo}  alt=""/>
        </header>
        <main>
          <div>
            <h3>Log In</h3>
            <p>Access your resource edge account</p>
          </div>
          <div>
            {
              IsLoggedIn ? null
                : <>
                  <div>
                    <h3>EBILITE UCHE NELSON</h3>
                    <p>{Email}</p>
                  </div>
                  <img src={editFilled} alt=""></img>
                </>
            }
          </div>
          <div className='thirdDiv'>
            {
              IsLoggedIn ? <>
                <h3>Email Address</h3>
                <div>
                  <input type="email" id="logEmail" placeholder='Enter email' />
                  <div className='empty-to-fill'></div>
                </div>
                <span>✔</span>
              </>
                : <>

                  <h3>Password</h3>
                  <div>
                    <input type="password" id="logPasword" placeholder='Enter password' />
                    <div className='empty-to-fill' style={{ background: "#0052CC" }}></div>
                  </div>
                  <img src={watch} alt=""/>
                </>
            }
          </div>
          <div>
            <div className='empty'></div>
            <Link to={'/reset'}>Forget password?</Link>
          </div>

        </main>

      </form>
    </main>
  )
}

export default SignIn

