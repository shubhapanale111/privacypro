// import React from 'react'; 
// import './Footer.css';

// const Footer = () => {
//      return (
//          <footer className="footer"> 
//          <div className="footer__section1"> 
//          <h2>Privecy Pro</h2>
//           <p>Copyright © 2023 
//             </p><p>privecy pro Consulting Inc. <br />
//             All rights reserved.</p> 
//           <div className="footer__section1__certifications">
//              {/* <img src="/certifications/ISO27001.png" alt="ISO 27001 Certified" /> 
//              <img src="/certifications/ISO27701.png" alt="ISO 27701 Certified" />  */}
//              </div> 
//              </div>
//             <div className="footer__section2"> 
//              <h3>Services</h3>
//               <ul> 
//                    <li>Information Security</li>
//                     <li>Data Protection</li> 
//                     <li>GDPR Readiness</li> 
//                     <li>Penetration Testing</li> 
//                     <li>Application Security</li> 
//                </ul> 
//                </div> 
          
//                  <div className="footer__section4"> 
//                  <h3>Contact Us</h3> 
//                  <p>Email: info@privecypro.com</p>
//                   <p>Phone: +91-77609-23421 | +31 639875167</p> 
//                   </div> 
//                   </footer>
//                    ); 
//                 };

// export default Footer;
import { icon, logo } from '../assets';
import { FaInstagram,FaLinkedin,FaXTwitter,FaYoutube } from "react-icons/fa6";
import '../Component/Footer.css'
const Footer = () => {
    const links = [
        [
            {label : 'Company' , key: 'header-1'},
            {label : 'About us' , key: 'item-1-1'},
            {label : 'blog' , key: 'item-1-2'},
            {label : 'Contact us' , key: 'item-1-3'},
            {label : 'Pricing' , key: 'item-1-4'},
            {label : 'Testimonials' , key: 'item-1-5'},
        ],
        [
            {label : 'Support' , key: 'header-2'},
            {label : 'Help center' , key: 'item-2-1'},
            {label : 'Terms of service' , key: 'item-2-2'},
            {label : 'Legal' , key: 'item-2-3'},
            {label : 'Privacy policy' , key: 'item-2-4'},
            {label : 'Status' , key: 'item-2-5'},
        ]
    ]
    return (
        <div className='footer'>
            <div className="footer-company-info">
                <div className="footer-img">
                    <img src={icon} alt="" style={{height:'65%',width:'20%'}} />
                    <span>
                        PrivacyPro
                    </span>
                </div>
                
                <div className='infos'>             
                    <span>
                        Copyright © 2020 Privecy Pro ltd.
                    </span>
                    <span>
                        All rights reserved
                    </span>
                </div>
                <div className="footer-icons">
                    <FaInstagram/>
                    <FaLinkedin/>
                    <FaXTwitter/>
                    <FaYoutube/>
                </div>
            </div>
            <div className="footer-links">
                    {links.map((col,index) => (
                        <ul className={`col col-${index+1}`} key={`col-${index}`}>
                            {col.map((link,index) => (
                                <li key={`link-${col}-${index}`}>
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>
            <div className="footer-form">
                <label htmlFor="">
                    Stay up to date
                </label>
                <input type="email" name="" id="" />
            </div>
        </div>
    )
}

export default Footer