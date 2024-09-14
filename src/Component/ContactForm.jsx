

import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Component/Contactus.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted Email Sent successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const handleLinkedInClick = () => {
    window.location.href = linkedInUrl;
  };
const linkedInUrl = 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A10864106&keywords=insecsys&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=62bfc8c1-a6fc-4cf4-bd50-2134362db6d9&sid=1qx&spellCorrectionEnabled=true';

  return (
   <div className="containerfluid">
<div class="left-column"> 
<div className="textc">
<p className='text'>"We facilitate faster and smoother business growth"</p> 
<div className="subtext"><h3 style={{color:'white',paddingTop:'20px'}}>Contact Our Sales Team </h3><br /><p style={{paddingBottom:'20px'}}>Submit your information and our representative will follow up with you within 48 hours.</p></div>
<ul className='listt'>
   <li>
   <CheckCircleIcon/>&nbsp; Request a Demo

   </li>
   <li>
   <CheckCircleIcon/>&nbsp;Technically evaluate a solution

   </li>
   <li>
   <CheckCircleIcon/>&nbsp;Request a quotation

   </li>
   <li>
   <CheckCircleIcon/>&nbsp;Speak to a solutions’ expert
   </li>
</ul>
</div>
 </div>
    <div class="container">
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text2">
          A-1003 Gagan Arena, <br />NIBM -Corinthians Road,
          </p>

          <div class="info">
            <div class="information">
             
              <p>Undri, Pune 411060</p>
            </div>
            <div class="information">
              
              <p>insecsys@insecsys.com</p>
            </div>
            <div class="information">
              
              <p>+91 91686-56865| +91 83790-77907</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#" >
              <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A10864106&keywords=insecsys&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=62bfc8c1-a6fc-4cf4-bd50-2134362db6d9&sid=1qx&spellCorrectionEnabled=true" onClick={linkedInUrl}>
              <LinkedInIcon/>
              </a>
              <a href="#">
              <WhatsAppIcon/>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div><br/>
         
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form onSubmit={handleSubmit}>
            <h3 class="title">Contact us</h3>
            <div class="input-container">
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input"
            placeholder="Your Name"
          />
              <label for=""></label>
              <span>Username</span>
            </div>
            <div class="input-container">
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
            placeholder="Your Email"
          />
              <label for=""></label>
              <span>Email</span>
            </div>
            <div class="input-container">
            <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="input"
            placeholder="Your Phone"
          />
              <label for=""></label>
              <span>Phone</span>
            </div>
            <div class="input-container">
            <select
            name="services"
            value={formData.services}
            onChange={handleInputChange}
            className="input"
            style={{ color: 'black' }}
          >
    <option value="" disabled selected hidden >Select your services</option>
    <option value="DPO1">DPO1</option>
    <option value="DPO2">DPO2</option>
    <option value="SOC1">SOC1</option>
    <option value="SOC2">SOC2</option>
  </select>
  <label for=""></label>
</div>

            <div class="input-container textarea">
            <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="input"
            placeholder="Your Message"
          ></textarea>
              <label for=""></label>
             
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
    
    </div>
  );
}
