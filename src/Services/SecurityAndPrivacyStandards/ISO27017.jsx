
import React,{useEffect} from 'react'
import '../SecurityAndPrivacyStandards/iso27017.css'
import image1 from '../../Images/standard-quality-control-collage-concept.jpg'
import isoneed from '../../Images/neediso27001.jpeg'
import '../../Services/PrivacyAssessments/productassessment.css';
import is from '../../Images/certification_iso_27017-removebg-preview.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ContactForm from '../../Component/ContactForm';
import iso27001img from '../../Images/iso27017.png'
export default function ISO27017() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='is27017container'>
    {/* First row */}
    <div class="is27017firstrow">
      {/* First row column 1 */}
      <div class="is27017scol1">
        <h1><center className='maintitle1'>ISO 27017</center></h1>
        <p className='issubtitle1'>
        The ISO 27017 standard is a globally recognized framework for
         Information Security Management Systems (ISMS) in the cloud. 
         It provides guidelines and controls specifically tailored for 
         cloud service providers and cloud customers to address information
          security risks associated with cloud computing.
           ISO 27017 emphasizes the importance of securing 
           cloud-based information, addressing confidentiality, 
           integrity, and availability concerns. It offers a
            structured approach to managing information security
             in the cloud environment, ensuring the protection of 
             sensitive data and maintaining the trust of stakeholders.
        </p>
      </div>
      {/* First row column 2 */}
      <div class="is27017scol2">
        <img src={iso27001img} alt="" className='is27017img' />
      </div>
    </div>
    {/* End of First row */}
  
    {/* Second row */}
    <div class="is27017secondrow">
      <div class="is27017secondrowcol1">
        <img src={image1} alt="" className='iso22301img2' />
      </div>
      <div class="is27017secondrowcol2">
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px' ,marginTop:'-8vh'}}>What is ISO 27017?</h1>
        <p style={{ color: 'black' }}>
        ISO 27017 is a crucial standard for Information Security 
        Management Systems (ISMS) in the cloud. Developed by the 
        International Organization for Standardization (ISO), it
         provides guidelines and controls tailored for cloud service
          providers and customers. The standard addresses information 
          security risks associated with cloud computing, emphasizing 
          the confidentiality, integrity, and availability of data in
           the cloud environment.
        </p>
        <div style={{border:'2px solid navy',padding:'20px',borderRadius:'10px'}}>
        <p style={{ color: 'navy',textAlign:'center',fontSize:'1.2rem' }}>
          <strong> Key aspects and benefits of ISO 27017 include:</strong> 
        </p>
        <ol >
            <li> <strong>Security in the Cloud: </strong>ISO 27017 ensures the security of information in the cloud, addressing specific risks related to cloud computing.</li>
            <li><strong>Confidentiality and Integrity: </strong>It focuses on maintaining the confidentiality and integrity of data stored and processed in the cloud.</li>
            <li><strong>Risk Management for Cloud Services: </strong>The standard provides a framework for effective risk management in cloud services, identifying and mitigating potential threats.</li>
            <li><strong>Enhanced Trust:</strong> Achieving ISO 27017 certification enhances trust among stakeholders by demonstrating a commitment to secure cloud-based information.</li>
        </ol>
        <p style={{ color: 'black' }}>
            ISO 27017 is instrumental in ensuring information security best practices are followed in cloud environments, making it essential for organizations leveraging cloud services.
        </p></div>
      </div>
    </div>
    {/* End of Second row */}
  
    {/* Third row */}
    <div class="is27017thirdrow">
      <div class="is27017thirdrowcol1">
        <h1 class="maintitle3">Why is ISO 27017 recommended for use in organizations?</h1>
        <ul>
                  <li>
                    <strong>Cloud Security Guidance:</strong>
                    ISO 27017 provides comprehensive guidance for managing information security in the cloud. It addresses the unique challenges and risks associated with cloud computing, ensuring organizations establish robust security measures.
                  </li>
                  <li>
                    <strong>Alignment with ISO 27001:</strong>
                    Actively aligning with ISO 27001, ISO 27017 enhances an organization's overall information security management system. It offers specific controls for cloud services, complementing the broader ISO 27001 framework.
                  </li>
                  <li>
                    <strong>Protection of Sensitive Information:</strong>
                    ISO 27017 emphasizes the protection of sensitive information stored, processed, and transmitted in the cloud. This includes considerations for data confidentiality, integrity, and availability.
                  </li>
                  <li>
                    <strong>Risk Management for Cloud Services:</strong>
                    Organizations benefit from ISO 27017 by effectively managing risks associated with cloud services. It provides a structured approach to identify, assess, and mitigate potential threats in the cloud environment.
                  </li>
                  <li>
                    <strong>Enhanced Trust and Compliance:</strong>
                    ISO 27017 certification demonstrates a commitment to secure cloud-based information, building trust among stakeholders. It also aids in compliance with various regulatory requirements related to cloud security.
                  </li>
      </ul>
      </div>
      <div class="is27017thirdrowcol2">
        <img src={isoneed} alt="" className='is27017img3' />
      </div>
    </div>
    {/* End of Third row */}
  
    {/* Fourth row */}
    <div class="is27017fourthrow">
      <div class="is27017fourthrowcol1">
        <h1 className='maintitle44'>How Privacy Pro can help you</h1>
        <p style={{ color: 'navy' }}>
        Privacy Pro, a leading ISO 27017 service provider, 
        is dedicated to addressing the challenges associated
         with implementing ISO 27017 standards. Our primary 
         objective is to assist clients in achieving ISO 27017
          certification, bolstering their cloud security and 
          ensuring adherence to international standards.
        </p>
        <img src={is} alt="" className='is27017img4' />
      </div>
      <div class="is27017fourthrowcol2">
        <div class="is27017privacyprosinglecolumn">
          <h2 className='maintitle5'style={{marginTop:'-5vh'}}>Strategic Steps for Implementing ISO 27017 Standards:</h2>
          <ol>
        <li><h2><i class="icon fas fa-check-circle"></i> Understanding of ISO 27017 Standards:</h2> Our experts ensure a comprehensive understanding of ISO 27017 standards, laying the groundwork for effective implementation.</li>
        <li><h2><i class="icon fas fa-users"></i> Formation of Implementation Team: </h2>Privacy Pro assists in assembling a dedicated team to drive the ISO 27017 standards implementation process successfully.</li>
        <li> <h2><i class="icon fas fa-chart-bar"></i> Gap Analysis:</h2> A thorough gap analysis is conducted to identify existing security vulnerabilities and define the scope of improvements in your cloud environment.</li>
        <li><h2><i class="icon fas fa-bullseye"></i> Definition of ISO 27017 Standards Scope:</h2> We collaborate to precisely define the scope of ISO 27017 standards, tailoring them to meet the specific security needs of your cloud services.</li>
        <li><h2><i class="icon fas fa-calendar-alt"></i> Creation of Implementation Plan: </h2>A detailed plan is crafted, outlining the steps and timeline for the seamless integration of ISO 27017 standards into your cloud security framework.</li>
    </ol>

    <p style={{ color: 'navy' }}>Our strategic approach ensures a smooth transition to ISO 27017 certification, aligning your organization with the best practices advocated for cloud security.</p>
        </div>
      </div>
    </div>
    {/* End of Fourth row */}
  
    {/* Contact form */}
    <div className="contactformmiso27017">
      <ContactForm />
    </div>
  </div>
  )
}
