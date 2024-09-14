// import React from 'react';
// import './Services.css';
// import LockPersonIcon from '@mui/icons-material/LockPerson';
// import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
// import DevicesIcon from '@mui/icons-material/Devices';
// import VpnLockIcon from '@mui/icons-material/VpnLock';
// import GppMaybeIcon from '@mui/icons-material/GppMaybe';
// import PolicyIcon from '@mui/icons-material/Policy';
// const Services = () => {
//   const iconStyle = {
//     fontSize: '40px', // Adjust the icon size as needed
//     color: 'linear-gradient(to right, pink, red, blue)', // Replace with your desired linear gradient colors
//     WebkitBackgroundClip: 'text', // Clip the gradient to the text
//     // Make the original text color transparent
//     display: 'inline-block', // Keep the icon in the flow of the text
//   };
//   return (
//     <div className="flex-container">
//        <div className="parent-container">
//       <div className="vertical-card">
//         <h3 style={{ paddingTop: '50px', fontSize: '25px' }}>
//           <center>Privacy Pro Consulting is dedicated to going above and beyond mere regulatory adherence.</center>
//         </h3>
//         <p style={{ paddingTop: '50px', fontSize: '12px' }}>
//           As an endeavor of Privacy Pioneers & Experts, we deliver comprehensive solutions to address all your privacy and digital security needs.
  
//           In today's tech-driven world, safeguarding the confidentiality and digital safety of your users has never been more vital. This is where our seasoned and devoted team excels. Collaborate with Privacy Pro to ensure your business consistently leads the way in data confidentiality advisory and cybersecurity advisory services.
  
//           We'll assist you in devising strategies, rectifying vulnerabilities, creating, executing, and sustaining robust confidentiality and cybersecurity measures using our Data Privacy Services that conform to all sector-specific compliance standards.
  
//           Don't settle for mere compliance—differentiate yourself by elevating privacy to your Unique Selling Proposition (USP). Here are the offerings we provide:
//         </p>
//       </div>
//       <div className="right-content">
//             <div class="carddd">
//             <div class="headerrr">
//               <LockPersonIcon style={iconStyle}/>
//                   <span class="title">Privecy Complience Services</span>
//                 </div>
                
//                 <button type="button" class="action">DPO Service</button>
//                 <button type="button" class="action">Staff Agumentation</button>
//                 <button type="button" class="action1">privacy Program Developement</button>
//                 <br />
//               </div>
//         <div class="carddd">
//         <div class="headerrr">
//           <VpnKeyOffIcon style={iconStyle}/>
//                   <span class="title">Privacy Assessments</span><br />
//                 </div>
					 
