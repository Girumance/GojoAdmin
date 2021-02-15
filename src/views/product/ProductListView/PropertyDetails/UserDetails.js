import React from 'react';

import { Grid, Paper,Typography, makeStyles, List,ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles( theme => ({
   root:{
       margin:"20px"
} ,

text:{
    marginLeft:"30px"
}

}))
const UserDetails = (props) => {
const classes = useStyles();
    const data=[]
    return (
        <div> 

            <Paper  className={classes.root}>
          <Grid item sm={6}>
          <Typography className={classes.text}  variant="h4" color="textSecondary">Contact</Typography>
                       <List>
                            <ListItem>
                                <ListItemIcon><PersonIcon/></ListItemIcon>
                                <ListItemText>{props.data.firstName+" "+props.data.lastName}</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><EmailIcon/></ListItemIcon>
                                <ListItemText>{props.data.email}</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon><PhoneIcon/></ListItemIcon>
                                <ListItemText>{props.data.phoneNumber}</ListItemText>
                            </ListItem>

                           

                       </List>

                       </Grid>  
                       </Paper>
        </div>
        
    );
};

export default UserDetails;