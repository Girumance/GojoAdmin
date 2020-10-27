import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import Paper from "@material-ui/core/Paper"


class AlertDialog extends React.Component {
  constructor(){
      super()

      this.handleClickOpen=this.handleClickOpen.bind(this);
      this.handleClose=this.handleClose.bind(this)
  }

   handleClickOpen () {
   
  };

   handleClose () {
    this.props.onClose();
  };

  render(){

  return (


    <div>
      
      <Dialog
        open={this.props.value}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <Paper>
            {this.props.children}
        </Paper>
        
      </Dialog>
    </div>
  );

  }
}

export default AlertDialog;