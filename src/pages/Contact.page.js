import React from 'react';
import Navigation from '../components/Navigation.component';
import { AiOutlineLinkedin, 
    AiOutlineGithub, 
    AiOutlineFacebook,
    AiOutlineWhatsApp
 } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="contact">
            < Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1> Contacter moi</h1>
                        <ul>
                            <li>
                                <i className="fas"></i>
                                <span>Antananarivo</span>
                            </li>
                            <li>
                                <i className="fas"></i>
                                <span>0343333333</span>
                            </li>
                            <li>
                                <i className="fas"></i>
                                <span>Tahinatiana0@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/tahina-rabekoto-a69044219/" target="_blank" rel="noopener noreferrer "> <i className="fab"><AiOutlineLinkedin/></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/tahina2020" target="_blank" rel="noopener noreferrer "> <i className="fab"><AiOutlineGithub/></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/onrails.ruby.3/" target="_blank" rel="noopener noreferrer "> <i className="fab"><AiOutlineFacebook/></i></a>
                    </li>
                    <li>
                        <a href="https:www.whatsapp.com" target="_blank" rel="noopener noreferrer "> <i className="fab"><AiOutlineWhatsApp/></i></a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Contact;