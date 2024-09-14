import React,{useEffect} from 'react';
import '../../Services/PrivacyAssessments/privacyrisk.css';
import ContactForm from '../../Component/ContactForm';
// import riskm from '../../Images/riskman.jpg'
import image1 from '../../Images/privacyriskassessment.png'
import image2 from '../../Images/riskprivacy.jpg'
import image3 from '../../Images/riskmanagement2.jpg'
import image4 from '../../Images/riskman.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
export default function PrivacyRiskAssessment() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
// Row 1 Start
<div className="vaptcontainer">
  <div className="vaptfirstrow">
    {/* Column 1 */}
    <div className="vaptcolumn1">
      <h1 className='privacyriskmaintitle1'>Privacy Risk Assessment</h1>
      <p style={{ paddingTop: '10px',color:'white' }}>
      Conducting Privacy Risk Assessments is a crucial next step for a company once it has a basic grasp of its data gathering, usage, and sharing. Through these evaluations, the company is better able to recognize and understand the possible privacy issues that may arise in the future from its data practices for both specific customers and the company as a whole. <p>Once a company establishes a foundational understanding of its data practices, engaging in privacy risk assessments becomes a crucial next step. These assessments enable the company to proactively identify and comprehend potential privacy issues that may emerge, both on an individual customer level and across the organization. </p>
      </p>
    </div>
    {/* Column 2 */}
    <div className="vaptcolumn2">
      <img src={image1} alt="" className='privacyriskimage1' />
    </div>
  </div>
{/* // Row 1 End

// Row 2 Start */}
  <div className="vaptsecondrow">
    {/* Column 1 */}
    <div className="vaptsecondrowcolumn1">
      <h1 className='cisomaintitle2'style={{marginTop:'-8vh'}}>What is an assessment of privacy risks?</h1>
      <p className='cisosubtitle2'>
     A privacy risk assessment's main objective is to serve as a system of early warning for the identification of privacy problems. Through the implementation of these assessments, organizations can augment the information at their disposal to enable well-informed decision-making, circumvent errors in privacy compliance that could prove costly or humiliating, and furnish proof of their proactive efforts to mitigate privacy risks and issues. 

</p>
<p style={{paddingTop:'10px',color:'black'}}>Our privacy risk evaluations are adaptable to many privacy frameworks and requirements, including   
</p>
<p style={{paddingTop:'10px',color:'black'}}> •	GDPR     •	CCPA  •	NIST Privacy Framework    
</p>

<p style={{paddingTop:'10px',color:'black'}}> •	HIPAA Privacy Rule    
</p>
<p style={{paddingTop:'10px',color:'black'}}> •	SOC Privacy Criteria.  
</p>
<p style={{paddingTop:'10px',color:'black'}}> Our evaluation reports will draw attention to any control gaps and pinpoint crucial areas that need to be addressed in order to abide by the applicable framework or law. Following the evaluation, we will offer thorough recommendations for correction.  
</p>
    
    </div>
    {/* Column 2 */}
    <div className="vaptsecondrowcolumn2">
      <img src={image2} alt="" className='vaptimg2' />
    </div>
  </div>
{/* // Row 2 End

// Row 3 Start */}
  <div className="vaptthirdrow">
    {/* Column 1 */}
    <div className="vaptthirdrowcolumn1">
      <img src={image4} alt="" className='vaptimg3' />
    </div>
    {/* Column 2 */}
    <div className="vaptthirdrowcolumn2">
      <h1 className='cisomaintitle1'style={{marginTop:'-10vh'}}>Why is a privacy risk assessment necessary for your organization?</h1>
      <p className='cisosubtitle1'>
      <p style={{paddingTop:'10px',color:'white'}}>According to 85% of firms, carrying out privacy risk assessments led to better decision-making and enhanced privacy procedures. </p>
<p style={{paddingTop:'10px',color:'white'}}>Data breaches are 50% less common in organizations that regularly do privacy risk assessments.  </p>
<p style={{paddingTop:'10px',color:'white'}}>In the event of a breach, overall expenditures can be lowered by 40%.  </p>
<p style={{paddingTop:'10px',color:'white'}}>Privacy Risk Assessment can help reduce the likelihood of errors or omissions in the implementation of privacy measures, which account for 80% of privacy-related occurrences. </p>

      </p>
    </div>
  </div>
{/* // Row 3 End

// Row 4 Start */}
  <div class="privacyriskfourthrow">
