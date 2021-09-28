import React from 'react';
import Navigation from '../components/Navigation.component';
import Language from '../components/Knowledge/Language';
import Experience from '../components/Knowledge/Experience';
import Otherskills from '../components/Knowledge/Otherskills';
import Hobbies from '../components/Knowledge/Hobbies';

const Knowledge = () => {
    return (
        <div className="knowledges">
            < Navigation />
            <div className="knowledgesContent">
                < Language />
                < Experience />
                < Otherskills />
                < Hobbies />
            </div>
        </div>
    );
};

export default Knowledge;