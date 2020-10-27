import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import ImageCard from './ImageCard';
import "./Details.css"
import Axios from 'axios';
class PicDIsplay extends Component {
    constructor(props){
        super(props)
            
        this.state={
            images:[]
        }
        const imageUrl=process.env.REACT_APP_IP+"image/allimages/"+props.id

        Axios.get(imageUrl).then( res => {
      
            this.setState({
                images:res.data
            })
         })
    }

   
          render(){
        
       const url=process.env.REACT_APP_IP+"image/downloadProfile/"+this.props.id
        return (
            <Grid container direction="column" spacing={3}>
                
                <Grid item sm={12}>
                
                <Paper elevation={3}>


                    
                <img alt="Main pic" className="mainPic" src={url} />
            
                

                </Paper>

                </Grid>

                <Grid item sm={12}>
                    <Grid container spacing={1}>
                        
                        {
                        this.state.images.map( (res, index) =>
                         <Grid index={index} item xs={12} sm={2}>
                            <ImageCard data={res}/>
                         </Grid>
                        )}
                        

                    </Grid>
                </Grid>

                
            </Grid>
        );
    }
}


export default PicDIsplay;