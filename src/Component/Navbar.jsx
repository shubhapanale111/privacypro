
import logo from '../Images/Privacypro logo updatefinal.png';
import React from 'react'
import '../Component/style.css'
export default function Navbar() {
    const handleButtonClick = () => {
        window.location.href = 'https://calendly.com/insecsys';
      };
  return (
    <div>
        <header>
            <div className="topheader"> <div class="topdiv">
        <div class="topdiv1"></div>
        <div class="topdiv2">
            <div class="marquee-content">
               <marquee>Certification Training. Security Awarness Training. Internship Program. Cybersecurity Training. DSCI Certified</marquee>
            </div>
        </div>
        <div class="topdiv3"></div>
    </div>
 </div>
        <div class="newheadercontainer">
        <div class="top-bar"></div>
            <input type="checkbox" name="" id="check"/>

            <div class="newheaderlogo-container">
            <a href="/">
              <img src={logo} alt="" className="navlogo-img" />
            </a>
            </div>
            <div class="nav-btn">
                <div class="nav-links">
                    <ul>
                        <li class="nav-link" style={{"--i": ".6s"}}>
                            <a href="/webinars">Webinar</a>
                        </li>
                        <li class="nav-link" style={{"--i": ".6s"}}>
                            <a href="/underwork">About Us</a>
                            <div class="dropdown">
                                <ul>
                                   

                                    <li class="dropdown-link">
                                        <a href="/whyprivacypro">Why Privacy Pro<i class="fas fa-caret-down"></i></a>
                                    
                                    </li>
                                   
                                    <div class="arrow"></div>
                                </ul>
                            </div>

                           
                        </li>
                        <li class="nav-link" style={{"--i": ".85s"}}>
                            {/* <a href="/services">Services<i class="fas fa-caret-down"></i></a> */}
                            <a>Services</a>
                            <div class="dropdown">
                                <ul>
                                   

                                    <li class="dropdown-link">
                                        <a href="/services">Privacy Compliance Services<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="/services/dpo">DPO as a Service</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/staffaugumentation">Staff Agumentation</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/privacyprogram">Privacy Program Developement</a>
                                                </li>
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>




                                    <li class="dropdown-link">
                                        <a href="/services">Privacy Assessments<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="/services/productassessment">Product Assessment</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/privacyriskassessment">Privacy Risk Assessment</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/regulatoryassessment">Regulatory Assessment</a>
                                                </li>
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>




                                    <li class="dropdown-link">
                                        <a href="/services">Cyber Security Assessments<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="/services/tprm">Third Party Risk</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/csma">Cyber Security Maturity</a>
                                                </li>
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>




                                    <li class="dropdown-link">
                                        <a href="/services">Cyber Security Services<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="/services/ciso">CISO as a Service</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/inforisk">Information Risk Management</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/csag">Cyber Strategy and Governance</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/vapt">VAPT</a>
                                                </li>
                                               
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>


                                    <li class="dropdown-link">
                                        <a href="/services">Privacy Regulations<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="/services/gdpr">GDPR</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/dpdp">India DPDP</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/philippines">Philippines DPA</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/saudidpa">Saudi Arabia DPA</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/uaedpa">UAE DPA</a>
                                                </li>
                                                <li class="dropdown-link">
                                                    <a href="/services/hipaa">HIPAA</a>
                                                </li>
                                               
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>


                                    <li class="dropdown-link">
                                        <a href="/services">Security and Privacy Standards<i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown second">
                                            <ul>
                                                <li class="dropdown-link">
                                                    <a href="/services/iso27001">ISO 27001</a>
                                                </li>
                                                <li class="dropdown-link">
                                                <a href="/services/cis"> Critical Security Control (CIS)</a>
                                                </li>
                                                <li class="dropdown-link">
                                                <a href="/services/iso27701">ISO 27701</a>
                                                </li>
                                                <li class="dropdown-link">
                                                <a href="/services/iso22301">ISO 22301</a>
                                                </li>
                                                <li class="dropdown-link">
                                                <a href="/services/iso27017">ISO 27017</a>
                                                </li>
                                               
                                                <div class="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                 
                                    <div class="arrow"></div>
                                </ul>
                            </div>
                        </li>
                       
                        <li class="nav-link" style={{ "--i": "1.35s" }}>
                            <a href="#"> Trainings</a>
                        </li> <li class="nav-link" style={{ "--i": "1.35s" }}>
                            <a href="#">Subscriptions</a>
                        </li> <li class="nav-link" style={{ "--i": "1.35s" }}>
                            <a href="#">Resources</a>
                        </li> <li class="nav-link" style={{ "--i": "1.35s" }}>
                            <a href="/contactus">Contact Us</a>
                        </li>
                        <button className='navbarbutton' style={{marginLeft:'35px'}} onClick={handleButtonClick}>Schedule a call</button>
                    </ul>
                </div>
            </div>
            <div class="hamburger-menu-container">
                <div class="hamburger-menu">
                    <div></div>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}
