import React, { useEffect, useRef } from 'react';
import '../../Services/PrivacyComplience/dpo.css';
import dpoback from '../../Images/stickerrinforisk1.png'
import bg from '../../Images/dpoback.png'
import need from '../../Images/As a Service.png'
import upper from '../../Images/9Z_2102.w020.n001.1044B.p15.1044.jpg'
import ContactForm from '../../Component/ContactForm';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import ciso from '../../Images/cio-ciso-tt.png'
import cisoneed from '../../Images/ciconeed.png'
import firstimg from '../../Images/ciso-job.jpg'
import img2 from '../../Images/cisoimage1.png'
import img3 from '../../Images/Role-of-CISOs-in-Organizations-1-min-768x422.jpg'
export default function DPOservice() {
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
//     <div className="dpocontainer" >
//        <div class="upper">
// <img src={upper} alt=""  className='bgupper'/>
// </div>
// <div className="con">
//       <div className="dpo-grid-container">
//         <div className="dpo-grid-row dpo-first-row">
//           <div className="dpo-grid-column dpo-column-1" style={{color:'black'}}> 
//           <h3 style={{ paddingTop: '50px', fontSize: '42px' }}>           <center style={{fontSize:'30px'}}>DPO as a Service</center>
//         </h3>
//         <p style={{ paddingTop: '20px', }} className='dpotext'>
//            As an endeavor of Privacy Pioneers & Experts, we deliver comprehensive solutions to address all your privacy and digital security needs.

//            In today's tech-driven world, safeguarding the confidentiality and digital safety of your users has never been more vital. This is where our seasoned and devoted team excels. Collaborate with Privacy Pro to ensure your business consistently leads the way in data confidentiality advisory and cybersecurity advisory services.
  
//           We'll assist you in devising strategies, rectifying vulnerabilities, creating, executing, and sustaining robust confidentiality and cybersecurity measures using our Data Privacy Services that conform to all sector-specific compliance standards.
  
//           Don't settle for mere compliance—differentiate yourself by elevating privacy to your Unique Selling Proposition (USP). Here are the offerings we provide:
//          </p>
//           </div>
//           <div className="dpo-grid-column dpo-column-2">         
//           </div>       
//         </div>      
//         </div>      
//       </div>

//       <div class="parent" style={{paddingTop:'10vh'}}>
        
// <div class="div1"> <h1 style={{color:'black',marginLeft:'-5vw'}}><center style={{fontSize:'30px'}}> Safeguarding Data with <br />Outsourced DPO Excellence</center></h1>
//       <p style={{color:'black',marginLeft:'-5vw'}}>Article 37 of General Data Protection Regulation (GDPR) requires certain organizations (whether controllers or processors) to appoint a Data Privacy Officer (DPO) – also known as a Data Protection Officer (DPO). 

// To achieve your business objectives and fulfill your legal obligations, without any hindrance having a DPO who can cater to your needs is vital. With DPO as a service, experts in the field can fill the role for your organization, whatever your sector in Fast, scalable, and professional manner without the hassle of providing training and incurring costs of hiring the right talent! </p>
// </div>
// <div class="div2"> 
// <img src={dpoback} alt="" className='dpoimg2'/>
// </div>
// </div>

// <div class="animation" ref={animationRef}>
// <h1 style={{color:'navy',paddingBottom:'60vh'}}><center className='tt'>Benifits of<br/> Data Protection Officer</center></h1>
//    <div class="box box1"><center> <h3 className='animationText'>Continuous Support </h3> </center> <p>As a DPO, Service providers give continuing assistance to guarantee that businesses stay in compliance with changing data privacy laws. One way to do this is to keep an eye on modifications to data protection regulations and to provide updates on any changes that might have an impact on an organization's data privacy program.</p></div>
   
//       <div class="slide-tr"><center> <h3 className='animationText'>Flexibility</h3> </center> <p>As a DPO, Service suppliers provide a spectrum of service levels, ranging from fundamental compliance evaluations to continuous oversight and assistance. Because of this, companies can customize their data privacy program to fit their budget and unique requirements.</p></div>
//       <div class="slide-right"><center><h3 className='animationText'>Reduced Liability </h3> </center> <p> Using a DPO-as-a-Service provider can assist in lowering the financial and legal risks related to data breaches and other instances involving privacy violations. The DPO can offer advice on how to reduce risks and react quickly and efficiently to occurrences.</p></div>
//       <div class="slide-left"><center><h3 className='animationText'>Enhanced Security </h3> </center> <p>A DPO acting as a service provider can assist in locating and resolving security flaws in the data collecting, storage, and sharing procedures used by an organization. This may entail suggesting technological safeguards for data, such as access controls and encryption.</p></div>
//       <div class="slide-tl"><center><h3 className='animationText'>Focus on Business Growth </h3> </center> <p>Organizations might feel more at ease knowing that their data protection responsibilities are being handled by qualified experts when they outsource DPO duties. By doing this, stress levels can be lowered and businesses can concentrate on their main activities.</p></div>
//    </div>
//    <div className="contactform">
//      <ContactForm/>
//       </div>
      
//       </div>


<div className="dpocontainer">
{/* first row start */}
<div className="dpofirstrow">
  <div className="dpofirstrowcol1">
    <h1 className='dpomaintitle1'>Data Protection Officer</h1>
    <p >
    <ol className='listtitle2'>
  <li>
    <strong className='listtitle'>Guardian of Privacy:</strong>
    <ul className='listtitle2'>
      <li>DPO ensures confidentiality and security of sensitive information.
   Indispensable in today's data-driven world.</li>
    </ul>
  </li>

  <li>
    <strong className='listtitle'>Expert Safeguard:</strong>
    <ul >
      <li>Implements data protection policies, locates, and protects personal data.
    Ensures legal compliance and safeguards against potential threats.</li>
    </ul>
  </li>

  <li>
    <strong className='listtitle'>Strategic Leadership:</strong>
    <ul className='listtitle2'>
      <li>Reports to top management, establishes robust data protection strategies.
      Integral to organizational accountability and governance.</li>
    </ul>
  </li>

  <li>
    <strong className='listtitle'>Risk Mitigation Expert:</strong>
    <ul className='listtitle2'>
      <li>Assesses risks, crafts data-sharing agreements, balances collaboration and security.
   Navigates complexities of information exchange while upholding data protection principles.</li>
    </ul>
  </li>

 
</ol>

    </p>
  </div>
  <div className="dpofirstrowcol2">
    <img src={upper} alt="" className='dpoimg' />
  </div>
</div>
  {/* first row End */}
    {/* Second row start */}
<div className="dposecondrow">
  <div className="dposecondrowcolumn1">
    <h1 className='dpomaintitle2'style={{marginTop:'-8vh'}}>What is DPO as a Service?</h1>
    <p className='dposubtitle2'> As an endeavor of Privacy Pioneers & Experts, we deliver comprehensive solutions to address all your privacy and digital security needs.

           In today's tech-driven world, safeguarding the confidentiality and digital safety of your users has never been more vital. This is where our seasoned and devoted team excels. Collaborate with Privacy Pro to ensure your business consistently leads the way in data confidentiality advisory and cybersecurity advisory services.
  
          We'll assist you in devising strategies, rectifying vulnerabilities, creating, executing, and sustaining robust confidentiality and cybersecurity measures using our Data Privacy Services that conform to all sector-specific compliance standards.
  
          Don't settle for mere compliance—differentiate yourself by elevating privacy to your Unique Selling Proposition (USP). Here are the offerings we provide:</p>
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


      <div className="gdprfifthrow">
        <div className="gdprfifthrowcol">
        <div class="gdpranimation2" ref={animationRef}>
          <div className="maintitlegdpr">
<h1><center className='maintitle4'>Benifits of<br/>  Data Protection Officer</center></h1></div>
   <div class="gdprbox gdprbox1"><center> <h3 className='gdpranimationText'>Continuous Support : </h3> </center> <p className='phsubtitle3'>As a DPO, Service providers give continuing assistance to guarantee that businesses stay in compliance with changing data privacy laws. One way to do this is to keep an eye on modifications to data protection regulations and to provide updates on any changes that might have an impact on an organization's data privacy program.
</p></div>  
      <div class="gdprrslide-tr"><center> <h3 className='gdpranimationText'>Flexibility :</h3> </center> <p className='phsubtitle3'>As a DPO, Service suppliers provide a spectrum of service levels, ranging from fundamental compliance evaluations to continuous oversight and assistance. Because of this, companies can customize their data privacy program to fit their budget and unique requirements.</p></div>
      <div class="gdprrslide-right"><center><h3 className='gdpranimationText'>Reduced Liability : </h3> </center> <p className='phsubtitle3'>Using a DPO-as-a-Service provider can assist in lowering the financial and legal risks related to data breaches and other instances involving privacy violations. The DPO can offer advice on how to reduce risks and react quickly and efficiently to occurrences.</p></div>
      <div class="gdprrslide-left"><center><h3 className='gdpranimationText'>Enhanced Security: </h3> </center> <p className='phsubtitle3'>A DPO acting as a service provider can assist in locating and resolving security flaws in the data collecting, storage, and sharing procedures used by an organization. This may entail suggesting technological safeguards for data, such as access controls and encryption.</p></div>
      <div class="gdprrslide-tl"><center><h3 className='gdpranimationText'>Focus on Business Growth: </h3> </center> <p className='phsubtitle3'>Organizations might feel more at ease knowing that their data protection responsibilities are being handled by qualified experts when they outsource DPO duties. By doing this, stress levels can be lowered and businesses can concentrate on their main activities.</p></div>
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
