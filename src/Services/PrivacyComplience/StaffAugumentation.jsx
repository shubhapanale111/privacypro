
// import React, { useEffect, useRef } from 'react';
// import '../../Services/PrivacyComplience/staff.css';
// import dpoback from '../../Images/staffagumentation.jpeg';
// import bg from '../../Images/staffagumentation.jpeg'

// import upper from '../../Images/staffbg.png'
// import ContactForm from '../../Component/ContactForm';
// import staffbenifit from '../../Images/staffbenifitstructure.jpg'
// import need from '../../Images/staffasaservice.jpg'

// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
// import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
// import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
// import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// export default function StaffAugumentation() {
//   useEffect(() => {
//     // Scroll to the top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       threshold: 0.30,
//     };

//     const callback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           animationRef.current.classList.add('start-animation');
//         } else {
//           animationRef.current.classList.remove('start-animation');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     if (animationRef.current) {
//       observer.observe(animationRef.current);
//     }

//     return () => {
//       if (animationRef.current) {
//         observer.unobserve(animationRef.current);
//       }
//     };
//   }, []);
//   return (
// //     <div className="dpocontainer">
// //        <div class="upperstaff">
// // <img src={upper} alt=""  className='bgupperstaff'/>

// // </div>
// // <div className="staff">
// //       <div className="staff-grid-container">
// //         <div className="staff-grid-row staff-first-row">
// //           <div className="staff-grid-column staff-column-1" style={{color:'black'}}> 
// //           <h1  >           <center style={{fontSize:'40px'}}>Staff Agumentation as a Service</center>
// //         </h1>
// //         <p style={{ paddingTop: '20px', }} className='dpotext'>
// //         Increase the performance of your team by utilizing our staff augmentation services. Our group of skilled experts can help your company with a range of duties, including project management, software development, and quality control. We can deliver professionals to match your company goals and collaborate with your current team through flexible employment options. By utilizing our talented workforce, you may save time and money while streamlining your processes and achieving your objectives.
// //          </p>
// //           </div>
// //           <div className="dpo-grid-column staff-column-2"> 
// //           <img src={column2} alt="" className='staffasaservice' />        
// //           </div>       
// //         </div>      
// //         </div>      
// //       </div>

// //       <div class="parentstaff" style={{paddingTop:'10vh'}}>
        
// // <div class="div1"> <h1 style={{marginTop:'10vh',color:'black',marginLeft:'-5vw',fontSize:'40px'}} > Why would your business outsource staff augmentation?</h1>
// //       <p style={{color:'black',marginLeft:'-5vw'}}>Because of all the advantages that outsourcing staff augmentation has to offer, companies of all kinds are turning to it. The financial savings from outsourcing are among its most important benefits. Employing staff augmentation allows businesses to save money on recruiting, onboarding, and benefiting full-time staff members. </p>
// // </div>
// // <div class="div22"> 
// // <img src={dpoback} alt="" className='dpoimg'/>
// // </div>
// // </div>

// // <div className="benifitscantainer">
// //   <div className="staffleftside">
// //     <img src={staffbenifit} alt="" className='staffbenifitstructurebg' />
// //   </div>
// //   <div className="staffrightside">
// //     <div className="rightside-wrapper">
// //       <div class="grid-item">Achieve seamless scalability for your projects with staff augmentation, allowing your team to flexibly expand or contract based on project requirements, eliminating the challenges and costs associated with managing a fixed in-house workforce.</div>
// //       <div class="grid-item">Tap into a reservoir of highly skilled professionals with specialized knowledge across diverse domains, ensuring that your projects benefit from the latest industry insights and best practices without the need for extensive training or recruitment efforts.</div>
// //       <div class="grid-item">Concentrate on your core business functions by entrusting staffing and resource management to your outsourcing partner. This strategic approach allows your in-house team to dedicate more time and effort to mission-critical tasks, driving overall business growth</div>
// //       <div class="grid-item">Boost project efficiency, productivity, and time-to-market with a diverse and experienced workforce. By mitigating the risks associated with traditional hiring and personnel management, staff augmentation ensures the delivery of high-quality work, drawing on the varied backgrounds and experiences of outsourced professionals.</div>
// //     </div>
// //   </div>
// // </div>


