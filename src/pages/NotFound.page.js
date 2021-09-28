import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3> Ouuppss! Cette page n'existe pas </h3>
                <NavLink exact to="/" activeClassName="navActive">
                    <i className="fas fa-home"><AiOutlineHome/></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;