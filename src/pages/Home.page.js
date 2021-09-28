import React from 'react';
import Navigation from '../components/Navigation.component';

const Home = () => {
    return (
        <div className="home">
            < Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1> Tahina </h1>
                    <h2> Developpeur front-end</h2>
                    <div className="pdf">
                        <a href="./Media/CV.pdf" target="_blank"> Telecharger  mon cv</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home ;