// //    <div className="contactform">
// //      <ContactForm/>
// //       </div>
      
// //       </div>


// <div className="dpocontainer">
// {/* first row start */}
// <div className="dpofirstrow">
//   <div className="dpofirstrowcol1">
//     <h1 className='dpomaintitle1'>Staff Augmentation Officer</h1>
//     <p className='listtitle2'>
//     Staff augmentation enables swift workforce scaling for project needs but may lead to higher long-term labor costs and knowledge gaps. Onboarding complexities can hinder the integration of external talent, impacting efficiency. Project management faces challenges like increased costs and potential lack of internal knowledge. Balancing the benefits with these considerations is vital for successful utilization of staff augmentation services.

//     </p>
//   </div>
//   <div className="dpofirstrowcol2">
//     <img src={upper} alt="" className='staffimg' />
//   </div>
// </div>
//   {/* first row End */}
//     {/* Second row start */}
// <div className="dposecondrow">
//   <div className="dposecondrowcolumn1">
//     <h1 className='dpomaintitle2'>What is Staff Agumentation as a Service?</h1>
//     <p className='dposubtitle2'> Increase the performance of your team by utilizing our staff augmentation services. Our group of skilled experts can help your company with a range of duties, including project management, software development, and quality control. We can deliver professionals to match your company goals and collaborate with your current team through flexible employment options. By utilizing our talented workforce, you may save time and money while streamlining your processes and achieving your objectives.</p>
//   </div>
//   <div className="dposecondrowcolumn2">
//     <img src={need} alt="" className='dpofirstimg'/>
//   </div>
// </div>
//    {/* Second row End */}
//         {/* Third row start */}
//         <div className="dpothirdrow">
//       <div className="dpothirdrowcolumn1">
//         <img src={bg} alt="" className='dpofirstimg2'/>
//       </div>
//       <div className="dpothirdrowcolumn2">
//         <h1 className='dpomaintitle1'>  Safeguarding Data with Outsourced DPO Excellence</h1>
//         <p className='dposubtitle1'>Article 37 of General Data Protection Regulation (GDPR) requires certain organizations (whether controllers or processors) to appoint a Data Privacy Officer (DPO) – also known as a Data Protection Officer (DPO). 

// To achieve your business objectives and fulfill your legal obligations, without any hindrance having a DPO who can cater to your needs is vital. With DPO as a service, experts in the field can fill the role for your organization, whatever your sector in Fast, scalable, and professional manner without the hassle of providing training and incurring costs of hiring the right talent!  </p>

       
//       </div>
//     </div>
//       {/* Third row End */}


//       <div className="gdprfifthrow">
//         <div className="gdprfifthrowcol">
//         <div class="gdpranimation2" ref={animationRef}>
//           <div className="maintitlegdpr" style={{paddingTop:'50px'}}>
// <h1><center className='maintitle4' >Benifits of<br/>  Staff Augmentation Officer</center></h1></div>
//    <div class="gdprbox gdprbox1"><center> <h3 className='gdpranimationText'>Seamless Scalability: </h3> </center> <p className='phsubtitle3'>Achieve flexible workforce expansion or contraction based on project needs, eliminating challenges and costs associated with managing a fixed in-house workforce. This ensures adaptability to changing cybersecurity demands.
// </p></div>  
//       <div class="gdprrslide-tr"><center> <h3 className='gdpranimationText'>Access to Specialized Skills:</h3> </center> <p className='phsubtitle3'>Tap into a reservoir of highly skilled cybersecurity professionals with specialized knowledge across diverse domains. This access ensures that projects benefit from the latest industry insights and best practices without extensive training or recruitment efforts.</p></div>
//       <div class="gdprrslide-right"><center><h3 className='gdpranimationText'>Focus on Core Functions: </h3> </center> <p className='phsubtitle3'> Concentrate on core business functions by outsourcing staffing and resource management. This strategic approach allows the in-house team to dedicate more time and effort to mission-critical tasks, fostering overall business growth.</p></div>
//       <div class="gdprrslide-left"><center><h3 className='gdpranimationText'>Enhanced Efficiency and Productivity: </h3> </center> <p className='phsubtitle3'>Boost project efficiency, productivity, and time-to-market with a diverse and experienced cybersecurity workforce. Staff augmentation mitigates risks associated with traditional hiring, ensuring the delivery of high-quality work by leveraging the varied backgrounds.</p></div>
//       <div class="gdprrslide-tl"><center><h3 className='gdpranimationText'>Adaptability to Advanced Strategies: </h3> </center> <p className='phsubtitle3'>Cybersecurity staff augmentation allows organizations to adapt to advanced cybersecurity strategies, providing the necessary expertise without expanding the permanent payroll.</p></div>
//    </div>
//         </div>
//       </div>

