import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurveyList extends Component {

    
    render() {
        return (
            <div>
                <div className="card darken-1">
                    <div className="card-content">
                        <span className="card-title">Campaign #1</span>
                        <p>Do you like coding ??</p>
                        <p className="right">
                            Send on: 20/05/2017
                        </p>
                    </div>
                    <div className="card-action">
                    <a>Yes: 5</a>
                    <a>No: 2 </a>
                    </div> 
                </div>
                <div className="card darken-1">
                    <div className="card-content">
                        <span className="card-title">Campaign #2</span>
                        <p>Do you like ReactJS ??</p>
                        <p className="right">
                            Send on: 20/05/2017
                        </p>
                    </div>
                    <div className="card-action">
                    <a>Yes: 50</a>
                    <a>No: 5 </a>
                    </div> 
                </div>
                <div className="card darken-1">
                    <div className="card-content">
                        <span className="card-title">Campaign #3</span>
                        <p>Do you like NodeJS ?</p>
                        <p className="right">
                            Send on: 20/05/2017
                        </p>
                    </div>
                    <div className="card-action">
                    <a>Yes: 750</a>
                    <a>No: 10 </a>
                    </div> 
                </div>
            </div>
        );
    }
}


export default SurveyList;