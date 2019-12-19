import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),

    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    paper:{
      paddingRight: 8,
      backgroundColor: "white"
      
    },
    button:{
      margin: 10
    }
  }));

const NewDream = ({number, handleClick}) => {
    const classes = useStyles();
    const [dream, setDream] = useState({name: "", content:""})
    const [thisHidden, setHidden] = useState(false)
    const style = thisHidden ? {display:"none"} :{}
   

    function handleChange(e){
      setDream({...dream, [e.target.name] : e.target.value})
    }

    const saveDream = async() => {
      const newDream = {
        name: dream.name,
        content: dream.content,
        lucid: true
      }
      try {
        const response = await axios.post("http://localhost:3001/api/dreams", newDream)
        console.log(response)
        handleClick("Dream was saved")
        setHidden(true)
        setDream({name:"", content:""})
      } catch (exception) {
        console.error(exception.message)
        handleClick("Wasn't able to save the dream")
      }
   }

   const handleClose = () => {
    setHidden(true)
   }
//<CloseIcon onClick={handleClose} style={{onmouseover:"", cursor:"pointer"}} />
    return (
      <Grid item sm={4} xs={12} style={style}>
        <Paper className={classes.paper}  >
       
        <IconButton edge="end" color="inherit" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
           <h5 style={{margin: 8}}>Dream {number}</h5>
            <form className={classes.paper}>
                <TextField
                    id="filled-textarea"
                    label="Name Of The Dream"
                    placeholder="Placeholder"
                    multiline
                    name = "name"
                    value={dream.name}
                    onChange={(e) => handleChange(e)}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="filled-textarea"
                    label="Write Down The Dream"
                    placeholder="Placeholder"
                    multiline
                    fullWidth
                    name = "content"
                    value={dream.content}
                    onChange={(e) => handleChange(e)}
                    style={{height: "100%"}}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <Button variant="contained"className={classes.button} onClick={saveDream}>
                  Save
                </Button>
          </form>
        </Paper>
        
        </Grid>
        
    );
};

export default NewDream;