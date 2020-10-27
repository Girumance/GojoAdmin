import React,{useState}  from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CustomDialog from "./Dialog/CustomDialog"
import Details from "./PropertyDetails/Index"
import {
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  media: {
    height: 220,
  },
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const url="http://127.0.0.1:1234/image/downloadProfile/"+product.id


  const openDialog = ()=>{

    setOpen(true);

  }

  const closeDialog = ()=> {
    setOpen(false);
  }

  return (
    <div>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent onClick={openDialog}>
      <CardMedia
          className={classes.media}
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.titile}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.description}
        </Typography>
        </CardContent>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Date 12/12/12
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <GetAppIcon
              className={classes.statsIcon}
              color="action"
            />
          <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
            
              {
               product.city 
              }
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
    <CustomDialog value={open} onClose={closeDialog} ><Details id={product.id} onClose={closeDialog}/></CustomDialog>
    </div>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
