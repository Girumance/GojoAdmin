import React,{useState} from 'react';
import {makeStyles, Paper} from "@material-ui/core"
import ReactMapGl from "react-map-gl"

const useStyles = makeStyles({
    root:{
        width:"100%",
        height:"100%"
    }
})
function Map(props) {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "50vh",
        latitude: 7.546037699999999,
        longitude: 40.6346851,
        zoom: 8
      });

    const classes = useStyles()
    return (
        <div >
            <Paper elevation={3}>
            <ReactMapGl
            className={classes.root}                
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiZ2lydW1hbmNlIiwiYSI6ImNrZWU5ZWVzMTB6cm8ycnJ2dmFsNjJuaHcifQ.usUHKhpXQ_GNFp4YmUI4XA"
            >

            </ReactMapGl>
            </Paper>
        </div>
    );
}

export default Map;