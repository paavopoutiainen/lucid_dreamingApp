import React from 'react';
import Paper from '@material-ui/core/Paper';

const DreamSummary = ({name, content, date, lucid}) => {
    
    return (
        
        <Paper style={{padding : 10}}>
            <h5>
                {name}
            </h5>
            <p>{content}</p>
            <p>{date.toString()}</p>
            <p>lucid: {lucid.toString()}</p>
        </Paper>     
        
    );
};

export default DreamSummary;