import React, { Component } from 'react';

class project extends Component {
    state={
        items:this.props.item,
        showInfo:false
    }

    handleInfo = ()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        let {name, source, info, picture, languages} = this.state.items;
        return (
            <div className="project">
                <h3>{name}</h3>
                <img src={picture} 
                    onClick={this.handleInfo}
                    alt=""/>
                <span className="info"
                    onClick={this.handleInfo}
                >
                    <i className="fas"> + </i>
                </span>
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noferrer" 
                                            className="button"
                                            target="_blank"
                                        >
                                            code source
                                        </a>
                                    </div>
                                </div>
                                <p>{info}</p>
                                <div className="button return" 
                                    onClick={this.handleInfo}
                                >Retourner sur la page
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default project;