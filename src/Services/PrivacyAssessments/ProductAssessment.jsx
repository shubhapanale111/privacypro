import React,{useEffect} from 'react';
import '../../Services/PrivacyAssessments/productassessment.css';
import ContactForm from '../../Component/ContactForm';

import image1 from '../../Images/productassessment.png'
import firstimg from '../../Images/privacyassessment.jpg'
import secondimg from '../../Images/productiveassessment (2).jpg'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function ProductAssessment() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
//     <div className="passprivacyprogramcontainer">
//     <div className="passpaafirstrow">
//       <div className="passcolumn1">
//   <h1 className='passctext'>Product Assessment (Privacy by Design)</h1>
// <p style={{paddingTop:'10px'}}>Data protection should be "engineered" into your business processes and apps from the start, according to Privacy by Design. Privacy by design is incorporated into both business processes and IT system architecture. Privacy thus becomes a more and more important component of the core functionality offered. Privacy develops becoming a vital system component without sacrificing functionality.</p>
//       </div>
//       <div className="passcolumn2"></div>
//     </div>
//     <div className="passsecondrow">
//     <div className="passsecondrowcolumn1"> <h1 className='stext'>What is Privacy by Design (Product Assessment)?</h1>
// <p style={{paddingTop:'10px',color:'black'}}>Product evaluation, often known as "Privacy by Design," is the process of evaluating a product's features and design to ensure that user privacy is protected from the outset.  

// <p style={{paddingTop:'10px',color:'black'}}>In order to accomplish this, potential privacy risks must be identified and countered using privacy-enhancing methods.</p>  

// <p style={{paddingTop:'10px',color:'black'}}>It upholds privacy regulations and fosters user confidence.</p>

// <p style={{paddingTop:'10px',color:'black'}}>By following Privacy by Design, an organization can achieve a "defensible" stance. A privacy-by-design evaluation improves an organization's proactive, risk-based approach to compliance, customer trust, and the creation of a true due diligence defense in the event of a data breach, inquiry, and/or complaint.</p>

// </p></div>
//       <div className="passsecondrowcolumn2">
//         <img src={firstimg} alt=""  className='privacyassessment.jpg'/>
//       </div>
//     </div>
//     <div className="passthirdrow">
//     <div className="passthirdrowcolumn1"> <img src={secondimg} alt=""  className='productiveassessment.jpg'/></div>
//       <div className="passthirdrowcolumn2"> <h1 className='ctext'>Why is a productive assessment necessary?</h1>
// <p style={{paddingTop:'10px'}}>It is recommended that businesses opt to participate in a Privacy by Design Assessment during the early stages of their product design process to guarantee that privacy-related features and functionalities are prioritized and integrated into the product from the outset instead of being added as an afterthought.</p></div>
//     </div>

//     <div className="onlyfourthrow">
//     <div className="productheadline">
//     <h1 style={{ fontSize: '35px' }}>Benefits of Product Evaluation</h1>


//       </div>
//   </div>

//     <div class="passfourthrow passparentt">
    
//   <div class="passfourthrowcol1">
//     <h1>Benefits of Product Evaluation </h1>
//     <p><b style={{color:'black'}}>Proactive Security Measures :</b>&nbsp;
// Early product assessments in the design phase identify and address privacy risks, ensuring robust security for user data.
// <br />
// <b style={{color:'black'}}>Regulatory Compliance Assurance:</b>&nbsp;
// Alignment with privacy regulations like GDPR and CCPA demonstrates commitment to legal standards, enhancing user trust.
// <b style={{color:'black'}}>
//   <br />
// Cost-Efficient Risk Management:</b>&nbsp;
// Early recognition of privacy threats during design minimizes post-implementation expenses, emphasizing the financial benefits of proactive assessments.</p>
//   </div>
//   <div class="passfourthrowcol2">

// <div className="passdivcol1">
// <h3>Early Risk Identification and Mitigation</h3>
// <p>Product assessment in the design phase enables the early identification of potential privacy risks and vulnerabilities. By addressing these issues upfront, organizations can implement the necessary security measures, ensuring enhanced protection of user data and avoiding costly fixes later on.</p>

// </div>
// <div className="passdivcol2">
//   <h3>Regulatory Compliance Assurance</h3>
//   <p>Through product assessments, organizations can align their products or services with privacy regulations such as GDPR and CCPA. This proactive approach ensures compliance with legal requirements, minimizing the risk of penalties and legal consequences, and demonstrating a commitment to privacy.</p>
// </div>
// <div className="passdivcol3">
//   <h3>Building User Loyalty and Trust</h3>
//   <p>
// The commitment to privacy protection showcased through product assessments fosters trust among users. Knowing that their data is prioritized and safeguarded can enhance user loyalty. This positive perception can contribute to customer retention and attract new users who prioritize privacy.</p>
// </div>

