// import React from 'react';
// import './landingpage.css'; // Import the CSS file
// // import anim2 from '../Images/bgvideonew.mp4';
// import anim2 from '../Images/bgvideo3.mp4'
// import { useNavigate } from 'react-router-dom';
// import ContactForm from './ContactForm';
// import PauseOnHover from './Carousel';
// import LockPersonIcon from '@mui/icons-material/LockPerson';
// import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
// import DevicesIcon from '@mui/icons-material/Devices';
// import VpnLockIcon from '@mui/icons-material/VpnLock';
// import GppMaybeIcon from '@mui/icons-material/GppMaybe';
// import PolicyIcon from '@mui/icons-material/Policy';
// import Moreinfo from './Moreinfo';
// import image from '../Images/dd.jpg'
// import OurPartners from './OurPartner';
// export default function LandingPage() {
//   const navigate = useNavigate();

//   const redirectTo = (path) => {
//     navigate(path);
//   };

//   const iconStyle = {
//     fontSize: '60px', // Adjust the icon size as needed
//     color: 'linear-gradient(to right, pink, red, blue)', // Replace with your desired linear gradient colors
//     WebkitBackgroundClip: 'text', // Clip the gradient to the text
//     // Make the original text color transparent
//     display: 'inline-block', // Keep the icon in the flow of the text
//   };
//   return (
//     <div className='landingcontainer'>
   
//               <div className="row1">
//                 <div className="row1column1">
                
//                         <div className="animmm"><video autoPlay loop muted playsInline className="background-video" style={{height:'85vh'}}>
//                         <source src={anim2} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                       </div>
//                         <h1 className="tagline">Privacy Protected, Proven by Privacy Pro</h1>
              
//                         </div>
//               </div>
//               <div class="carousl">
//                   <div class="carodiv1"></div>
//                   <div class="carodiv2">
//                   <PauseOnHover/>
//                   </div>
//                   <div class="carodiv3"></div>
//               </div>
//                 <div className="contactform"> 
//                 <ContactForm/>
//                 </div>
            

//                <div className="servicesectioncontainer">
//                 <div className="servicesectioncontainerrow1">

//                   <div className="servicesectioncontainerrow1col1">

//                   <h3 className='homeservicemaintitle'>           <center style={{color:'white'}}>Privacy Pro Consulting is dedicated to going above and beyond mere regulatory adherence.</center>
//         </h3>
//         <p className='homeservicesubtitle'>
//            As an endeavor of Privacy Pioneers & Experts, we deliver comprehensive solutions to address all your privacy and digital security needs.

//            In today's tech-driven world, safeguarding the confidentiality and digital safety of your users has never been more vital. This is where our seasoned and devoted team excels. Collaborate with Privacy Pro to ensure your business consistently leads the way in data confidentiality advisory and cybersecurity advisory services.
  
//           We'll assist you in devising strategies, rectifying vulnerabilities, creating, executing, and sustaining robust confidentiality and cybersecurity measures using our Data Privacy Services that conform to all sector-specific compliance standards.
  
//           Don't settle for mere compliance—differentiate yourself by elevating privacy to your Unique Selling Proposition (USP). Here are the offerings we provide:
//          </p>
//                   </div>
//                   <div className="servicesectioncontainerrow1col2">
//                     <img src={image} alt="" className='homeimage1'/>
//                   </div>
//                 </div>
//                 <div className="servicesectioncontainerrow2">

//                 <div class="homeservice-card">
//                 <div class="homeservice-image">
//                 <div className="homeserviceimagecol1">
//                 <VpnKeyOffIcon style={iconStyle}/>
//                 </div>
//                   <div className="homeserviceimagecol2">
//                     <h1 className='homeservicetitle1'> Privacy Complience Services</h1>
//                   </div>
//                 </div>
//                 <div class="homeservice-content">
//           <button className='homepagebutton' onClick={() => redirectTo('/services/dpo')}>DPO Service</button>
//           <button className='homepagebutton' onClick={() => redirectTo('/services/staffaugumentation')}>Staff Augmentation</button>
//           <button className='homepagebutton' onClick={() => redirectTo('/services/privacyprogram')}>Privacy Program Development</button>

//                 </div>
//                 </div>


//                 <div class="homeservice-card">
//                 <div class="homeservice-image">
//                 <div className="homeserviceimagecol1">
//                 <VpnKeyOffIcon style={iconStyle}/>
//                 </div>
//                   <div className="homeserviceimagecol2">
//                     <h1 className='homeservicetitle1'> Privacy Assessments</h1>
//                   </div>
//                 </div>
//                 <div class="homeservice-content">
//                 <button className='homepagebutton' onClick={() => redirectTo('/services/productassessment')}>Product Assessment</button>
//       <button className='homepagebutton' onClick={() => redirectTo('/services/privacyriskassessment')}>Regulatory Assessment</button>
//       <button className='homepagebutton' onClick={() => redirectTo('/services/regulatoryassessment')}>Privacy Risk Assessment</button>

             
//                 </div>
//                 </div>

