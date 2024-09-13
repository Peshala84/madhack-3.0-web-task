import React from 'react'
import logoimage from '../assets/image_1.png'
import video from '../assets/video_1.mp4'
import './home.css'



const home = () => {
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
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">ABOUT</a>
                </li>
                <li>
                    <a href="">TIMELINE</a>
                </li>
                <li>
                    <a href="">PRIZES</a>
                </li>
                <li>
                    <a href="">FAQ</a>
                </li>
                </ul>
            </nav>

        </div>
      </div>

      {/* home */}

      <div className='home'>
        <video src={video} autoPlay muted loop></video>
        <h2>By IEEE Student Branch of UCSC</h2>
        <h1>MADHACK 3.0</h1>
        <h3>Battle out your Moblie Application development skill</h3>
      </div>

      {/* about */}
      <div className='about'>
        <div className='about-inside'>
            <h1>Introduction <span>MADHACK 3.0</span></h1>
            <h3>Unleashing and Creativity in Mobile App Development</h3>

            <div className='about-outside'>
                <div className='about-outside-left'>
                     <img src="https://madhack.ucscieee.lk/static/media/presents.517db039712e11500218.png" alt="" />
                     <h3>Elevating <span> Mobile App Development</span></h3>
                     <h4>MadHack is a premier hackathon and workshop series for mobile app
                         development in Sri Lanka. Participants can showcase their 
                         creativity and learn from industry experts. Whether you're 
                         a beginner oг experienced developer, MadHack offers something 
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
                    <img src="https://madhack.ucscieee.lk/static/media/flutter_react.352a186d9b92d4f0db07.png" alt="" />

                </div>

            </div>
        </div>

      </div>
          
        {/* timeline */}
        <div className='timeline'>
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
   </>
  )
}

export default home