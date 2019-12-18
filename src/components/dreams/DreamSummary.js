import React from 'react';
import Paper from '@material-ui/core/Paper';

const DreamSummary = ({name, content, date, lucid}) => {
    
    return (
        
        <Paper style={{padding : 10, backgroundColor: "pink"}}>
            <h5>
                {name}
            </h5>
            <div>
                <p>{content}</p>
                <p>{date.toString()}</p>
                {lucid ? <span>Lucid dream</span>: null}
            </div>
            
        </Paper>     
        
    );
};

export default DreamSummary;