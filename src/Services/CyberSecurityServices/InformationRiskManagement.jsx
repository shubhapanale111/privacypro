import React,{useEffect} from 'react';
import '../../Services/CyberSecurityServices/inforisk.css';
import '../../Services/PrivacyAssessments/productassessment.css';
import ContactForm from '../../Component/ContactForm';
import firstimg from '../../Images/risk-gamble-opportunity-swot-weakness-unsure-concept_53876-122989.jpg'
import stickerinforisk1 from '../../Images/stickerrinforisk1.png'
import infoneed from '../../Images/inforiskneed.jpg'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
export default function InformationRiskManagement() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="infocontainer">
        {/* First row start */}
      <div className="infofirstrow">
          {/* First row  colum 1 start */}
        <div className="infofirstrowcol1">
    <h1 className='infomaintitle1'>Information Risk Management</h1>
 <p style={{paddingTop:'10px',color:'white'}}> Information risk management encompasses the comprehensive array of tools, methodologies, and protocols that an organization employs to mitigate vulnerabilities, hazards, and potential repercussions stemming from inadequate data security measures. </p>
 <p style={{paddingTop:'10px',color:'white'}}>The spectrum of threats faced by enterprises includes supply chain incursions, ransomware attacks, data breaches, denial-of-service assaults, and various other vulnerabilities, often exploiting weaknesses within the company's IT infrastructure.  </p>
 <p style={{paddingTop:'10px',color:'white'}}>The strategic deployment of risk management strategies is imperative to safeguard the integrity and confidentiality of sensitive information, thereby fortifying the overall resilience of the organizational framework.
</p>
 <p style={{paddingTop:'10px',color:'white'}}>  </p>
        </div>
          {/* First row  colum 1 End */}
            {/* First row  colum 2 start */}
        <div className="infofirstrowcol2">
          <img src={firstimg} alt=""  className='infoimg'/>
        </div>
         {/* First row  colum 2 start */}
      </div>
     {/* First row End */}
         {/* Second row start */}
    <div className="infosecondrow">
       {/* Second row  colum 1 start */}
      <div className="infosecondrowcolumn1">
        <h1 className='cisomaintitle2'style={{marginTop:'-9vh'}}>What is Risk Management for Information?</h1>
        <p className='cisosubtitle2'>The information risk management process within the realm of cybersecurity involves discerning the pertinent data requiring protection and delineating the methods of safeguarding it. This intricate process necessitates the application of a diverse set of tools and strategies aimed at the identification, assessment, mitigation, and management of inherent risks associated with data handling within an organization. Despite the diverse sources and potential consequences of information security risks, a common foundational approach is typically adopted.</p>
        <p className='cisosubtitle2' >At the core of any comprehensive information risk management program lies a continual process of risk assessment. This entails establishing the organization's risk tolerance, maintaining vigilance regarding potential threats and vulnerabilities, objectively evaluating existing control measures, and instituting corrective strategies to address identified vulnerabilities. The resultant framework for information risk management is inherently focused on establishing a robust and adaptive security posture.  </p>
      </div>
       {/* Second row  colum 1 End*/}
        {/* Second row  colum 2 start */}
      <div className="infosecondrowcolumn2">
        <img src={stickerinforisk1} alt="" className='infosecondimg'/>
      </div>
       {/* Second row  colum 2 End */}
    </div>
      {/* Second row End */}
       {/* Third Row start */}
      <div className="infothirdrow">
         {/* Third row  colum 1 start */}
      <div className="infothirdrowcol1">      <img src={infoneed} alt=""  className='infothirdimg'/>
      </div>
       {/* Third row  colum 1 End */}
        {/* Third row  colum 2 start */}
        <div className="infothirdrowcol2"> <h1 className='cisomaintitle1'style={{marginTop:'-10vh'}}>What makes information risk management so important to your company?</h1>
 <p className='cisosubtitle1' style={{color:'white'}}>Cyberattacks put businesses and organizations in every industry at significant risk. Nonetheless, cybersecurity continues to be a topic that requires careful thought as technology advances. However, a lot of people's cybersecurity preparations are weak and incomplete. Common weaknesses that increase a company's vulnerability to attack include noncompliance with industry standards, inadequate risk assessment, and reduced risk mitigation. Businesses will inevitably face the risk of unfavorable events that damage their brand and incur costly fines. Thus, establishing a strong cybersecurity risk management program is not an option but rather a need for business continuation.
</p></div>
 {/* Third row  colum 2 End */}
      </div>
       {/* Third row  End */}
    
   
<div class="infofourthrow">
  <div class="infofourthrowcol1">
  <h1 className='infomaintitle4' style={{marginTop:'-5vh'}}>Benefits (advantages) of information risk management  </h1>

<p className='infosubtitle6'>
  <ol>
    <li>
      <strong className='infosubtitle4'>Information risk management:</strong>Information risk management may result in cost savings with better structures, controls, and security levels.
    </li>
    <li>
      <strong className='infosubtitle4'>Business continuity:</strong>Information risk management includes the aspect of business continuity, or maintaining the company's operations in unforeseen or critical circumstances.
    </li>
    <li><strong className='infosubtitle4'>Cost-Efficient Risk Management:</strong>Early recognition of privacy threats during design minimizes post-implementation expenses, emphasizing the financial benefits of proactive assessments.
    </li>
  
  </ol>
</p>

  </div>
  <div class="infofourthrowcol2">
   <div className="infosubdiv1">
   <h3 className='infosubtitle5'>Understanding risk management:</h3>
<p className='infosubtitle6'>An understanding of risk management provides you with the confidence and clarity needed to make better business decisions based on real risks rather than hearsay or fear.</p>


   </div>
   <div className="infosubdiv2">

   <h3 className='infosubtitle5'>Effective information risk management:</h3>
  <p className='infosubtitle6'>Effective information risk management reduces the likelihood of a catastrophic information security incident. It will help you identify your risks and the actions required to stop a breach.</p>
   </div>
   <div className="infosubdiv3">

   <h3 className='infosubtitle5'>Strong Information Risk Management:</h3>
  <p className='infosubtitle6'>
  Effective information risk management provides the company with a competitive advantage by increasing trust, which enhances the reputation of the brand and increases sales.</p>
   </div>
   <div className="infosubdiv4">

   <h3 className='infosubtitle5'>Organizations get to prepare for cyberattacks:</h3>
  <p className='infosubtitle6'>
  Using a corporate IT network to identify and evaluate potential vulnerabilities helps organizations become ready for cyberattacks and minimize their impact, should one occur.</p>
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

            
                 
                </div></div>
  {/* Contact form start */}
    <div className="cisocontact-container">
      <ContactForm />
    </div>
{/* Contact form End     */}
    </div>
  );
}