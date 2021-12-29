import React from 'react'
import "./footer.css"
import logoF from '../../assest/images/logoF.svg'
import facebook from '../../assest/images/facebook.svg'
import twitter from '../../assest/images/twitter.svg'
import linkedin from '../../assest/images/linkedin.svg'
import vector3 from '../../assest/images/Vector3.svg'
const Footer = () => {
    return (
        <footer>
            <div class="footer-section  layout" >
                <div class="footer-items re-footer">
                    <img src={logoF} alt="footer logo" />

                    <p>Throw paperwork into the trash.</p>
                </div>
                <div class="footer-items footer-ul">
                    <div class="foota">
                        <ul class="footer-links">
                            <li class="Fsocials"><a href="#"><img src={facebook} /></a></li>
                            <li class="Fsocials"><a href="#"><img src={twitter} /></a></li>
                            <li class="Fsocials"><a href="#"><img src={linkedin} /></a></li>
                            <li class="Fsocials"><a href="#"><img src={vector3} /></a></li>
                        </ul>
                        <div class="copy"> Copyright &copy;  Genesys DevStudio. All rights reserved</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer