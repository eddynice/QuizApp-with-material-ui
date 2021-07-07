import classes from '*.module.css';
import { AppBar, Fade, IconButton, Toolbar,Button, Typography } from '@material-ui/core';
import React from 'react';
import {MenuIcon} from '@material-ui/icons'
import {useState, useEffect} from "react"

const Open = ({classes})=> {
    const [scrollY, setScroll] = useState(0)
    const [scroll, setScrollin] = useState(false)

    function logit(){
        setScroll(window.pageYoffset);
    }

    useEffect(() => {
       function watchScroll(){
           window.addEventListener("scroll", logit);
       }
watchScroll();
//remove listerner (like componentwillUnmount)
return ()=>{
    window.removeEventListener("scroll", logit);
}
//const { classes } = props;

    }, [])
    return (
        <Fade in={!scroll}>
            <AppBar>
                <Toolbar>
                    <IconButton className={classes.menuButton}
                    color="inherit" aria-label="menu">
                       
                        <MenuIcon/>

                    </IconButton>
                    <Typography variant="h6"
color="inherit"
className={classes.flex}>My Title</Typography>
<Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </Fade>
        
    )
    }



    
export default Open
