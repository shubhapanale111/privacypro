
import React,{useEffect} from 'react'
import '../SecurityAndPrivacyStandards/iso22301.css'
import image1 from '../../Images/standard-quality-control-collage-concept.jpg'
import isoneed from '../../Images/neediso27001.jpeg'
import '../../Services/PrivacyAssessments/productassessment.css';
import is from '../../Images/ISO-22301.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ContactForm from '../../Component/ContactForm';
import iso27001img from '../../Images/iso22301image.png'
export default function ISO22301() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='is22301container'>
    {/* First row */}
    <div class="is22301firstrow">
      {/* First row column 1 */}
      <div class="is22301scol1">
        <h1><center className='maintitle1'>ISO 22301</center></h1>
        <p className='issubtitle1'>
        The ISO 22301 standard serves as the global benchmark for 
        Business Continuity Management Systems (BCMS). It outlines 
        the essential requirements for establishing and maintaining 
        an effective BCMS. ISO 22301 focuses on ensuring an organization's
         ability to continue its critical functions during and after 
         disruptive incidents.
        </p>
      </div>
      {/* First row column 2 */}
      <div class="is22301scol2">
        <img src={iso27001img} alt="" className='iso27001img' />
      </div>
    </div>
    {/* End of First row */}
  
    {/* Second row */}
    <div class="is22301secondrow">
      <div class="is22301secondrowcol1">
        <img src={image1} alt="" className='iso22301img2' />
      </div>
      <div class="is22301secondrowcol2">
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px',marginTop:'-8vh' }}>What is ISO 22301?</h1>
        <p style={{ color: 'black' }}>
        ISO 22301 is the international standard for Business Continuity Management 
        Systems (BCMS). It was developed by the International Organization for 
        Standardization (ISO) to provide a framework for organizations to establish, 
        implement, maintain, and continually improve a robust business continuity
         management system.
        </p>
      </div>
    </div>
    {/* End of Second row */}
  
    {/* Third row */}
    <div class="is22301thirdrow">
      <div class="is22301thirdrowcol1">
        <h1 class="maintitle3">Why is ISO 22301 recommended for use in organizations?</h1>
        <ul>
                  <li>
                    <strong>Scope and Context Understanding:</strong>
                    ISO 22301 guides organizations in understanding the scope and context of their Business Continuity Management System (BCMS). This involves defining critical functions and potential disruptions.
                  </li>
                  <li>
                    <strong>Senior Management Involvement:</strong>
                    Actively engaging senior management is crucial according to ISO 22301. This ensures commitment and support for the BCMS implementation process.
                  </li>
                  <li>
                    <strong>Establish BCMS Policy, Roles, and Responsibilities</strong>
                    ISO 22301 recommends the establishment of a comprehensive BCMS policy along with clearly defined roles and responsibilities for effective implementation.
                  </li>
                  <li>
                    <strong>Business Impact Analysis (BIA):</strong>
                    Conducting a Business Impact Analysis (BIA) is a critical step according to ISO 22301. This involves assessing the impact of disruptions and identifying priorities for recovery.
                  </li>
                  <li>
                    <strong>Internal Communication and Continuous Improvement:</strong>
                    ISO 22301 emphasizes good internal communication and engagement across the organization. Regularly comparing BCMS performance against objectives and focusing on continuous improvement ensures resilience.
                  </li>
        </ul>
      </div>
      <div class="is22301thirdrowcol2">
        <img src={isoneed} alt="" className='is22301img3' />
      </div>
    </div>
    {/* End of Third row */}
  
    {/* Fourth row */}
    <div class="is22301fourthrow">
      <div class="is22301fourthrowcol1">
        <h1 className='maintitle44'>How Privacy Pro can help you</h1>
        <p style={{ color: 'navy' }}>
        Privacy Pro, a prominent ISO 22301 service provider, 
        understands the challenges associated with implementing 
        ISO 22301 standards. Our primary goal is to assist clients 
        in obtaining ISO 22301 certification, enhancing credibility
         through adherence to international standards.
        </p>
        <img src={is} alt="" className='is22301img4' />
      </div>
      <div class="is22301fourthrowcol2">
        <div class="is22301privacyprosinglecolumn">
          <h2 className='maintitle5'style={{marginTop:'-5vh'}}>Strategic Steps for Implementing ISO 22301 Standards:</h2>
          <ol>
            <li><h2><i class="icon fas fa-check-circle"></i> Understanding of ISO 22301 Standards:</h2> Our experts ensure a thorough comprehension of ISO 22301 standards, laying the foundation for effective implementation.</li>
            <li><h2><i class="icon fas fa-users"></i> Formation of Implementation Team: </h2>Privacy Pro assists in assembling a dedicated team to drive the ISO 22301 standards implementation process successfully.</li>
            <li> <h2><i class="icon fas fa-chart-bar"></i> Gap Analysis:</h2> A comprehensive gap analysis is performed to identify existing security vulnerabilities and define the scope of improvements.</li>
            <li><h2><i class="icon fas fa-bullseye"></i> Definition of ISO 22301 Standards Scope:</h2> We work collaboratively to precisely define the scope of ISO 22301 standards, tailoring them to your organization's specific needs.</li>
            <li><h2><i class="icon fas fa-calendar-alt"></i> Creation of Implementation Plan: </h2>A detailed plan is crafted, outlining the steps and timeline for the seamless integration of ISO 22301 standards into your business continuity management systems.</li>
        </ol>

        <p style={{ color: 'navy' }}>Our strategic approach ensures a smooth transition to ISO 22301 certification, aligning your organization with the best practices advocated for business continuity management.</p>
        </div>
      </div>
    </div>
    {/* End of Fourth row */}
  
    {/* Contact form */}
    <div className="contactformmiso27001">
      <ContactForm />
    </div>
  </div>
  
  )
}
