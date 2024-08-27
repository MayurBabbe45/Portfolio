import React from 'react';
import './intro.css';
import bg from '../../assets/Self_img.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hello</span>
        <span className='introText'> I'm <span className='introName'>Mayur</span><br/>Web Developer </span>
        <p className='introPara'>I am a skilled web developer with knowledge <br/>in MERN stack web applications.</p>
        
        <Link to='contact' smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me
          </button>
        </Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>

  )
}

export default Intro