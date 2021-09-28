import React from 'react';
import { FaPlaneDeparture,FaPizzaSlice,FaGamepad,FaFilm,FaWalking } from 'react-icons/fa';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Interets</h3>
            <ul>
                <li className="hobby">
                    <i className="fas"><FaPlaneDeparture/></i>
                    <span>Voyages</span>
                </li>
                <li className="hobby">
                    <i className="fas"><FaWalking/></i>
                    <span>Randonnees</span>
                </li>
                <li className="hobby">
                    <i className="fas"><FaFilm/></i>
                    <span>Cinema</span>
                </li>
                <li className="hobby">
                    <i className="fas"><FaGamepad/></i>
                    <span>Jeux video</span>
                </li>
                <li className="hobby">
                    <i className="fas"><FaPizzaSlice/></i>
                    <span>Cuisine</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;