// <div className="passdivcol4">
//   <h3>Cost Savings through Early Detection</h3>
//   <p>
// Product assessments conducted during the design phase play a crucial role in identifying privacy threats and weaknesses early on. Addressing these issues in the initial stages not only enhances security but also significantly reduces the costs associated with fixing privacy-related issues in later phases of product development. This cost-effectiveness is a direct result of proactive risk management.</p>
// </div>

//   </div>
// </div>






// <div class="passfifthrow">
// <div className="passtextfr">
// <h1 style={{fontSize:'50px'}}>Reasons for Selecting Privacy Pro Consulting </h1></div>
// <div class="passsubfifthrow">
// <div class="passfifthrowcolumn1"> <div class="passpp-card">
// <div class="passpp-card-img"><PersonOutlineOutlinedIcon style={{ fontSize: 60 }}/> <h3>Expert Consultants</h3></div>
// <div class="passpp-card-info">
  
// <p class="passpp-text-body">
//   <ul>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our team has tons of experience making personalized privacy plans.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We cover everything - from moving data across borders to managing user requests and making sure your privacy policies are top-notch.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We've been around the block and know the ins and outs of privacy laws, so you're in good hands.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We work closely with you to understand what you need, ensuring our plans fit your unique business.</li>
//   </ul>
// </p>
// </div>
// </div>
// </div>
// <div class="passfifthrowcolumn2"> <div class="passpp-card">
// <div class="passpp-card-img"><SupportAgentOutlinedIcon style={{ fontSize: 60 }}/><h3>Increase in Consumer Trust</h3></div>

  
// <div class="passpp-card-info">
//   <ul>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> When you're good with privacy, people trust you more.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We make sure your customers know exactly how you're taking care of their info.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Following good privacy rules isn't just about following the law; it's about being the kind of business people want to trust.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We help you build that trust, and that trust can give you an edge over the other guys.</li>
//   </ul>
// </div>



// </div>
// </div>
// <div class="passfifthrowcolumn3"> 
// <div class="passpp-card">
// <div class="passpp-card-img"><AdminPanelSettingsOutlinedIcon style={{ fontSize: 60 }}/><h3>Comprehensive Services</h3></div>
// <div class="passpp-card-info">
 
// <p class="passpp-text-body">
//   <ul>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We handle everything about keeping your data safe - from the start to forever.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our services cover checks on your privacy health, fixing things up, and keeping a watchful eye on everything.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> You get a complete package that proves you're following all the rules and keeping things safe.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We're not just about today; we're ready for whatever privacy changes come tomorrow.</li>
//   </ul>
// </p>

// </div>
// </div>
// </div>
// <div class="passfifthrowcolumn4"> 
// <div class="passpp-card">
// <div class="passpp-card-img"><PriceChangeOutlinedIcon style={{ fontSize: 60 }}/><h3>Cost Effectiveness</h3></div>
// <div class="passpp-card-info">
  
//   <p class="passpp-text-body">
//   <ul>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We believe in being smart with your money.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our plans are not just good; they're good for your wallet too.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> We look at where we can save you money while still doing a top-notch job.</li>
//     <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon/></span> Our clear prices and clever solutions mean you get more bang for your buck.</li><br /><br />
//   </ul>
// </p>

// </div>

// </div>
// </div>
// </div>
// </div>
//     <div className="passcontact-container" style={{marginBottom:'50px'}}>
//       <ContactForm />
//     </div>
//   </div>

// Row 1 Start
<div className="vaptcontainer">
  <div className="vaptfirstrow">
    {/* Column 1 */}
    <div className="vaptcolumn1">
      <h1 className='tprmmaintitle1'>Product Assessment (Privacy by Design)</h1>
      <p style={{ paddingTop: '10px',color:'white' }}>
      Data protection should be 'engineered' into your business processes and apps from the start, as per Privacy by Design. <br />Privacy by Design is incorporated into both business processes and IT system architecture. Privacy, therefore, becomes an increasingly important component of the core functionality offered. Privacy develops into a vital system component without sacrificing functionality.
      </p>
    </div>
    {/* Column 2 */}
    <div className="vaptcolumn2">
      <img src={image1} alt="" className='productassimage1' />
    </div>
  </div>
{/* // Row 1 End

// Row 2 Start */}
  <div className="vaptsecondrow">
    {/* Column 1 */}
    <div className="vaptsecondrowcolumn1" >
      <h1 className='cisomaintitle2' style={{marginTop:'-5vh'}}>What is Privacy by Design (Product Assessment)?</h1>
      <p className='cisosubtitle2'>
      <p style={{paddingTop:'5px',color:'black'}}>Product evaluation, often known as "Privacy by Design," is the process of evaluating a product's features and design to ensure that user privacy is protected from the outset.  

