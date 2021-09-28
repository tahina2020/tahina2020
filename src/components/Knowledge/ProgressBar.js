import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span> Annee d'experience </span>
                <span> 1 ans </span>
                <span> 2 ans </span>
            </div>
            <div>
                {
                    props.languages?.map((item) =>{
                        let xpYear = 2;
                        let progress = item.xp / xpYear * 100 +'%' ;

                        return(
                            <div key={item.id} className="languagesList">
                                <li> {item.value }</li>
                                <div className="progressBar" style={{width:progress}}>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    props.framework?.map((item) =>{
                        let xpYear = 2;
                        let progress = item.xp / xpYear * 100 +'%' ;

                        return(
                            <div key={item.id} className="languagesList">
                                <li> {item.value }</li>
                                <div className="progressBar" style={{width:progress}}>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default ProgressBar;