// <div class="cisofifthrow">
//     <div className="cisofifthrowcol1"><h1 className='cisomaintitle5'>Reasons for Selecting Privacy Pro Consulting </h1></div>
//     <div className="cisofifthrowcol2">
//         <div class="reason-card">
//                     <div class="reason-image">
//                       <div className="reasonimgcol1"><PersonOutlineOutlinedIcon style={{ fontSize: 60 }}/></div>
//                       <div className="reasonimgcol2">  <h3>Expert Consultants</h3></div>
//                     </div>
//                     <div class="reason-content">
//                         <p class="reason-desc">
//                       <ul>
//                       <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our team has tons of experience making personalized privacy plans.</li>
//                       <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We cover everything - from moving data across borders to managing user requests and making sure your privacy policies are top-notch.</li>
//                       <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We've been around the block and know the ins and outs of privacy laws, so you're in good hands.</li>
//                       <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We work closely with you to understand what you need, ensuring our plans fit your unique business.</li>
//                       </ul>
//                         </p>
//                     </div>
//         </div> 

//         <div class="reason-card">
//                     <div class="reason-image">
//                       <div className="reasonimgcol1"><SupportAgentOutlinedIcon style={{ fontSize: 60 }}/></div>
//                       <div className="reasonimgcol2">  <h3>Increase in Consumer Trust</h3></div>
//                     </div>
//                     <div class="reason-content">
//                         <p class="reason-desc">
//                         <ul>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> When you're good with privacy, people trust you more.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We make sure your customers know exactly how you're taking care of their info.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Following good privacy rules isn't just about following the law; it's about being the kind of business people want to trust.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We help you build that trust, and that trust can give you an edge over the other guys.</li>
//                         </ul>
//                         </p>
//                     </div>
//         </div> 

//         <div class="reason-card">
//                     <div class="reason-image">
//                       <div className="reasonimgcol1"><AdminPanelSettingsOutlinedIcon style={{ fontSize: 60 }}/></div>
//                       <div className="reasonimgcol2">  <h3>Comprehensive Services</h3></div>
//                     </div>
//                     <div class="reason-content">
//                         <p class="reason-desc">
//                         <ul>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We handle everything about keeping your data safe - from the start to forever.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our services cover checks on your privacy health, fixing things up, and keeping a watchful eye on everything.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> You get a complete package that proves you're following all the rules and keeping things safe.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We're not just about today; we're ready for whatever privacy changes come tomorrow.</li>
//                         </ul>
//                         </p>
//                     </div>
//         </div> 

//         <div class="reason-card">
//                     <div class="reason-image">
//                       <div className="reasonimgcol1"><PriceChangeOutlinedIcon style={{ fontSize: 60 }}/></div>
//                       <div className="reasonimgcol2">  <h3>Cost Effectiveness</h3></div>
//                     </div>
//                     <div class="reason-content">
//                         <p class="reason-desc">
//                         <ul>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We believe in being smart with your money.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our plans are not just good; they're good for your wallet too.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We look at where we can save you money while still doing a top-notch job.</li>
//                         <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our clear prices and clever solutions mean you get more bang for your buck.</li><br /><br />
//                         </ul>
//                         </p>
//                     </div>
//         </div> 

        
             
