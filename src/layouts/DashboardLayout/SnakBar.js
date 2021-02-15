import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux"
import {ADDSNAKBARDATA} from "../../action"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const data = useSelector( state => state.snakbarState)
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(true);
    const data={
        message:"",
        type:"",
        open:true
    }
    dispatch(ADDSNAKBARDATA(data))

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    const data={
        message:"",
        type:"",
        open:false
    }
    dispatch(ADDSNAKBARDATA(data))
  };

  return (
    <div className={classes.root}>
      
      <Snackbar open={data.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={data.type}>
          {data.message}
        </Alert>
      </Snackbar>
    
    </div>
  );
}
