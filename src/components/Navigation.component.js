import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLinkedin, 
        AiOutlineGithub, 
        AiOutlineFacebook,
        AiOutlineWhatsApp,
        AiOutlineHome,
        AiOutlineContacts
     } from 'react-icons/ai';
import { GiGiftOfKnowledge } from 'react-icons/gi';
import { CgAlbum } from 'react-icons/cg';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img style={{width:"135px"}}src="./Media/me.jpg" alt="tahina"/>
                    <h3>Tahina RABEKOTO</h3>
                    
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>    
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"><AiOutlineHome/></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-home"><GiGiftOfKnowledge/></i>
                            <span>Competence</span>  
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-home"><CgAlbum/></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-home"><AiOutlineContacts/></i>
                            <span>Contact</span>
                        </NavLink>
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
                <div className="signature">
                    <p>Tahina 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;