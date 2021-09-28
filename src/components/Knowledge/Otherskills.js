import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiFigma, FiTrello } from 'react-icons/fi';
import { IoMdCodeWorking } from 'react-icons/io';

const Otherskills = () => {
    return (
        <div className="otherSkills">
            <h3>Autre competences</h3>
            <div className="list">
                <ul>
                    <li>
                        <i className="fas"><AiOutlineGithub/></i>
                        <span>Git</span>
                    </li>
                    <li>
                        <i className="fas"><FiFigma/></i>
                        <span>Figma</span>
                    </li>
                    <li>
                        <i className="fas"><IoMdCodeWorking/></i>
                        <span>Methode agiles</span>
                    </li>
                    <li>
                        <i className="fas"><FiTrello/></i>
                        <span>Trello</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Otherskills;