<div className="privacyriskfourthrowcol1">

      <p ><b style={{color:'black'}}>Identification of Risks:</b>&nbsp;</p>
        <p style={{color:'black',paddingTop:'10px'}}>During the first stage, our team meticulously identifies potential risks and vulnerabilities in your current privacy framework. This involves a comprehensive audit of your systems, processes, and data handling practices. </p>

        <p ><b style={{color:'black'}}>Risk Assessment:</b>&nbsp;</p>
        <p style={{color:'black',paddingTop:'10px'}}>Once the risks are identified, we conduct a thorough risk assessment to evaluate the potential impact and likelihood of each risk. This involves analyzing the sensitivity of the data involved, potential threats, and the effectiveness of existing security measures. </p>

        <p ><b style={{color:'black'}}>Risk Mitigation Plan:</b>&nbsp;</p>
        <p style={{color:'black',paddingTop:'10px'}}>Based on the findings from the risk assessment, we develop a customized risk mitigation plan. This plan outlines specific actions and strategies to reduce or eliminate identified risks. Our goal is to enhance your privacy posture and ensure compliance with relevant regulations. </p>

       

</div>
<div className="privacyriskfourthrowcol2">
  <img src={image3} alt="" className='privacyriskimage3'/>
</div>
<div className="privacyriskfourthrowcol3"> <p ><b style={{color:'black'}}>Implementation and Monitoring:</b>&nbsp;</p>
        <p style={{color:'black',paddingTop:'10px'}}>The next step involves implementing the risk mitigation plan. Our experienced team works closely with your organization to execute the necessary changes and enhancements. Throughout this phase, we continuously monitor and assess the effectiveness of the implemented measures. </p>

        <p ><b style={{color:'black'}}>Review and Update Risk Plan:</b>&nbsp;</p>
        <p style={{color:'black',paddingTop:'10px'}}>PrivacyPro Consulting believes in the importance of ongoing improvement. We regularly review and update the risk mitigation plan to adapt to evolving threats and changes in your business environment. This ensures that your privacy strategy remains robust and up-to-date. </p></div>

  </div>
{/* // Row 4 End */}

{/* // Row 5 Start */}
  <div class="cisofifthrow">
    <div className="cisofifthrowcol1">
      <h1 className='cisomaintitle5'>Reasons for Selecting Privacy Pro Consulting </h1>
    </div>
    <div className="cisofifthrowcol2">
      <div class="reason-card">
        {/* Reason 1 */}
        <div class="reason-image">
          <div className="reasonimgcol1"><PersonOutlineOutlinedIcon style={{ fontSize: 60 }} /></div>
          <div className="reasonimgcol2"> <h3>Expert Consultants</h3></div>
        </div>
        <div class="reason-content">
          <p class="reason-desc">
            <ul>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> Our team has tons of experience making personalized privacy plans.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We cover everything - from moving data across borders to managing user requests and making sure your privacy policies are top-notch.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We've been around the block and know the in's and out's of privacy laws, so you're in good hands.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We work closely with you to understand what you need, ensuring our plans fit your unique business.</li>
            </ul>
          </p>
        </div>
      </div>

      <div class="reason-card">
        {/* Reason 2 */}
        <div class="reason-image">
          <div className="reasonimgcol1"><SupportAgentOutlinedIcon style={{ fontSize: 60 }} /></div>
          <div className="reasonimgcol2"> <h3>Increase in Consumer Trust</h3></div>
        </div>
        <div class="reason-content">
          <p class="reason-desc">
            <ul>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> When you're good with privacy, people trust you more.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We make sure your customers know exactly how you're taking care of their info.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> Following good privacy rules isn't just about following the law; it's about being the kind of business people want to trust.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We help you build that trust, and that trust can give you an edge over the other guys.</li>
            </ul>
          </p>
        </div>
      </div>

      <div class="reason-card">
        {/* Reason 3 */}
        <div class="reason-image">
          <div className="reasonimgcol1"><AdminPanelSettingsOutlinedIcon style={{ fontSize: 60 }} /></div>
          <div className="reasonimgcol2"> <h3>Comprehensive Services</h3></div>
        </div>
        <div class="reason-content">
          <p class="reason-desc">
            <ul>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We handle everything about keeping your data safe - from the start to forever.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> Our services cover checks on your privacy health, fixing things up, and keeping a watchful eye on everything.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> You get a complete package that proves you're following all the rules and keeping things safe.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We're not just about today; we're ready for whatever privacy changes come tomorrow.</li>
            </ul>
          </p>
        </div>
      </div>

      <div class="reason-card">
        {/* Reason 4 */}
        <div class="reason-image">
          <div className="reasonimgcol1"><PriceChangeOutlinedIcon style={{ fontSize: 60 }} /></div>
          <div className="reasonimgcol2"> <h3>Cost Effectiveness</h3></div>
        </div>
        <div class="reason-content">
          <p class="reason-desc">
            <ul>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We believe in being smart with your money.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> Our plans are not just good; they're good for your wallet too.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We look at where we can save you money while still doing a top-notch job.</li>
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> Our clear prices and clever solutions mean you get more bang for your buck.</li><br /><br />
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
{/* // Row 5 End */}

{/* // Row 6 Start (Contact Form) */}
  <div className="cisocontact-container">
    <ContactForm />
  </div>
{/* // Row 6 End */}
</div>

  )
}