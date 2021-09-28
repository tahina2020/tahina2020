import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolio';
import Project from './Project';

class ProjectList extends Component {

    state = {
        projects:portfolioData,
        radios : [
            {id:1, value:"javascript"},
            {id:2, value:"css"},
            {id:3, value:"react"},
            {id:4, value:"php"}
        ],
        selectedRadio:'javascript'  
    };
    handleRadio =(e)=>{
        this.setState({
            selectedRadio:e.target.value
        })
    }
    render() {
        let { projects, radios, selectedRadio } = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios?.map((radio)=>{
                            return(
                                <li key={radio.id}>
                                    <input type="radio"
                                            name="radio"
                                            id={radio.value} 
                                            value={radio.value}
                                            checked ={radio.value === selectedRadio}
                                            onChange={this.handleRadio}

                                    />
                                    <label htmlFor={radio.value} > {radio.value} </label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="projects">
                    {
                        projects
                        .filter(item =>item.languages.includes(selectedRadio))
                        .map((items)=>{
                            return(
                                < Project
                                    item = {items}
                                    key ={items.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;