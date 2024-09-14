import React,{useEffect} from 'react';
import '../../Services/CyberSecurityServices/vapt.css'
import ContactForm from '../../Component/ContactForm';
import firstimg from '../../Images/Product Assessment.jpg'
import img from '../../Images/webdesigner_4.jpg'
import paneed from '../../Images/stickervapt.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
export default function VAPT() {
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
      <h1 className='tprmmaintitle1'>Vulnerability Assessment and Penetration Testing (VAPT)</h1>
      <p style={{ paddingTop: '10px',color:'white' }}>
        A thorough assessment known as vulnerability assessment and penetration testing, or VAPT, finds weaknesses in the data, applications, and infrastructure of a company. The main goals of the assessment are to ascertain how well an organization's security posture is working and to find security flaws that deviate from accepted best practices.
      </p>
    </div>
    {/* Column 2 */}
    <div className="vaptcolumn2">
      <img src={img} alt="" className='vaptimg1' />
    </div>
  </div>
{/* // Row 1 End

// Row 2 Start */}
  <div className="vaptsecondrow">
    {/* Column 1 */}
    <div className="vaptsecondrowcolumn1">
      <h1 className='cisomaintitle2'style={{marginTop:'-10vh'}}>What is vulnerability assessment, or VAPT?</h1>
      <p className='cisosubtitle2'>
      Vulnerability Assessment and Penetration Testing (VAPT) is a comprehensive cybersecurity process that involves scanning for vulnerabilities and exploiting them to assess the security posture of an organization's applications, networks, and infrastructure.</p>
      <p>
      <strong style={{color:'maroon',fontSize:'1.2rem',fontWeight:'700'}}>Objective:</strong>
    <ul>
        <li style={{color:'black'}}>The main goals of VAPT are to identify and address security weaknesses before attackers can exploit them. It provides a detailed assessment of applications, offering deeper insights than individual penetration tests.</li>
    </ul>

    <strong style={{color:'maroon',fontSize:'1.2rem',fontWeight:'700'}}>Methodology:</strong>
    <ul>
        <li style={{color:'black'}}><strong style={{color:'navy'}}>Vulnerability Assessment:</strong> Involves scanning and evaluating the digital infrastructure to find weaknesses that hackers could exploit.</li>
        <li style={{color:'black'}}><strong style={{color:'navy'}}>Penetration Testing:</strong> Utilizes various tools and techniques to exploit identified vulnerabilities in a controlled environment, simulating real-world attacks.</li>
    </ul>

    <strong style={{color:'maroon',fontSize:'1.2rem',fontWeight:'700'}}>Benefits:</strong>
    <ul style={{color:'black'}}>
        <li><strong style={{color:'navy'}}>Continuous Improvement:</strong> VAPT is not a one-time exercise but a continuous process supporting ongoing efforts to enhance security posture.</li>
        <li><strong style={{color:'navy'}}>Proof of Security Posture:</strong> Companies can demonstrate evidence of improved security posture and achievements to clients through regular VAPT.</li>
    </ul>
      </p>
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
      <img src={paneed} alt="" className='vaptimg3' />
    </div>
    {/* Column 2 */}
    <div className="vaptthirdrowcolumn2">
      <h1 className='cisomaintitle1'style={{marginTop:'-10vh'}}>How it works?</h1>
      <p className='cisosubtitle1'>
        The first step in the VAPT process is a thorough evaluation of the digital infrastructure to find any weaknesses that hackers could use to obtain unauthorized access or steal confidential data.
        The penetration testing step, which starts once vulnerabilities are found, entails using a variety of tools and techniques to exploit the vulnerabilities in a controlled environment.
        Through the use of simulation, this technique assesses how well an organization's security controls identify and handle real-world attacks.
        Usually carried out by skilled security experts, the VAPT procedure combines automated and manual testing techniques to guarantee a thorough examination of the complete digital infrastructure. Our in-house Advisory Services specialists, who have an average of more than 20 years of experience, will perform your assessment.
      </p>
    </div>
  </div>
{/* // Row 3 End


// Row 4 Start */}
 {/* adding heading for center */}
 <div className="middleheading">
        <h1><center className="benifitsheading">Benefits of Penetration Testing and Vulnerability Assessment (VAPT)</center></h1>
      </div>
      {/* end this heading */}
  <div class="vaptfourthrow">
    {/* Column 1 */}
    <div class="vaptfourthrowcol1">
      {/* <h1 className='vaptmaintitle4'>Benefits(Importance) of Penetration Testing and Vulnerability Assessment (VAPT)</h1> */}
      <ol className='infosubtitle6'>
        <li><strong className='infosubtitle4'>Finding Security Weaknesses and Strengths:</strong> VAPT highlights the necessity of continual cybersecurity upgrades while assisting in determining the cybersecurity posture strengths and weaknesses of a business.</li>
        <li><strong className='infosubtitle4'>Cybersecurity in a Digital Transition:</strong> After a digital transition, VAPT may help organizations maintain and strengthen their security posture by helping them reevaluate existing security controls and procedures.</li>
        <li><strong className='infosubtitle4'>Consistent Security Maturity:</strong> Particularly in hybrid or multi-cloud scenarios, VAPT can assist enterprises in achieving a consistent security maturity level across all environments.</li>
        <li><strong className='infosubtitle4'>Proof of Security Posture:</strong> Through regular VAPT, companies may show their clients evidence of their improved security posture and security achievements.</li>
      </ol>
    </div>
    {/* Column 2 */}
    <div class="vaptfourthrowcol2">
      <div className="vaptsubdiv1">
        <h3 className='vaptsubtitle5'>Identifying Security Vulnerabilities:</h3>
        <p className='infosubtitle6'>VAPT employs a comprehensive methodology that leverages the latest industry-standard tools and techniques to identify and prioritize potential vulnerabilities and misconfigurations across critical assets, infrastructure, applications, and data. </p>
      </div>
      <div className="vaptsubdiv2">
        <h3 className='vaptsubtitle5'>Enhanced Communication of Defensive Posture: </h3>
        <p className='infosubtitle6'>VAPT provides a detailed analysis of the organization’s current security posture and offers actionable recommendations for improving it. The report is tailored to the organization’s risk tolerance, maturity level, and business objectives, enabling key decision-makers to make informed decisions regarding their security strategy. </p>
      </div>
      <div className="vaptsubdiv3">
        <h3 className='vaptsubtitle5'>Efficient Cyber Insurance Underwriting: </h3>
        <p className='infosubtitle6'>VAPT can play a vital role in streamlining the cyber insurance underwriting process. By providing a clear and objective assessment of the organization’s security posture, the assessment can help insurers evaluate the organization’s risk level more accurately and offer more favorable rates. </p>
      </div>
      <div className="vaptsubdiv4">
        <h3 className='vaptsubtitle5'>Facilitating Continuous Improvement: </h3>
        <p className='infosubtitle6'>VAPT is not a one-time exercise but a continuous process that supports the organization’s ongoing efforts to improve its security posture. By conducting VAPT regularly, organizations can establish a baseline for their security maturity level, track progress over time, and demonstrate their commitment to cybersecurity to stakeholders. </p>
      </div>
    </div>
  </div>
{/* // Row 4 End */}

{/* // Row 5 Start */}
  <div class="cisofifthrow">
    <div className="cisofifthrowcol1">
      <h1 className='cisomaintitle5'>Reasons For Selecting Privacy Pro Consulting </h1>
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
              <li><span class="MuiIcon-root"><CheckCircleOutlinedIcon /></span> We've been around the block and know the ins and outs of privacy laws, so you're in good hands.</li>
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