//                 <div class="homeservice-card">
//                 <div class="homeservice-image">
//                 <div className="homeserviceimagecol1">
//                 <DevicesIcon style={iconStyle}/>
//                 </div>
//                   <div className="homeserviceimagecol2">
//                     <h1 className='homeservicetitle1'> Cyber Security Assessments</h1>
//                   </div>
//                 </div>
//                 <div class="homeservice-content">
//                 <button className='homepagebutton' onClick={() => redirectTo('/services/tprm')}>TPRM Assessment</button>
//       <button className='homepagebutton' onClick={() => redirectTo('/services/csma')}>CSM Assessment</button>
             
//                 </div>
//                 </div>

//                 <div class="homeservice-card">
//                 <div class="homeservice-image">
//                 <div className="homeserviceimagecol1">
//                 <VpnKeyOffIcon style={iconStyle}/>
//                 </div>
//                   <div className="homeserviceimagecol2">
//                     <h1 className='homeservicetitle1'> Cyber Security Service</h1>
//                   </div>
//                 </div>
//                 <div class="homeservice-content">
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/ciso')}>CISO as a service</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/vapt')}>VAPT</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/inforisk')}>Information Risk Management</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/csag')}>Cyber strategy and Governance</button>
    
             
//                 </div>
//                 </div>

//                 <div class="homeservice-card">
//                 <div class="homeservice-image">
//                 <div className="homeserviceimagecol1">
//                 <GppMaybeIcon style={iconStyle}/>
//                 </div>
//                   <div className="homeserviceimagecol2">
//                     <h1 className='homeservicetitle1'> Privacy Regulations</h1>
//                   </div>
//                 </div>
//                 <div class="homeservice-content">
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/gdpr')} >GDPR </button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/dpdp')}>India DPDP</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/philippines')}>HIPAA</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/uaedpa')}>UAE DPA</button>
             
//                 </div>
//                 </div>

//                 <div class="homeservice-card">
//                 <div class="homeservice-image">
//                 <div className="homeserviceimagecol1">
//                 <PolicyIcon style={iconStyle}/>
//                 </div>
//                   <div className="homeserviceimagecol2">
//                     <h1 className='homeservicetitle1'> Security and Privacy Standards</h1>
//                   </div>
//                 </div>
//                 <div class="homeservice-content">
//                 <button  className='homepagebutton' onClick={() => redirectTo('/services/iso27001')}>ISO 27001</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/iso27701')}>ISO 27701</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/iso22301')}>ISO 22301</button>
//       <button  className='homepagebutton' onClick={() => redirectTo('/services/iso27017')}>ISO 27017</button>
             
//                 </div>
//                 </div>


//                 </div>

