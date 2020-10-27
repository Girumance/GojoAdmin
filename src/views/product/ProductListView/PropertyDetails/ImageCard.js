import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImageCard(props) {
  const classes = useStyles();
  const url=process.env.REACT_APP_IP+"image/downloadbyfilename/"+props.data.ownerId+"/"+props.data.fileName; 
  
  return (
    <Card  className={classes.root}>
        <CardMedia
          className={classes.media}
          image={url}
          title="Images"
        />
       
    </Card>
  );
}