<p style={{paddingTop:'5px',color:'black'}}>In order to accomplish this, potential privacy risks must be identified and countered using privacy-enhancing methods.</p>  

<p style={{paddingTop:'5px',color:'black'}}>It upholds privacy regulations and fosters user confidence.</p>

<p style={{paddingTop:'5px',color:'black'}}>By following Privacy by Design, an organization can achieve a "defensible" stance. A privacy-by-design evaluation improves an organization's proactive, risk-based approach to compliance, customer trust, and the creation of a true due diligence defense in the event of a data breach, inquiry, and/or complaint.</p>

 </p></p>
    </div>
    {/* Column 2 */}
    <div className="vaptsecondrowcolumn2">
      <img src={firstimg} alt="" className='vaptimg2' />
    </div>
  </div>
{/* // Row 2 End

// Row 3 Start */}
  <div className="vaptthirdrow">
    {/* Column 1 */}
    <div className="vaptthirdrowcolumn1">
      <img src={secondimg} alt="" className='vaptimg3' />
    </div>
    {/* Column 2 */}
    <div className="vaptthirdrowcolumn2">
      <h1 className='cisomaintitle1' style={{marginTop:'-7vh'}}>Why is a productive assessment necessary?</h1>
      <p className='cisosubtitle1' style={{color:'white'}}>
      A productive assessment is essential for businesses as it ensures a systematic evaluation of their processes and products, identifying strengths and areas for improvement. By incorporating Privacy by Design Assessments early in the product design phase, companies prioritize user privacy, complying with regulations and building trust. This proactive approach minimizes the risk of privacy breaches and potential legal issues, fostering a responsible and ethical business environment. Ultimately, a well-executed assessment contributes to long-term success by aligning products with user expectations and regulatory requirements.
      </p>
    </div>
  </div>
{/* // Row 3 End

// Row 4 Start */}
  <div class="vaptfourthrow">
    {/* Column 1 */}
    <div class="vaptfourthrowcol1">
      <h1 className='vaptmaintitle4'>Benefits(Importance) of Product Evaluation</h1>
      <p>
    <p style={{color:'white'}}><b style={{color:'white'}}>Proactive Security Measures :</b>&nbsp;
Early product assessments in the design phase identify and address privacy risks, ensuring robust security for user data.
<br />
<b style={{color:'white'}}>Regulatory Compliance Assurance:</b>&nbsp;
Alignment with privacy regulations like GDPR and CCPA demonstrates commitment to legal standards, enhancing user trust.
<b style={{color:'white'}}>
  <br />
Cost-Efficient Risk Management:</b>&nbsp;
Early recognition of privacy threats during design minimizes post-implementation expenses, emphasizing the financial benefits of proactive assessments.</p>
      </p>
    </div>
    {/* Column 2 */}
    <div class="vaptfourthrowcol2">
      <div className="vaptsubdiv1">
        <h3 className='productsubtitle5'>Early Risk Identification and Mitigation:</h3>
        <p className='productsubtitle6'>Product assessment in the design phase enables the early identification of potential privacy risks and vulnerabilities. By addressing these issues upfront, organizations can implement the necessary security measures, ensuring enhanced protection of user data and avoiding costly fixes later on. </p>
      </div>
      <div className="vaptsubdiv2">
        <h3 className='productsubtitle5'>Regulatory Compliance Assurance: </h3>
        <p className='productsubtitle6'>Through product assessments, organizations can align their products or services with privacy regulations such as GDPR and CCPA. This proactive approach ensures compliance with legal requirements, minimizing the risk of penalties and legal consequences, and demonstrating a commitment to privacy. </p>
      </div>
      <div className="vaptsubdiv3">
        <h3 className='productsubtitle5'>Building User Loyalty and Trust: </h3>
        <p className='productsubtitle6'>The commitment to privacy protection showcased through product assessments fosters trust among users. Knowing that their data is prioritized and safeguarded can enhance user loyalty. This positive perception can contribute to customer retention and attract new users who prioritize privacy. </p>
      </div>
      <div className="vaptsubdiv4">
        <h3 className='productsubtitle5'>Cost Savings through Early Detection: </h3>
        <p className='productsubtitle6'>Early detection in product assessments during design is crucial for identifying privacy threats and weaknesses upfront. Addressing these issues in the initial stages not only enhances security but also reduces costs associated with fixing privacy-related problems later in development. This cost-effectiveness stems from proactive risk management. </p>
      </div>
    </div>
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