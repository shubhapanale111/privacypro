
import React,{useEffect} from 'react'
import '../SecurityAndPrivacyStandards/cis.css'
import image1 from '../../Images/standard-quality-control-collage-concept.jpg'
import isoneed from '../../Images/neediso27001.jpeg'
import '../../Services/PrivacyAssessments/productassessment.css';
import ContactForm from '../../Component/ContactForm';
import is from '../../Images/Center-for-Internet-Security.png'
import iso27001img from '../../Images/Cybersecurity-for-Industry-defense-in-depth.gif'
export default function CriticalSecControl() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='ciscontainer'>
    {/* First row */}
    <div class="cisfirstrow">
      {/* First row column 1 */}
      <div class="cisscol1">
        <h1><center className='maintitle1'>Centre for Internet Security (CIS)</center></h1>
        <p className='issubtitle1'>
        The Centre for Internet Security (CIS) is a non-profit organization 
        that is dedicated to enhancing the security and resilience of 
        public and private sector entities, as well as critical 
        infrastructure, against cyber threats. In addition to 
        its cybersecurity best practices and standards, the
         Centre for Internet Security (CIS) offers compliance 
         services that are designed to help organizations meet
          regulatory requirements and industry standards. 
          These services include security benchmark assessments,
           which evaluate an organization’s security controls
            against industry-recognized standards and provide
             recommendations for improvement. 
        </p>
      </div>
      {/* First row column 2 */}
      <div class="cisscol2">
        <img src={iso27001img} alt="" className='cisimg' />
      </div>
    </div>
    {/* End of First row */}
  
    {/* Second row */}
    <div class="cissecondrow">
      <div class="cissecondrowcol1">
        <img src={image1} alt="" className='cisimg2' />
      </div>
      <div class="cissecondrowcol2">
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px',marginTop:'-5vh' }}>What is the CIS?</h1>
        <p style={{ color: 'black' }}>
        A non-profit company called CIS works to improve cybersecurity by 
        creating standards and best practices and by offering compliance 
        services that assist businesses in adhering to legal obligations. 
        CIS's guidance promotes cybersecurity awareness and reduces risks
         while assisting enterprises in navigating complex standards and 
         putting required controls in place. Enhancing cybersecurity posture
          and thwarting cyberattacks are crucial tasks for CIS.
        </p>
      </div>
    </div>
    {/* End of Second row */}
  
    {/* Third row */}
    <div class="cisthirdrow">
      <div class="cisthirdrowcol1">
        <h1 class="maintitle3">Why is Center for Internet Security recommended for use in organizations?</h1>
        <ul>
              <li>
                <strong>Comprehensive Cybersecurity: </strong>
                The Center for Internet Security (CIS) offers a set of controls and guidelines that enhance the overall cybersecurity posture of organizations, providing a robust defense against cyber threats.
              </li>
              <li>
                <strong>Non-Profit Organization:</strong>
                As a non-profit organization, CIS is dedicated to assisting both public and private sectors, emphasizing its commitment to improving cybersecurity across various entities, including academia, government, and the private sector.
              </li>
              <li>
                <strong>Prevention of Hacking:</strong>
                CIS has a mission to help businesses prevent hacking, aligning its focus on proactive measures to mitigate security risks and protect sensitive information from unauthorized access.
              </li>
              <li>
                <strong>Reliable Security Posture:</strong>
                Implementing CIS controls provides organizations with a reliable security posture, ensuring continuous protection against cybersecurity threats.
              </li>
        
        </ul>
      </div>
      <div class="cisthirdrowcol2">
        <img src={isoneed} alt="" className='cisimg3' />
      </div>
    </div>
    {/* End of Third row */}
  
    {/* Fourth row */}
    <div class="cisfourthrow">
      <div class="cisfourthrowcol1">
        <h1 className='maintitle44'>How PrivacyPro can help you</h1>
        <p style={{ color: 'navy' }}>
        PrivacyPro, a leading Center for Internet Security (CIS) service provider, understands the challenges organizations face in bolstering their cybersecurity defenses. Our core objective is to guide clients through the utilization of CIS controls, fostering a robust cybersecurity framework. CyberSecurityPro's seasoned professionals leverage proven strategies tailored to seamlessly align with your organizational goals for implementing CIS controls.
        </p>
        <img src={is} alt="" className='cisimg4' />
      </div>
      <div class="cisfourthrowcol2">
        <div class="cisprivacyprosinglecolumn">
          <h2 className='maintitle5'style={{marginTop:'-5vh'}}>Strategic Steps for Implementing CIS Controls:</h2>
          <ol>
        <li><h2><i class="icon fas fa-check-circle"></i> Understanding of CIS Controls:</h2> Our experts ensure a thorough comprehension of CIS controls, laying the foundation for effective implementation. </li>
        <li><h2><i class="icon fas fa-users"></i> Formation of Implementation Team: </h2>CyberSecurityPro assists in assembling a dedicated team to drive the CIS controls implementation process successfully.</li>
        <li> <h2><i class="icon fas fa-chart-bar"></i> Gap Analysis:</h2> A comprehensive gap analysis is performed to identify existing security vulnerabilities and define the scope of improvements.</li>
        <li><h2><i class="icon fas fa-bullseye"></i> Definition of CIS Controls Scope:</h2> We work collaboratively to precisely define the scope of CIS controls, tailoring them to your organization's specific needs .</li>
        <li><h2><i class="icon fas fa-calendar-alt"></i> Creation of Implementation Plan: </h2>A detailed plan is crafted, outlining the steps and timeline for the seamless integration of CIS controls into your cybersecurity infrastructure.</li>
    </ol>

    <p style={{color:'navy'}}>Our strategic approach ensures a smooth transition to a robust cybersecurity posture, aligning your organization with the best practices advocated by the Center for Internet Security.</p>
        </div>
      </div>
    </div>
    {/* End of Fourth row */}
  
    {/* Contact form */}
    <div className="contactformmcis">
      <ContactForm />
    </div>
  </div>
  )
}
