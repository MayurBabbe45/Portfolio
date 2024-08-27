import React, { useRef, useState } from 'react';
import './contact.css';
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/github_logo.svg";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/linkedin_logo.svg";
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wsas94k', 'template_u1171xo', form.current, {
                publicKey: 'IsttP696wtRXIxfYs',
            })
            .then(
                () => {
                    setEmailSent(true);
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Hobbies</h1>
                <p className='clientDesc'>
                    These are Some of Hobbies which I do in free time.
                </p>
                <div className='clientImgs'>
                    <img src={Walmart} alt='Hobbies' className='clientImg' />
                    <img src={Adobe} alt='Hobbies' className='clientImg' />
                    <img src={Microsoft} alt='Hobbies' className='clientImg' />
                    <img src={Facebook} alt='Hobbies' className='clientImg' />
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPagetitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name="from_name" />
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' rows='5' placeholder='Your message' name='message'></textarea>
                    <button type='submit' value="send" className='submitBtn'>Submit</button>
                    {emailSent && <span className='successMessage'>Email sent successfully!</span>}
                    <div className='links'>
                        <img src={FacebookIcon} alt='Facebook' className='link' />
                        <img src={TwitterIcon} alt='Twitter' className='link' />
                        <img src={LinkedinIcon} alt='LinkedIn' className='link' />
                        <img src={InstagramIcon} alt='Instagram' className='link' />
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;
