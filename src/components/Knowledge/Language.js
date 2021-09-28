import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Language extends Component {

    state = {
        languages:[
            { id:1, value:"Html", xp: 1.9 },
            { id:2, value:"Css", xp: 1.8 },
            { id:3, value:"Javascript", xp: 1.8 },
            { id:4, value:"Php", xp: 0.8 },
        ],
        framework:[
            { id:1, value:"Reactjs", xp: 1.8 },
            { id:2, value:"Saas", xp: 1.9 },
            { id:3, value:"Tailwind", xp: 1.8 },
            { id:4, value:"Bootstrap", xp: 1.6 },
        ]
    }
    render() {
        let { languages, framework } = this.state;
        return (
            <div className="languagesFrameworks">
                < ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                < ProgressBar 
                    title=" Framework & Bibliotheque"
                    className="frameworskDisplay"
                    framework ={framework}
                />
            </div>
        );
    }
}

export default Language;