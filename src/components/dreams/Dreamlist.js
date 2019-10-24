import React from 'react';
import Grid from '@material-ui/core/Grid';
import DreamSummary from "./DreamSummary"


let dreams = [
    {
        name: "hulluja ihmisiä",
        content: "lorem lksdjfkljsdlfsdf",
        date: new Date(),
        lucid: true
    },
    {
        name: "hulluja ihmisiä",
        content: "lorem lksdjfkljsdlfsdf",
        date: new Date(),
        lucid: true
    },
    {
        name: "hulluja ihmisiä",
        content: "lorem lksdjfkljsdlfsdf",
        date: new Date(),
        lucid: true
    }
]
const Dreamlist = () => {

    let dreamSummaries = (
                <Grid container spacing={1} direction = "column" alignContent="center">
                    {dreams.map((dream, index) => {
                        return (<Grid item  key={index} >
                            <DreamSummary 
                                name={dream.name}
                                content={dream.content}
                                date={dream.date}
                                lucid={dream.lucid}
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