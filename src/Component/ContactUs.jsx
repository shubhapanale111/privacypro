import React,{useEffect} from 'react';
import ContactForm from './ContactForm';
import topimage from '../../src/Images/contactustopimg2.jpg'
export default function ContactUssecond() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contactuscontainer">
    
      <div className="contactusrow1">
     <div class="toppage">
        <div className="contentcontactus" >
  <h1 style={{fontSize:'50px',fontWeight:'700',color:'navy'}}>Contact Us<h2 style={{fontSize:'30px',fontWeight:'600',color:'navy'}}>Privacy Pro</h2> <p style={{fontSize:'20px',fontWeight:'700',color:'maroon'}}>Empowering Connections, Ensuring Data Privacy <br /> Your Trusted Partner in Secure Communication.</p></h1>
  </div>
   </div>
{/* <img src={topimage} alt=""  className='topimg' style={{height:'65vh'}}/> */}

      </div>
      <div className="contactusrow2">
      <ContactForm/>
      </div>
    </div>
  );
}