//             </div>
//             </div>
// {/* Contact form start */}
// <div className="cisocontact-container">
//   <ContactForm />
// </div>
// {/* Contact form End     */}
// </div>
// // Tprm Main Container End

//   )
// }

import React, { useEffect, useRef } from 'react';
import '../../Services/PrivacyComplience/staff.css';
import dpoback from '../../Images/staffagumentation.jpeg';
import bg from '../../Images/staffagumentation.jpeg'

import upper from '../../Images/staffbg.png'
import ContactForm from '../../Component/ContactForm';
import staffbenifit from '../../Images/staffbenifitstructure.jpg'
import need from '../../Images/staffasaservice.jpg'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function StaffAugumentation() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const animationRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.30,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationRef.current.classList.add('start-animation');
        } else {
          animationRef.current.classList.remove('start-animation');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);
  return (
//     <div className="dpocontainer">
//        <div class="upperstaff">
// <img src={upper} alt=""  className='bgupperstaff'/>

// </div>
// <div className="staff">
//       <div className="staff-grid-container">
//         <div className="staff-grid-row staff-first-row">
//           <div className="staff-grid-column staff-column-1" style={{color:'black'}}> 
//           <h1  >           <center style={{fontSize:'40px'}}>Staff Agumentation as a Service</center>
//         </h1>
//         <p style={{ paddingTop: '20px', }} className='dpotext'>
//         Increase the performance of your team by utilizing our staff augmentation services. Our group of skilled experts can help your company with a range of duties, including project management, software development, and quality control. We can deliver professionals to match your company goals and collaborate with your current team through flexible employment options. By utilizing our talented workforce, you may save time and money while streamlining your processes and achieving your objectives.
//          </p>
//           </div>
//           <div className="dpo-grid-column staff-column-2"> 
//           <img src={column2} alt="" className='staffasaservice' />        
//           </div>       
//         </div>      
//         </div>      
//       </div>

//       <div class="parentstaff" style={{paddingTop:'10vh'}}>
        
// <div class="div1"> <h1 style={{marginTop:'10vh',color:'black',marginLeft:'-5vw',fontSize:'40px'}} > Why would your business outsource staff augmentation?</h1>
//       <p style={{color:'black',marginLeft:'-5vw'}}>Because of all the advantages that outsourcing staff augmentation has to offer, companies of all kinds are turning to it. The financial savings from outsourcing are among its most important benefits. Employing staff augmentation allows businesses to save money on recruiting, onboarding, and benefiting full-time staff members. </p>
// </div>
// <div class="div22"> 
// <img src={dpoback} alt="" className='dpoimg'/>
// </div>
// </div>

// <div className="benifitscantainer">
//   <div className="staffleftside">
//     <img src={staffbenifit} alt="" className='staffbenifitstructurebg' />
//   </div>
//   <div className="staffrightside">
//     <div className="rightside-wrapper">
//       <div class="grid-item">Achieve seamless scalability for your projects with staff augmentation, allowing your team to flexibly expand or contract based on project requirements, eliminating the challenges and costs associated with managing a fixed in-house workforce.</div>
//       <div class="grid-item">Tap into a reservoir of highly skilled professionals with specialized knowledge across diverse domains, ensuring that your projects benefit from the latest industry insights and best practices without the need for extensive training or recruitment efforts.</div>
//       <div class="grid-item">Concentrate on your core business functions by entrusting staffing and resource management to your outsourcing partner. This strategic approach allows your in-house team to dedicate more time and effort to mission-critical tasks, driving overall business growth</div>
//       <div class="grid-item">Boost project efficiency, productivity, and time-to-market with a diverse and experienced workforce. By mitigating the risks associated with traditional hiring and personnel management, staff augmentation ensures the delivery of high-quality work, drawing on the varied backgrounds and experiences of outsourced professionals.</div>
//     </div>
//   </div>
// </div>


//    <div className="contactform">
//      <ContactForm/>
//       </div>
      
//       </div>


<div className="dpocontainer">
{/* first row start */}
<div className="dpofirstrow">
  <div className="dpofirstrowcol1">
    <h1 className='dpomaintitle1'>Staff Augmentation Officer</h1>
    <p className='listtitle2'>
    Staff augmentation enables swift workforce scaling for project needs but may lead to higher long-term labor costs and knowledge gaps. Onboarding complexities can hinder the integration of external talent, impacting efficiency. Project management faces challenges like increased costs and potential lack of internal knowledge. Balancing the benefits with these considerations is vital for successful utilization of staff augmentation services.

    </p>
  </div>
  <div className="dpofirstrowcol2">
    <img src={upper} alt="" className='staffimg' />
  </div>
</div>
  {/* first row End */}
    {/* Second row start */}
<div className="dposecondrow">
  <div className="dposecondrowcolumn1">
    <h1 className='dpomaintitle2'style={{marginTop:'-8vh'}}>What is Staff Agumentation as a Service?</h1>
    <p className='dposubtitle2'> Increase the performance of your team by utilizing our staff augmentation services. Our group of skilled experts can help your company with a range of duties, including project management, software development, and quality control. We can deliver professionals to match your company goals and collaborate with your current team through flexible employment options. By utilizing our talented workforce, you may save time and money while streamlining your processes and achieving your objectives.</p>
  </div>
  <div className="dposecondrowcolumn2">
    <img src={need} alt="" className='dpofirstimg'/>
  </div>
</div>
   {/* Second row End */}
        {/* Third row start */}
        <div className="dpothirdrow">
      <div className="dpothirdrowcolumn1">
        <img src={bg} alt="" className='dpofirstimg2'/>
      </div>
      <div className="dpothirdrowcolumn2">
        <h1 className='dpomaintitle1'style={{marginTop:'-10vh'}}>  Safeguarding Data with Outsourced DPO Excellence</h1>
        <p className='dposubtitle1'>Article 37 of General Data Protection Regulation (GDPR) requires certain organizations (whether controllers or processors) to appoint a Data Privacy Officer (DPO) – also known as a Data Protection Officer (DPO). 

To achieve your business objectives and fulfill your legal obligations, without any hindrance having a DPO who can cater to your needs is vital. With DPO as a service, experts in the field can fill the role for your organization, whatever your sector in Fast, scalable, and professional manner without the hassle of providing training and incurring costs of hiring the right talent!  </p>

       
      </div>
    </div>
      {/* Third row End */}

      <div className="fiftrowsub1">
  <div className="fiftrowsub1col1">
    <h1 className="fiftrowsub1col1text"><center>Benefits of<br/>  Staff Augmentation Officer</center></h1>
  </div>
</div>
      <div className="gdprfifthrow">
        <div className="gdprfifthrowcol">
        <div class="gdpranimation2" ref={animationRef}>
         
   <div class="gdprbox gdprbox1"><center> <h3 className='gdpranimationText'>Seamless Scalability: </h3> </center> <p className='phsubtitle3'>Achieve flexible workforce expansion or contraction based on project needs, eliminating challenges and costs associated with managing a fixed in-house workforce. This ensures adaptability to changing cybersecurity demands.
</p></div>  
      <div class="gdprrslide-tr"><center> <h3 className='gdpranimationText'>Access to Specialized Skills:</h3> </center> <p className='phsubtitle3'>Tap into a reservoir of highly skilled cybersecurity professionals with specialized knowledge across diverse domains. This access ensures that projects benefit from the latest industry insights and best practices without extensive training or recruitment efforts.</p></div>
      <div class="gdprrslide-right"><center><h3 className='gdpranimationText'>Focus on Core Functions: </h3> </center> <p className='phsubtitle3'> Concentrate on core business functions by outsourcing staffing and resource management. This strategic approach allows the in-house team to dedicate more time and effort to mission-critical tasks, fostering overall business growth.</p></div>
      <div class="gdprrslide-left"><center><h3 className='gdpranimationText'>Enhanced Efficiency and Productivity: </h3> </center> <p className='phsubtitle3'>Boost project efficiency, productivity, and time-to-market with a diverse and experienced cybersecurity workforce. Staff augmentation mitigates risks associated with traditional hiring, ensuring the delivery of high-quality work by leveraging the varied backgrounds.</p></div>
      <div class="gdprrslide-tl"><center><h3 className='gdpranimationText'>Adaptability to Advanced Strategies: </h3> </center> <p className='phsubtitle3'>Cybersecurity staff augmentation allows organizations to adapt to advanced cybersecurity strategies, providing the necessary expertise without expanding the permanent payroll.</p></div>
   </div>
        </div>
      </div>

<div class="cisofifthrow">
    <div className="cisofifthrowcol1"><h1 className='cisomaintitle5'>Reasons for Selecting Privacy Pro Consulting </h1></div>
    <div className="cisofifthrowcol2">
        <div class="reason-card">
                    <div class="reason-image">
                      <div className="reasonimgcol1"><PersonOutlineOutlinedIcon style={{ fontSize: 60 }}/></div>
                      <div className="reasonimgcol2">  <h3>Expert Consultants</h3></div>
                    </div>
                    <div class="reason-content">
                        <p class="reason-desc">
                      <ul>
                      <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our team has tons of experience making personalized privacy plans.</li>
                      <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We cover everything - from moving data across borders to managing user requests and making sure your privacy policies are top-notch.</li>
                      <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We've been around the block and know the ins and outs of privacy laws, so you're in good hands.</li>
                      <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We work closely with you to understand what you need, ensuring our plans fit your unique business.</li>
                      </ul>
                        </p>
                    </div>
        </div> 

        <div class="reason-card">
                    <div class="reason-image">
                      <div className="reasonimgcol1"><SupportAgentOutlinedIcon style={{ fontSize: 60 }}/></div>
                      <div className="reasonimgcol2">  <h3>Increase in Consumer Trust</h3></div>
                    </div>
                    <div class="reason-content">
                        <p class="reason-desc">
                        <ul>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> When you're good with privacy, people trust you more.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We make sure your customers know exactly how you're taking care of their info.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Following good privacy rules isn't just about following the law; it's about being the kind of business people want to trust.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We help you build that trust, and that trust can give you an edge over the other guys.</li>
                        </ul>
                        </p>
                    </div>
        </div> 

        <div class="reason-card">
                    <div class="reason-image">
                      <div className="reasonimgcol1"><AdminPanelSettingsOutlinedIcon style={{ fontSize: 60 }}/></div>
                      <div className="reasonimgcol2">  <h3>Comprehensive Services</h3></div>
                    </div>
                    <div class="reason-content">
                        <p class="reason-desc">
                        <ul>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We handle everything about keeping your data safe - from the start to forever.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our services cover checks on your privacy health, fixing things up, and keeping a watchful eye on everything.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> You get a complete package that proves you're following all the rules and keeping things safe.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We're not just about today; we're ready for whatever privacy changes come tomorrow.</li>
                        </ul>
                        </p>
                    </div>
        </div> 

        <div class="reason-card">
                    <div class="reason-image">
                      <div className="reasonimgcol1"><PriceChangeOutlinedIcon style={{ fontSize: 60 }}/></div>
                      <div className="reasonimgcol2">  <h3>Cost Effectiveness</h3></div>
                    </div>
                    <div class="reason-content">
                        <p class="reason-desc">
                        <ul>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We believe in being smart with your money.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our plans are not just good; they're good for your wallet too.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We look at where we can save you money while still doing a top-notch job.</li>
                        <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our clear prices and clever solutions mean you get more bang for your buck.</li><br /><br />
                        </ul>
                        </p>
                    </div>
        </div> 

        
             
            </div>
            </div>
{/* Contact form start */}
<div className="cisocontact-container">
  <ContactForm />
</div>
{/* Contact form End     */}
</div>
// Tprm Main Container End

  )
}