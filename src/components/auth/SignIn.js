import React, {useState} from 'react';
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    
    button:{
      margin: 10
    }
  }));

const SignIn = () => {

    const [credentials, setCredentials] = useState({email: "", password:""})
    const classes = useStyles();
    
    function handleSubmit (e) {
        console.log(e)
    }

   function handleChange (e){
        console.log(e)
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
      
        <Grid container spacing={1} direction = "column"  alignItems ="center">
            
            <Grid item sm={12} xs={12}>
                <div>
                    <h5>Sign In</h5>
                </div>
                <form className={classes.paper}>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        placeholder="Email"
                       
                        fullWidth
                        type="email"
                        name = "email"
                        value={credentials.email}
                        onChange={(e) => handleChange(e)}
                        className={classes.textField}
                        margin="normal"
                       
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        fullWidth
                        name = "password"
                        value={credentials.password}
                        onChange={(e) => handleChange(e)}
                        style={{height: "100%"}}
                        className={classes.textField}
                        margin="normal"
                       
                    />
                    
                </form>
                <Button variant="contained" color="secondary">Sign In</Button>
            </Grid>
            
        </Grid>
     
        
        
    );
};

export default SignIn