import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './contactUs.css'

export const ContactUs = () => {
    const [contactForm , setContactForm] = useState({
        user_name:'',
        user_email:'',
        message:''
    })
    const handleContactChange = (event) => {
        const { name, value } = event.target;
        setContactForm((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_u1g8f99', 'template_2ifm6vn', form.current, {
                publicKey: 'X9KpwFEDAJzvWSRsp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setContactForm({
                        user_name:'',
                        user_email:'',
                        message:''
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };

    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div>
                <div style={{display:'flex',flexDirection:'column',marginBottom:'10px'}}>
            <label style={{fontWeight:'bold'}}>Name</label>
            <input style={{flexGrow:'2',width:'200px'}} type="text" name="user_name" value={contactForm.user_name} onChange={handleContactChange}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginBottom:'10px'}}>
                    <label style={{fontWeight:'bold'}}>Email</label>
                    <input style={{flexGrow:'2',width:'200px'}} type="email" name="user_email" value={contactForm.user_email} onChange={handleContactChange}/>
                </div>
                </div>
            <div style={{display:'flex',flexDirection:'column'}}>
            <label style={{fontWeight:'bold'}}>Message</label>
            <textarea style={{flexGrow:'3',width:'200px',height:'65px'}} name="message" value={contactForm.message} onChange={handleContactChange}/>
            </div>
                <input type="submit" value="Send"/>
        </form>
    );
};