//                 <button type="button" class="action">Product Assessment</button>
//                 <button type="button" class="action">Regulatory Assessment</button>
//                 <button type="button" class="action1">Privacy Risk Assessment</button><br />
// 				</div>
        // <div class="carddd">
        // <div class="headerrr">
        //   <DevicesIcon style={iconStyle}/>
        //           <span class="title">Cyber Security Assessments</span><br />
        //         </div>
        //         <button type="button" class="action">Third-Party Risk Assessment</button>
        //         <button type="button" class="action"> Cyber Security maturity Assessment</button><br /><br />
				// </div>
        // <div class="carddd">
        // <div class="headerrr">
        //   <VpnLockIcon style={iconStyle}/>
        //           <span class="title">Cyber Security Service</span>
        //         </div>
				// 	<button type="button" class="action">CISO as a service</button>
				// 	<button type="button" class="action">Information Risk Management</button>
        //   <button type="button" class="action">Cyber strategy and Governance</button>
        //   <button type="button" class="action">VAPT</button>
				// </div>
        // <div class="carddd">
        // <div class="headerrr">
        //   <GppMaybeIcon style={iconStyle}/>
        //           <span class="title">Privacy Regulations</span><br />
        //         </div>
				// 	<button type="button" class="action">GDPR</button>
        //   <button type="button" class="action">India DPDP</button>
        //   <button type="button" class="action">HIPAA</button>
        //   <button type="button" class="action">PDPA</button>
				// </div>
        // <div class="carddd">
        // <div class="headerrr">
        //   <PolicyIcon style={iconStyle}/>
        //           <span class="title">Security and Privacy Standards</span>
        //         </div>
				// 	<button type="button" class="action">ISO 27001</button>
        //   <button type="button" class="action">ISO 27701</button>
        //   <button type="button" class="action">ISO 22301</button>
        //   <button type="button" class="action">ISO 27017</button>
				// </div>
     
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
// Services.jsx
import React,{useEffect} from 'react';
import '../Component/Services.css';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import { useNavigate } from 'react-router-dom';
import DevicesIcon from '@mui/icons-material/Devices';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import PolicyIcon from '@mui/icons-material/Policy';
import gift from '../../src/Images/Cybersecurity-for-Industry-defense-in-depth.gif'
export default function Services() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
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
    <div className='servicescontainer'>

     <div class="servicesfirstrow">
        <div class="servicesfirstrowcol1"><img src={gift} alt="" className='gift'/></div>
        <div class="servicesfirstrowcol2" >
          <p className='servicessubtitle2'>Welcome to our cybersecurity fortress, where safeguarding your digital assets is our expertise. As seasoned data security professors, we employ cutting-edge strategies to shield your sensitive information from cyber threats. Trust us to fortify your defenses and navigate the evolving landscape of digital security. Your data's protection is not just a service; it's our commitment to a secure digital future.</p>
        </div>
     </div> 
     
 

        {/* <div className="servicessecondrow">
        <div className="servicessecondcol1">
          <div className="subsecondrow1">
            <div className="subcol1">
                  
          <h3>           <center style={{color:'white'}}>Privacy Pro Consulting is dedicated to going above and beyond mere regulatory adherence.</center>
        </h3>
        <p className='servicessubtitle2'>
           As an endeavor of Privacy Pioneers & Experts, we deliver comprehensive solutions to address all your privacy and digital security needs.

           In today's tech-driven world, safeguarding the confidentiality and digital safety of your users has never been more vital. This is where our seasoned and devoted team excels. Collaborate with Privacy Pro to ensure your business consistently leads the way in data confidentiality advisory and cybersecurity advisory services.
  
          We'll assist you in devising strategies, rectifying vulnerabilities, creating, executing, and sustaining robust confidentiality and cybersecurity measures using our Data Privacy Services that conform to all sector-specific compliance standards.
  
          Don't settle for mere compliance—differentiate yourself by elevating privacy to your Unique Selling Proposition (USP). Here are the offerings we provide:
         </p>
            </div>
            <div className="subcol2"></div>
          </div>
          <div className="subsecondrow2">

          <div class="service-card">
    <div class="service-card-header">
      <div class="service-icon">
      
      <VpnKeyOffIcon style={iconStyle}/>
                  </div>
      <div class="service-icon-name">Privecy Complience Services</div>
    </div>
    <div class="service-card-buttons">
      <button className='servicebutton'>DPO Service</button>
      <button className='servicebutton'>Staff Agumentation</button>
      <button className='servicebutton'>Privacy Program Developement</button>
    </div>
  </div>

  <div class="service-card">
    <div class="service-card-header">
      <div class="service-icon"> <VpnKeyOffIcon style={iconStyle}/></div>
      <div class="service-icon-name">Privacy Assessments</div>
    </div>
    <div class="service-card-buttons">
      <button className='servicebutton'>Product Assessment</button>
      <button className='servicebutton'>Regulatory Assessment</button>
      <button className='servicebutton'>Privacy Risk Assessment</button>
    </div>
  </div>
  <div class="service-card">
    <div class="service-card-header">
      <div class="service-icon"><DevicesIcon style={iconStyle}/></div>
      <div class="service-icon-name">Cyber Security Assessments</div>
    </div>
    <div class="service-card-buttons">
      <button className='servicebutton'>TPRM Assessment</button>
      <button className='servicebutton'>CSM Assessment</button>
     
    </div>
  </div>
  <div class="service-card">
    <div class="service-card-header">
      <div class="service-icon"><VpnLockIcon style={iconStyle}/></div>
      <div class="service-icon-name">Cyber Security Service</div>
    </div>
    <div class="service-card-buttons">
      <button className='servicebutton'>CISO as a service</button>
      <button className='servicebutton'>Information Risk Management</button>
      <button className='servicebutton'>Cyber strategy and Governance</button>
      <button className='servicebutton'>VAPT</button>
    </div>
  </div>
  <div class="service-card">
    <div class="service-card-header">
      <div class="service-icon"><GppMaybeIcon style={iconStyle}/></div>
      <div class="service-icon-name">Privacy Regulations</div>
    </div>
    <div class="service-card-buttons">
      <button className='servicebutton'>GDPR </button>
      <button className='servicebutton'>India DPDP</button>
      <button className='servicebutton'>HIPAA</button>
      <button className='servicebutton'>PDPA</button>
    </div>
  </div>
  <div class="service-card">
    <div class="service-card-header">
      <div class="service-icon"><PolicyIcon style={iconStyle}/></div>
      <div class="service-icon-name">Security and Privacy Standards</div>
    </div>
    <div class="service-card-buttons">
      <button className='servicebutton'>ISO 27001</button>
      <button className='servicebutton'>ISO 27701</button>
      <button className='servicebutton'>ISO 22301</button>
      <button className='servicebutton'>ISO 27017</button>
    </div>
  </div>
          </div>
        </div>
     </div> */}
  <div className="servicesectioncontainerrow2">

<div class="homeservice-card">
<div class="homeservice-image">
<div className="homeserviceimagecol1">
<VpnKeyOffIcon style={iconStyle}/>
</div>
  <div className="homeserviceimagecol2">
    <h1 className='homeservicetitle1'> Privecy Complience Services</h1>
  </div>
</div>
<div class="homeservice-content">
<button className='homepagebutton' onClick={() => redirectTo('/services/dpo')}>DPO Service</button>
<button className='homepagebutton' onClick={() => redirectTo('/services/staffaugmentation')}>Staff Augmentation</button>
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
  );
}
