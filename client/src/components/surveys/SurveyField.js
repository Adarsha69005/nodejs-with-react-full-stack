//SurveyField contains logic to render a single 
// label and text input

import React from 'react';


export default ({ input, label, meta: {touched, error} }) => {    //props from reduxform with destructuring. {input} is  property
    return (
        <div>
            <label>{ label }</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px'}}>
                { touched && error }
            </div>
        </div>
    );
}