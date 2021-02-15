import React from 'react';
import {useDispatch} from "react-redux"
import {Logout} from "./../../action"
import {Button} from "@material-ui/core"
import {useNavigate} from "react-router-dom"



const Singout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSignout = () =>{
        dispatch(Logout())
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        navigate("/")

    }

    return (
        <div>
            <Button onClick={onSignout}  color="inherit">Sign Out</Button>
        </div>
    );
};

export default Singout;