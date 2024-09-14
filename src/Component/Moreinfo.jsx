// import React from 'react'
// import '../Component/anim.css'
// export default function Moreinfo() {
//   return (
//     <div>



// <div className="serviceContainer">
//       <div className="grid-container">
//         <div className="grid-row second-row">
//           <div className="grid-column">
//             <div class="carddd">
//             <div class="moreinfocard">
//   <div class="moreinfo-image"></div>
//   <div class="moreinfo-content">
//     <a href="#">
//       <span class="moreinfo-title">
//       Get Recognition from 
// your Peers and Employers
// Accelerate your career
//       </span>
//     </a>

   

//     <a class="moreinfo-action" href="#">
//       Find out more
//       <span aria-hidden="true">
//         →
//       </span>
//     </a>
//   </div>
// </div> 
//                 <br />     
//                </div>
//                </div>

//                <div className="grid-column">
//             <div class="carddd">
//             <div class="moreinfocard">
//   <div class="moreinfo-image"></div>
//   <div class="moreinfo-content">
//     <a href="#">
//       <span class="moreinfo-title">
//       Join our Corporate 
// Member Diversity
// Explore membership benefits
//       </span>
//       <br /><br />
//     </a>

   

//     <a class="moreinfo-action" href="#">
//       Find out more
//       <span aria-hidden="true">
//         →
//       </span>
//     </a>
//   </div>
// </div> 
//                 <br />     
//                </div>
//                </div>
      
        
//                <div className="grid-column">
//             <div class="carddd">
//             <div class="moreinfocard">
//   <div class="moreinfo-image"></div>
//   <div class="moreinfo-content">
//     <a href="#">
//       <span class="moreinfo-title">
//       Stay tuned for our 
// Podcast Episodes
// Get ready for insightful discussions
//       </span>
//     </a>

   

//     <a class="moreinfo-action" href="#">
//       Find out more
//       <span aria-hidden="true">
//         →
//       </span>
//     </a>
//   </div>
// </div> 
//                 <br />     
//                </div>
//                </div><div className="grid-column">
//             <div class="carddd">
//             <div class="moreinfocard">
//   <div class="moreinfo-image"></div>
//   <div class="moreinfo-content">
//     <a href="#">
//       <span class="moreinfo-title">
//       Stay tuned for our 
// LinkedIn Live Sessions
// Get ready for insightful discussions
//       </span>
//     </a>

   
//     <a class="moreinfo-action" href="#">
//       Find out more
//       <span aria-hidden="true">
//         →
//       </span>
//     </a>
//   </div>
// </div> 
//                 <br />     
//                </div>
//                </div>
          
//         </div>
//       </div>
//     </div>

//     </div>
//   )
// }
// MoreInfo.jsx
// MoreInfo.jsx

import React from 'react';
import '../Component/moreinfo.css';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const MoreInfo = () => {
    const handleLinkedInClick = () => {
        window.location.href = linkedInUrl;
      };
    const linkedInUrl = 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A10864106&keywords=insecsys&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=62bfc8c1-a6fc-4cf4-bd50-2134362db6d9&sid=1qx&spellCorrectionEnabled=true';
  const iconStyle = {
    fontSize: '80px', // Adjust the icon size as needed
    color: 'linear-gradient(to right, pink, red, blue)', // Replace with your desired linear gradient colors
    WebkitBackgroundClip: 'text', // Clip the gradient to the text
    // Make the original text color transparent
    display: 'inline-block', // Keep the icon in the flow of the text
  };
  return (
   
    <div className="moreinfo-container">
    
    <div class="moreinfo-card">
    <div class="moreinfo-card-img"><CardMembershipIcon style={iconStyle}/></div>
    <div class="moreinfo-card-info">
        
        <p class="moreinfo-text-body"><p class="moreinfo-heading">Get Recognition from your Peers and Employers</p>Accelerating your career to new heights while prioritizing privacy excellence. </p>
        <button className='moreinfobutton'>More info</button>
    </div>
</div>

    <div class="moreinfo-card">
        <div class="moreinfo-card-img"><VpnLockIcon style={iconStyle}/></div>
        <div class="moreinfo-card-info">
            <p class="moreinfo-text-body"><p class="moreinfo-heading">Join our Corporate Member Diversity</p>Initiative and discover a wealth of membership benefits, designed to enrich your experience and open doors to new opportunities</p>
            <button className='moreinfobutton'>More info</button>
        </div>
    </div>
    <div class="moreinfo-card">
        <div class="moreinfo-card-img"><SettingsVoiceIcon style={iconStyle}/></div>
        <div class="moreinfo-card-info">
        <p class="moreinfo-text-body"><p class="moreinfo-heading">Stay tuned for our upcoming Podcast Episodes</p> and get ready for engaging and insightful discussions that promise to broaden your perspective.</p>
           
                  <button className='moreinfobutton'>More info</button>
        </div>
    </div>
    <div class="moreinfo-card">
        <div class="moreinfo-card-img" onClick={handleLinkedInClick}><LinkedInIcon style={iconStyle}/></div>
        <div class="moreinfo-card-info">
        <p class="moreinfo-text-body"><p class="moreinfo-heading">Stay tuned for our LinkedIn Live Sessions</p> and prepare for insightful discussions that promise to enrich your knowledge and foster meaningful engagement.</p>
            <button className='moreinfobutton'>More info</button>
        </div>  
    </div>

    </div>
 
  );
};

export default MoreInfo;