// </div>

    
                

      
//       <div className="ourparte">
//         <OurPartners/>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import './landingpage.css'; // Import the CSS file
// import anim2 from '../Images/bgvideonew.mp4';
import anim2 from '../Images/bgvideo3.mp4'
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import PauseOnHover from './Carousel';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import DevicesIcon from '@mui/icons-material/Devices';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import PolicyIcon from '@mui/icons-material/Policy';
import Moreinfo from './Moreinfo';
import image from '../Images/dd.jpg'
import OurPartners from './OurPartner';
export default function LandingPage() {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };

  const iconStyle = {
    fontSize: '60px', // Adjust the icon size as needed
    color: 'linear-gradient(to right, pink, red, blue)', // Replace with your desired linear gradient colors
    WebkitBackgroundClip: 'text', // Clip the gradient to the text
    // Make the original text color transparent
    display: 'inline-block', // Keep the icon in the flow of the text
  };
  return (
    <div className='landingcontainer'>
   
              <div className="row1">
                <div className="row1column1">
                
                        <div className="animmm"><video autoPlay loop muted playsInline className="background-video" style={{height:'85vh'}}>
                        <source src={anim2} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      </div>
                        <h1 className="tagline">Privacy Protected, Proven by Privacy Pro</h1>
              
                        </div>
              </div>
              <div class="carousl">
                  <div class="carodiv1"></div>
                  <div class="carodiv2">
                  <PauseOnHover/>
                  </div>
                  <div class="carodiv3"></div>
              </div>
                <div className="contactform"> 
                <ContactForm/>
                </div>
            

               <div className="servicesectioncontainer">
                <div className="servicesectioncontainerrow1">

                  <div className="servicesectioncontainerrow1col1">

                  <h3 className='homeservicemaintitle'>           <center style={{color:'white'}}>Privacy Pro Consulting is dedicated to going above and beyond mere regulatory adherence.</center>
        </h3>
        <p className='homeservicesubtitle'>
           As an endeavor of Privacy Pioneers & Experts, we deliver comprehensive solutions to address all your privacy and digital security needs.

           In today's tech-driven world, safeguarding the confidentiality and digital safety of your users has never been more vital. This is where our seasoned and devoted team excels. Collaborate with Privacy Pro to ensure your business consistently leads the way in data confidentiality advisory and cybersecurity advisory services.
  
          We'll assist you in devising strategies, rectifying vulnerabilities, creating, executing, and sustaining robust confidentiality and cybersecurity measures using our Data Privacy Services that conform to all sector-specific compliance standards.
  
          Don't settle for mere compliance—differentiate yourself by elevating privacy to your Unique Selling Proposition (USP). Here are the offerings we provide:
         </p>
                  </div>
                  <div className="servicesectioncontainerrow1col2">
                    <img src={image} alt="" className='homeimage1'/>
                  </div>
                </div>
                <div className="servicesectioncontainerrow2">

                <div class="homeservice-card">
                <div class="homeservice-image">
                <div className="homeserviceimagecol1">
                <VpnKeyOffIcon style={iconStyle}/>
                </div>
                  <div className="homeserviceimagecol2">
                    <h1 className='homeservicetitle1'> Privacy Complience Services</h1>
                  </div>
                </div>
                <div class="homeservice-content">
          <button className='homepagebutton' onClick={() => redirectTo('/services/dpo')}>DPO Service</button>
          <button className='homepagebutton' onClick={() => redirectTo('/services/staffaugumentation')}>Staff Augmentation</button>
          <button className='homepagebutton' onClick={() => redirectTo('/services/privacyprogram')}>Privacy Program Development</button>

                </div>
                </div>


                <div class="homeservice-card">
                <div class="homeservice-image">
                <div className="homeserviceimagecol1">
                <VpnKeyOffIcon style={iconStyle}/>
                </div>
                  <div className="homeserviceimagecol2">
                    <h1 className='homeservicetitle1'> Privacy Assessments</h1>
                  </div>
                </div>
                <div class="homeservice-content">
                <button className='homepagebutton' onClick={() => redirectTo('/services/productassessment')}>Product Assessment</button>
      <button className='homepagebutton' onClick={() => redirectTo('/services/privacyriskassessment')}>Regulatory Assessment</button>
      <button className='homepagebutton' onClick={() => redirectTo('/services/regulatoryassessment')}>Privacy Risk Assessment</button>

             
                </div>
                </div>

                <div class="homeservice-card">
                <div class="homeservice-image">
                <div className="homeserviceimagecol1">
                <DevicesIcon style={iconStyle}/>
                </div>
                  <div className="homeserviceimagecol2">
                    <h1 className='homeservicetitle1'> Cyber Security Assessments</h1>
                  </div>
                </div>
                <div class="homeservice-content">
                <button className='homepagebutton' onClick={() => redirectTo('/services/tprm')}>TPRM Assessment</button>
      <button className='homepagebutton' onClick={() => redirectTo('/services/csma')}>CSM Assessment</button>
             
                </div>
                </div>

                <div class="homeservice-card">
                <div class="homeservice-image">
                <div className="homeserviceimagecol1">
                <VpnKeyOffIcon style={iconStyle}/>
                </div>
                  <div className="homeserviceimagecol2">
                    <h1 className='homeservicetitle1'> Cyber Security Service</h1>
                  </div>
                </div>
                <div class="homeservice-content">
      <button  className='homepagebutton' onClick={() => redirectTo('/services/ciso')}>CISO as a service</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/vapt')}>VAPT</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/inforisk')}>Information Risk Management</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/csag')}>Cyber strategy and Governance</button>
    
             
                </div>
                </div>

                <div class="homeservice-card">
                <div class="homeservice-image">
                <div className="homeserviceimagecol1">
                <GppMaybeIcon style={iconStyle}/>
                </div>
                  <div className="homeserviceimagecol2">
                    <h1 className='homeservicetitle1'> Privacy Regulations</h1>
                  </div>
                </div>
                <div class="homeservice-content">
      <button  className='homepagebutton' onClick={() => redirectTo('/services/gdpr')} >GDPR </button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/dpdp')}>India DPDP</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/philippines')}>HIPAA</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/uaedpa')}>UAE DPA</button>
             
                </div>
                </div>

                <div class="homeservice-card">
                <div class="homeservice-image">
                <div className="homeserviceimagecol1">
                <PolicyIcon style={iconStyle}/>
                </div>
                  <div className="homeserviceimagecol2">
                    <h1 className='homeservicetitle1'> Security and Privacy Standards</h1>
                  </div>
                </div>
                <div class="homeservice-content">
                <button  className='homepagebutton' onClick={() => redirectTo('/services/iso27001')}>ISO 27001</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/iso27701')}>ISO 27701</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/iso22301')}>ISO 22301</button>
      <button  className='homepagebutton' onClick={() => redirectTo('/services/iso27017')}>ISO 27017</button>
             
                </div>
                </div>


                </div>

</div>

    
      <div className="ourparte">
        <OurPartners/>
      </div>
    </div>
  );
}