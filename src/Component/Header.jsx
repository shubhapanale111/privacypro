import React,{useState} from 'react';
import '../Component/Header.css';
import logo from '../Images/Privacypro logo updatefinal.png';

const Header = () => {

  return (
    <>
      <div className="header-container">
      <div class="topdiv">
        <div class="topdiv1"></div>
        <div class="topdiv2">
            <div class="marquee-content">
               <marquee>Certification Training. Security Awarness Training. Internship Program. Cybersecurity Training. DSCI Certified</marquee>
            </div>
        </div>
        <div class="topdiv3"></div>
    </div>
 
        <nav className='menu'>
          <div className="logo-container">
            <a href="/">
              <img src={logo} alt="" className="logo-img" />
            </a>
          </div>
          <ul>
            <li><a href="/underwork">Webinar</a></li>
            <li><a href="/underwork">About Us</a></li>
            <li>
              <a href="/services">Services ▾</a>
              <ul><div className="arrow"></div>
                <li>
                  <a href="/underwork">Privacy Compliance Services ▾</a>
                  <ul>
                    <li><a href="/services/dpo">DPO as a Service</a></li>
                    <li><a href="/services/staffaugumentation">Staff Agumentation</a></li>
                    <li><a href="/services/privacyprogram">Privacy Program Developement</a></li>
                    
                  </ul>
                </li>
                <li>
                  <a href="#">Privacy Assessments</a>
                  <div className="arrow"></div>
                  <ul>
                    <li> <a href="/services/productassessment">Product Assessment</a></li>
                    <li><a href="/services/privacyriskassessment">Privacy Risk Assessment</a></li>
                    <li><a href="/services/regulatoryassessment">Regulatory Assessment</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Cyber Security Assessments</a>
                     
                  <div className="arrow"></div>
                  <ul>
                    <li><a href="/services/tprm">Third Party Risk</a></li>
                    <li><a href="/services/csma">Cyber Security Maturity</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/underwork">Cyber Security Services</a>
                  <ul>
                    <li>   <a href="/services/ciso">CISO as a Service</a></li>
                    <li>     <a href="/services/inforisk">Information Risk Management</a></li>
                    <li>     <a href="/services/csag">Cyber Strategy and Governance</a></li>
                    <li>    <a href="/services/vapt">VAPT</a></li>
                  </ul>
                </li>
                <li><a href="/underwork">Privacy Regulations</a>
                
                <ul>
                <li className="dropdown-link">
                              <a href="/services/gdpr">GDPR</a>
                            </li>
                            <li >
                              <a href="/services/dpdp">India DPDP</a>
                            </li>
                            <li >
                              <a href="/services/philippines">Philippines DPA</a>
                            </li>
                            <li >
                              <a href="/services/saudidpa">Saudi Arabia DPA</a>
                            </li>
                            <li >
                              <a href="/services/uaedpa">UAE DPA</a>
                            </li>
                            <li >
                              <a href="/services/hipaa">HIPAA</a>
                            </li>

                  </ul>
                </li>
                <li><a href="/underwork">Security and Privacy Standards</a>
                
                <ul>
                            <li >
                              <a href="/services/iso27001">ISO 27001</a>
                            </li>
                           
                            <li >
                              <a href="/services/cis"> Critical Security Control (CIS)</a>
                            </li>
                            <li >
                              <a href="/services/iso27701">ISO 27701</a>
                            </li>
                            <li >
                              <a href="/services/iso22301">ISO 22301</a>
                            </li>
                            <li >
                              <a href="/services/iso27017">ISO 27017</a>
                            </li>
                            <div className="arrow"></div>
                          </ul>
                </li>
                <li><a href="/underwork">Privacy Trainings</a></li>
              </ul>
            </li>
            <li><a href="/underwork">Subscriptions</a></li>
            <li>
              <a href="/underwork">Resources ▾</a>
              <ul>
                <li><a href="/underwork">Web De</a></li>
                <li><a href="/underwork">Graphic Design</a></li>
                <li>
                  <a href="/underwork">Digital Marketing ▾</a>
                  <ul>
                    <li><a href="/underwork">SEO</a></li>
                    <li><a href="/underwork">Social Media</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="/contactus">Contact Us</a></li>
            <button className='headerbutton' style={{marginLeft:'35px'}}>Schedule a call</button>
          </ul>
      
        </nav>
      </div>
    </>
  );
};

export default Header;
