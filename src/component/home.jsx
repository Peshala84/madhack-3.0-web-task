import React,{useState} from 'react'
import logoimage from '../assets/image_1.png'
import video from '../assets/video_1.mp4'
import './home.css'
import image_1 from '../assets/image_1.png'
import image_2 from '../assets/image_2.png'
import image_3 from '../assets/image_3.png'
import image_4 from '../assets/image_4.png'
import image_5 from '../assets/image_5.png'
import image_6 from '../assets/image_6.png'
import image_7 from '../assets/image_7.png'
import image_8 from '../assets/image_8.png'
import image_9 from '../assets/image_9.png'




const home = () => {
     
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const faqItems = [
        {
            question: 'What is MadHack 3.0?',
            answer: 'MadHack 3.0 is a coding competition where enthusiasts come together to showcase their skills in mobile app development. It is a platform to learn, collaborate, and compete in creating innovative solutions for real-world challenges.',
        },
        {
            question: 'Who can participate in MadHack 3.0?',
            answer: 'MadHack 3.0 is open to all undergraduate students! Whether you are a seasoned developer or just starting, we welcome participants of all skill levels and backgrounds.',
        },
        {
            question: 'How can I register for MadHack 3.0?',
            answer: 'To register, visit our website and navigate to the registration page. Fill in the required details for yourself and your team members (if applicable) to secure your spot.',
        },
        {
            question: 'Do I need a team to participate?',
            answer: 'Yes, for the Initial Round and the Final Hackathon, participants are required to form teams of three or four members each.',
        },
        {
            question: 'What if I\'m a beginner in coding? Can I still participate?',
            answer: 'Absolutely! MadHack 3.0 is designed for participants of all skill levels. It is a great opportunity for beginners to learn and for experienced coders to showcase their expertise.',
        },
        {
            question: 'Is the usage of Flutter mandatory for MadHack 3.0 projects?',
            answer: 'No, it is not mandatory to use Flutter for your projects in MadHack 3.0. While we have Flutter sessions to help you, you are free to use other frameworks or technologies that best suit your project requirements.',
        },
    ];

  return (
   <>
      {/* navbar */}
      <div className='navbar'>
        <div className='navbar-inner'>
          <img src={logoimage} alt="" />
        </div>
        <div className='navbar-outer'>
            <nav>
                <ul>
                <li>
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#timeline">TIMELINE</a>
                </li>
                <li>
                    <a href="#prizes">PRIZES</a>
                </li>
                <li>
                    <a href="#faq">FAQ</a>
                </li>
                </ul>
            </nav>

        </div>
      </div>
      

      {/* home */}

      <div className='home' id='home'>
        <video src={video} autoPlay muted loop></video>
        <h2>By IEEE Student Branch of UCSC</h2>
        <h1>MADHACK 3.0</h1>
        <h3>Battle out your Moblie Application development skill</h3>
        
      </div>

      {/* about */}
      <div className='about' id='about'>
        <div className='about-inside'>
            <h1>Introduction <span>MADHACK 3.0</span></h1>
            <h3>Unleashing and Creativity in Mobile App Development</h3>

            <div className='about-outside'>
                <div className='about-outside-left'>
                     <img src={image_5} alt="" />
                     <h3>Elevating <span> Mobile App Development</span></h3>
                     <h4>MadHack is a premier hackathon and workshop series for mobile app
                         development in Sri Lanka. Participants can showcase their 
                         creativity and learn from industry experts. Whether you're 
                         a beginner or experienced developer, MadHack offers something 
                         for everyone. Join us and take the next step in your mobile app 
                         development journey.</h4>
                </div>
                <div className='about-outside-right'>
                    <h3>What is <span>MADHACK</span></h3>
                    <h4>Introducing Sri Lanka's first Mobile Application Development 
                        Hackathon, the IEEE Student Branch of UCSC proudly presents 
                        'MadHack', an inter-university hackathon followed by a 
                        series of workshops. MadHack aims to let the participants 
                        put their creativity and innovation to the test by giving
                         them the opportunity to develop in any platform of choice.</h4>
                    <img src={image_6} alt="" />

                </div>

            </div>
        </div>

      </div>
          
        {/* timeline */}
        <div className='timeline' id='timeline'>
            <h1>Timeline</h1>
            <div className='timeline-left'>
                <h2>Awareness Session</h2>
                <h3>Virtual</h3>
                <br />
                <h3>Jan 6th</h3>

            </div>
            <div className='timeline-right'>
                <h2>Mobile App Designing Session</h2>
                <h3>Virtual</h3>
                <br />
                <h3>Jan 10th</h3>

            </div>
            <div className='timeline-left'>
                <h2>Workshop - Flutter Session - Basics</h2>
                <h3>Virtual</h3>
                <br />
                <h3>Feb 4th</h3>

            </div>
            <div className='timeline-right'>
                <h2>Workshop - Flutter Session - Advanced</h2>
                <h3>Virtual</h3>
                <br />
                <h3>Feb 18th</h3>
             </div>
             <div className='timeline-left'>
                <h2>Open Initial Round Submissions</h2>
                <h3>March 4th</h3>
             </div>
            <div className='timeline-right'>
                <h2>Close Initial Round Submissions</h2>
                <h3>March 16th</h3>
            </div>
            <div className='timeline-left'>
                 <h2>Announcement of Finalists</h2>
                 <h3>Virtual</h3>
                 <br />
                 <h3>Postponed</h3>
            </div>
            <div className='timeline-right'> 
                <h2>Final Hackathon</h2>
                <h3>Onsite</h3>
                <br />
                <h3>Postponed</h3>
            </div>
            <div className='timeline-left'>
                <h2>Final Hackathon & Award Ceremony</h2>
                <h3>Onsite</h3>
                <br />
                <h3>Postponed</h3>
            </div>

        </div>

        {/* Prizes */}
        <div className='prizes 'id='prizes'>
            <h1>Prizes</h1>
            <div className='prizes-side'>
            <div className='prizes-inside'>
              <img src={image_2} alt="" />
              <h3>Silver</h3>
              <h3>Rs. 40,000</h3>
            </div>
            <div className='prizes-inside'>
                <img src={image_3} alt="" />
                <h3>Gold</h3>
                <h3>Rs. 60,000</h3>
            </div>
            <div className='prizes-inside'>
                <img src={image_4} alt="" />
                <h3>Bronze</h3>
                <h3>Rs. 20,000</h3>

            </div>

            </div>

        </div>

        {/* FAQ */}
        <div className="faq-section" id='faq'>
            <h1 className="faq-title">FAQ</h1>
            <div className="faq-container">
                {faqItems.map((item, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={activeIndex === index ? 'true' : 'false'}
                        >
                            {item.question}
                        </button>
                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: activeIndex === index ? '200px' : '0',
                                transition: 'max-height 0.3s ease',
                                overflow: 'hidden',
                            }}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* footer */}
    <footer>
        <div className='footer'>
            <div className='footer-left'>
                <img src={logoimage} alt="" />
            <h1>IEEE Student Branch of UCSC</h1>
            <h3>University of Colombo School of Computing</h3>
            <h3>UCSC Building Complex, 35, Reid Avenue, Colombo 07</h3>
            </div>
            <div className='footer-middle'>
                <h1>Quick Links</h1>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Timeline</h3>
                <h3>Prizes</h3>
                <h3>FAQ</h3>
            </div>
            <div className='footer-right'>
                <a href=""><img src={image_7} alt="" /></a>
                <a href=""><img src={image_8} alt="" /></a>
                <a href=""><img src={image_9} alt="" /></a>
            </div>
        </div>
    </footer>
   </>
  )
}

export default home