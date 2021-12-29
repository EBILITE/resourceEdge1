import {useState} from 'react'
import Outline from '../../component/Outline'
import ProfileContent from '../../contents/ProfileContent'
import "./style.css"

const Dashboard = () => {
const [IsLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <section className="re-dashboard">
            <nav className="re-nav">
                <div className="re-menu">
                    <div className="ham-menu">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span> 
                    </div>
                    <div className="re-text-logo"> <h1>resource edge</h1> </div>
                    <div className="re-text"> <span>TM Dashboard</span> </div>
                </div>
                <div className="re-profile">
                    {
                        IsLoggedIn ? <Outline/> : null
                    }
                </div>
            </nav>
            <ProfileContent/>
        </section>
    )
}

export default Dashboard