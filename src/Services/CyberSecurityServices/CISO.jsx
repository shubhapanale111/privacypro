

import React,{useEffect} from 'react';
import '../../Services/CyberSecurityServices/ciso.css';
import ContactForm from '../../Component/ContactForm';
import firstimg from '../../Images/ciso-job.jpg'
import img2 from '../../Images/cisoimage1.png'
import img3 from '../../Images/Role-of-CISOs-in-Organizations-1-min-768x422.jpg'
import '../../Services/PrivacyAssessments/productassessment.css';
import ciso from '../../Images/cio-ciso-tt.png'
import cisoneed from '../../Images/ciconeed.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
export default function CISO() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cisocontainer">
    {/* first row start */}
    <div className="cisofirstrow">
      <div className="cisofirstrowcol1">
        <h1 className='cisomaintitle1'>Chief Information Security Officer(CISO)</h1>
        <p style={{color:'white'}}>CISO-as-a-Service (CISOaaS) leverages relevant technical and subject matter resources from IT Governance to deliver a leadership role in information security. The organization's information security program is managed by the CISOaaS, who also provides security counsel to senior management.</p>
      </div>
      <div className="cisofirstrowcol2">
        <img src={ciso} alt="" className='cisoimg' />
      </div>
    </div>
      {/* first row End */}
        {/* Second row start */}
    <div className="cisosecondrow">
      <div className="cisosecondrowcolumn1">
        <h1 className='cisomaintitle2'style={{marginTop:'-7vh'}}>What is CISO As A Service?</h1>
        <p className='cisosubtitle2'>A CISO is responsible for establishing security strategy and ensuring data assets are protected. CISOs traditionally work alongside the chief information officer (CIO) to achieve these aims. As the guardians of information security, it's the CISO's role to create a strategy that deals with ever-increasing regulatory complexity, creating the policies, security architecture, processes and systems that help reduce cyber threats and keep data secure.</p>
      </div>
      <div className="cisosecondrowcolumn2">
        <img src={img3} alt="" className='cisofirstimg'/>
      </div>
    </div>
      {/* Second row End */}
        {/* Third row start */}
    <div className="cisothirdrow">
      <div className="cisothirdrowcolumn1">
        <img src={firstimg} alt="" className='cisofirstimg2'/>
      </div>
      <div className="cisothirdrowcolumn2">
        <h1 className='cisomaintitle1'style={{marginTop:'-5vh'}}> Why CISO service is necessary for your organization?</h1>
        <p className='cisosubtitle1' style={{color:'white'}}>Organizations that place a high value on security often encounter difficulty in identifying a Chief Information Security Officer (CISO) possessing the requisite skills and expertise.Some of them can be summarised as:  </p>
 <p style={{paddingTop:'10px'}} ><ol style={{color:'white'}}>
    <li>Enterprises of all sizes can benefit from the vast experience of our team of specialists.</li>
    <li>Customers have the flexibility to adapt their needs as they evolve through our on-demand services.</li>
    <li>Accurate feedback is provided by assessing the security posture and delivering precise findings.</li>
    <li>Access to cutting-edge technologies for managing risk, change, and incidents is available.</li>
    <li>Education and training in security are provided to equip organizations with necessary skills and knowledge.</li>
    <li>Compliance with regulations and standards is managed by our team.</li>
    <li>Creating a business continuity plan is prioritized as step number seven.</li>
</ol>

</p>
       
      </div>
    </div>
      {/* Third row End */}
        {/* Fourth row start */}
    <div className="cisofourthrow">
      <div className="cisofourthrowcolumn1">
        <h1 className='cisomaintitle2'style={{marginTop:'-5vh'}}>How a CISO Can Serve as a Service</h1>
        <p style={{color:'black',lineHeight:'1.5'}}> 
          <ol >
            <li>Make use of a practical method to run your information security program.</li>
            <li>Assume accountability for upholding your information security standards, procedures, and policies.</li>
            <li>Present reports at the executive level.</li>
            <li>It helps you to give tracking visibility and metrics.</li>
            <li>Keep a record of the security precautions you need to remember.</li>
          </ol>
        </p>
        	 
    	
    
   
      </div>
      <div className="cisofourthrowcolumn2">
        <img src={img2} alt="" className='cisofirstimg2'/>
      </div>
    </div>
{/* Fourth row End */}  

{/* Sixth row start */}
    <div class="cisosixthrow">
  <div class="cisosixthrowcol1">
  <h1 className='cisomaintitle3'style={{marginTop:'-9vh'}}> Benefits of CISO As A Service </h1>
  <ol style={{color:'white'}}>
  <li><strong >Flexibility and Scalability:</strong> CISO as a Service (CISOaaS) offers an elastic and scalable solution, allowing organizations to adjust security resources based on changing demands[3].</li>
  
  <li><strong>Cost-Effectiveness:</strong> Outsourcing CISO services can be more cost-effective than hiring a full-time, in-house Chief Information Security Officer (CISO), reducing overhead costs[1].</li>
  
  <li><strong>Constant Availability:</strong> CISO as a Service provides constant, flexible availability of security resources, ensuring a continuous focus on cybersecurity needs[2].</li>
  
  <li><strong>Comprehensive Security Strategies:</strong> Outsourced CISOs contribute to proactive security strategies, adding value to overall security efforts[4].</li>
  
  <li><strong>Guidance and Compliance:</strong> CISO as a Service offers guidance and ensures compliance with security standards, assisting organizations in meeting regulatory requirements[5].</li>
  
  <li><strong>Resource Optimization:</strong> It addresses the lack of internal resources, providing expertise and support for organizations that may not have the resources to manage security internally[6].</li>
</ol>

  </div>
    
  <div class="cisosixthrowcol2">
  <img src={cisoneed} alt="" className='cisoneedimg'/>
  </div>
</div>
{/* Sixth row End */}
    
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
// Tprm Main Container End
  );
}