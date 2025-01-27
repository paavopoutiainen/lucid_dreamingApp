import React from 'react';
import Grid from '@material-ui/core/Grid';
import DreamSummary from "./DreamSummary"



const Dreamlist = ({dreams}) => {


    console.log(dreams)

    let dreamSummaries = (
                <Grid container spacing={1} direction = "column" alignContent="center">
                    {dreams.reverse().map((dream, index) => {
                        return (<Grid item sm={4} xs={12} key={index} >
                            <DreamSummary 
                                name={dream.name}
                                content={dream.content}
                                date={dream.date}
                                lucid={dream.lucid}
                                id={dream.id}
                            >
                            </DreamSummary>
                        </Grid>)
                    })}
                </Grid>)

    return (
        <div style={{ padding: 15 }}>
            
                {dreamSummaries}
           
        </div>
    );
};

export default Dreamlist;