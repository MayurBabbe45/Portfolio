import React from 'react';
import './works.css';
import chat_bot from '../../assets/chat-bot.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'> I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <div className='worksImgContainer'>
              <img src={chat_bot} alt='Chat Bot' className='worksImg1'/>
              <div className='hoverText'>Chat Bot</div>
            </div>
            <div className='worksImgContainer'>
              <img src={Portfolio2} alt='Portfolio 2' className='worksImg2'/>
              <div className='hoverText'>Portfolio 2</div>
            </div>
            <div className='worksImgContainer'>
              <img src={Portfolio3} alt='Portfolio 3' className='worksImg3'/>
              <div className='hoverText'>Portfolio 3</div>
            </div>
            <div className='worksImgContainer'>
              <img src={Portfolio4} alt='Portfolio 4' className='worksImg4'/>
              <div className='hoverText'>Portfolio 4</div>
            </div>
            <div className='worksImgContainer'>
              <img src={Portfolio5} alt='Portfolio 5' className='worksImg5'/>
              <div className='hoverText'>Portfolio 5</div>
            </div>
            <div className='worksImgContainer'>
              <img src={Portfolio6} alt='Portfolio 6' className='worksImg6'/>
              <div className='hoverText'>Portfolio 6</div>
            </div>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  );
}

export default Works;
