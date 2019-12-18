import React, {useState, useEffect} from "react"
import NewDream from "../dreams/NewDream.js"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';



const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function JournalPage() {
  const classes = useStyles();

  const [numberOfDreams, toggle] = useState(1)
  const [dreamComponents, setDreams] = useState()
  const [open, setOpen] = React.useState(false);
  
  //for snackbar
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
  }
  
  //forsnackbar^^

  function createNewDream(){
   /// addNewObjectToState()
    toggle(numberOfDreams +1)
    
    let helpArray = []
    for(var i = 1; i <= numberOfDreams; i++){
      helpArray.push(i)
    }
    
    setDreams(

      <Grid container spacing ={1} styles={{}}>
        { helpArray.map((x, index) => <NewDream key={index} number={x} handleClick={handleClick}></NewDream>)}
      </Grid>
    )
  }
  return (
    <div style={{ padding: 15 }}>
      <Fab onClick={() => createNewDream()} color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      {dreamComponents}
      <div>
      
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        onClose= {handleClose}
        autoHideDuration={2000}
        message={<span id="message-id">Dream was saved</span>}
      />
    </div>
 

    </div>
    )
  }

  export default JournalPage