import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';



const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'> I am Skilled and passionate web developer with knowledge in creating visually appealing and user friendly problem solving web applications.</span>
        <div className='skillBars'>
         <div className ='skillBar'>
            <img src={AppDesign} alt='UIDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Front end Development</h2>
              <p>This is the demo text, you can write your own content. </p>
            </div>
            
          </div>
        </div>
        <div className='skillBars'>
          <div className ='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Backend development</h2>
              <p>This is the demo text, you can write your own content</p>
            </div>
          </div>
        </div>
        <div className='skillBars'>
          <div className ='skillBar'>
            <img src={UIDesign} alt='MERN' className='skillBarImg'/>
            <div className='skillBarText'> 
              <h2>MERN stack Development</h2>
              <p>This is the demo text, you can write your own content</p></div>
          </div>
        </div>
        
   </section>
  )
}

export default Skill