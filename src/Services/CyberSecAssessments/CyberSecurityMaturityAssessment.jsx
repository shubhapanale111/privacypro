import React,{useEffect} from 'react';
import '../../Services/CyberSecAssessments/cybersecuritymatu.css';
import '../../Services/CyberSecurityServices/vapt.css'
import ContactForm from '../../Component/ContactForm';
import firstimg from '../../Images/inforiskneed.jpg'
import firstimg1 from '../../Images/cybersecmaturity.png'
import icon01 from '../../Images/iconn1.png'
import icon02 from '../../Images/iconn2.png'
import need from '../../Images/needgdpr-removebg-preview.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
export default function CyberSecurityMaturityAssessment() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (

 // main container
 <div className="csmcontainer">
 {/* first row start */}
 <div className="csmfirstrow">
   {/* first row column 1 start */}
   <div className="csmfirstrowcol1">
<h1 className='csmmaintitle1'>Cyber Security Maturity Assessment</h1>
<p style={{paddingTop:'10px'}} className='csmsubtitle1'>The Cybersecurity Maturity Assessment is a thorough analysis that evaluates the defensive posture of a company, emphasizing particular protocols that protect data, applications, and key infrastructure. Additionally, the efficacy of the organization, the development of internal rules and procedures, and operational best practices for every control area are given special consideration throughout the assessment.</p>
   </div>
    {/* first row column 1 End */}
     {/* first row column 2 start */}
   <div className="csmfirstrowcol2">
     <img src={firstimg1} alt="" className='csmfirstimg'/>
   </div>
    {/* first row column 2 End */}
   
 </div>
   {/* first row  End */}
   {/* Second row start */}
 <div className="csmsecondrow">
   {/* Second row column 1 start */}
 <div className="csmsecondrowcol1"> 
 <h1 className='csmmaintitle2'>Importance of Assessing Cyber Security Maturity</h1>
<p style={{paddingTop:'10px',color:'black'}}>
<ol>
  <li><span class="csmnavy">Finding the Weak Links:</span> The assessment identifies the gaps in the organization's security posture and the places where security measures do not adhere to accepte best practices.</li>
  
  <li><span class="csmnavy">Aids with Expressing Defensive Status:</span> Executives frequently have to reassure stakeholders and clients that the proper information management procedures are in place and actively give proof of this. The primary decision-makers receive an unbiased, non-technical evaluation of the present cyber maturity levels and suggested actions, in line with the organization's risk tolerance and intended maturity.</li>
  
  <li><span class="csmnavy">Regulatory Compliance:</span> The cybersecurity maturity model can also be integrated with relevant frameworks for organizations operating in a regulatory environment, enabling compliance to be achieved as part of the overall cybersecurity strategy without the need for two separate implementations.</li>
  
  <li><span class="csmnavy">Efficient Cyber Insurance:</span> Many insurance providers require an assessment to determine the sophistication of an organization's security measures. Establishing a cybersecurity maturity model can position your business to secure the best rate from your insurance carrier.</li>
  
  <li><span class="csmnavy">Facilitates Improvements:</span> Since continual improvement is essential to meeting various standards (e.g., annually), doing these evaluations on a frequent basis is beneficial for many firms. This gives key stakeholders—like the board, shareholders, regulators, and senior management—a uniform standard to evaluate and illustrate continuous development and rising maturity levels.</li>
</ol>
</p></div>
     {/* Second row column 1 End */}
     {/* Second row column 2 start */}
   <div className="csmsecondrowcol2">
     {/* Second row sub row 1 start */}
     <div className="csmsubrow1"><h1 className='csmmaintitle2'>Benefits of cyber strategy and governance</h1></div>
     {/* Second row sub row 1 End */}
     {/* Second row sub row 2 start */}
     <div className="csmsubrow2">
       {/* Second row sub row 2  column 1 start */}
    <div className="csmsubrow2div1">
    <img src={icon01} alt="" className='csmiconc'/>
    </div>
    {/* Second row sub row 2  column 1 End */}
    {/* Second row sub row 2  column 2 start */}
    <div className="csmsubrow2div2">
    <p style={{color:'black'}}>These assessments help identify the strengths and weaknesses of an organization's cybersecurity posture and emphasize the need for ongoing cybersecurity improvements.</p>
    </div>
    {/* Second row sub row 2  column 2 End */}
    {/* Second row sub row 2  column 3 start */}
    <div className="csmsubrow2div3">
    <img src={icon02} alt="" className='csmiconc'/>
    </div>
     {/* Second row sub row 2  column 3 End */}
    {/* Second row sub row 2  column 4 start */}
    <div className="csmsubrow2div4">
    <p style={{color:'black'}}>Following a digital transformation, organizations often need to reassess their security controls and procedures to maintain and improve their security posture. Information Security Maturity Assessments (ISMAs) can assist in this process.</p>
    </div>
     {/* Second row sub row 2  column 4 End */}
    {/* Second row sub row 2  column 5 start */}
    <div className="csmsubrow2div5">
    <img src={icon01} alt="" className='csmiconc'/>
    </div>
    {/* Second row sub row 2  column 5 End */}
    {/* Second row sub row 2  column 6 start */}
    <div className="csmsubrow2div6">
    <p style={{color:'black'}}>In hybrid or multi-cloud environments, it is essential to establish a consistent level of security maturity across all environments, as each cloud provider has its own set of security controls and regulations. Cybersecurity maturity assessments can help organizations choose and apply the necessary security policies to enhance their overall security posture across all environments.</p>
    </div>
    {/* Second row sub row 2  column 6 End */}
    
     </div>
      

   </div>
    {/* Second row column 2 End */}
 </div>
  {/* Second row  End */}
  {/* Third row  Start */}
 <div className="csmthirdrow">
    {/* Third row  column 1 Start */}
 <div className="csmthirdrowcol2">      
 <img src={firstimg} alt=""  className='csmimage3'/>
 </div>
 {/* Third row  column 1 End */}
 {/* Third row  column 2 Start */}
   <div className="csmthirdrowcol1"> <h1 className='csmmaintitle1'style={{marginTop:'-10vh'}}>How can you get help from Privacy Pro Consulting?</h1>
<p style={{paddingTop:'10px'}} className='csmsubtitle1'>Privacy Pro Consulting differentiates itself from other providers in the CSMA industry through its tailored methodology, expertise in data privacy and compliance, and non-technical assessment. These aspects enable organizations to achieve higher levels of cybersecurity maturity. It can be summarized as:
<ol>

  
  <li style={{color:'white'}}><span class="navy" style={{color:'white',fontSize:'1.2rem',fontWeight:'650'}}>Personalized Evaluation for Cybersecurity:</span> Privacy Pro Consulting offers a customized approach to CSMA with tailored evaluations.</li>
  
  <li style={{color:'white'}}><span class="navy" style={{color:'white',fontSize:'1.2rem',fontWeight:'650'}}>Data Privacy and Compliance Expertise:</span> Privacy Pro Consulting’s expertise in data privacy and compliance helps firms achieve and maintain compliance.</li>
  
  <li style={{color:'white'}}><span class="navy" style={{color:'white',fontSize:'1.2rem',fontWeight:'650'}}>Non-Technical Evaluations for Clear Assessments:</span> Privacy Pro Consulting’s approach to CSMA includes a non-technical evaluation of cyber maturity levels.</li>
  
  <li style={{color:'white'}}><span class="navy" style={{color:'white',fontSize:'1.2rem',fontWeight:'650'}}>Benefits for Regulatory Environment:</span> Privacy Pro Consulting’s approach is beneficial for organizations operating in a regulatory environment.</li>
</ol>

</p></div>
 {/* Third row  column 2 End */}
 </div>
{/* Third row  End */}

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