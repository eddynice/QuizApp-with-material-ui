import React,{useState, useEffect} from 'react';
import { AppBar, Avatar, Typography,Button,Toolbar} from '@material-ui/core';
import { Link, useHistory , useLocation} from 'react-router-dom'; 
import decode from "jwt-decode";

import useStyle from "./Style";
import {useDispatch} from 'react-redux';
//import { useEffect } from 'react';

function Navbar() {
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
 
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();

    const classes = useStyle();

    //    console.log(User)
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))    
     
    }, [location])

const logout = () =>{
    dispatch({type:'LOGOUT'});
    history.push('/')
    setUser(null)

}

useEffect(() => {
   const token = User?.token;
   if(token){
    const decodedToken = decode(token);
    
  if(decodedToken.exp * 1000 < new Date().getTime()) logout();
}
   
   setUser(JSON.parse(localStorage.getItem('profile')))
}, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainter}>
               <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories </Typography>
                   <img className={classes.image} src='assest/oo.jpg' alt="memory" height="60"/>
       
              
               </div>
               <Toolbar  className={classes.toolbar }>
                   {User ? (
                       <div className={classes.profile}>
                           <Avatar className={classes.purple} alt={User.result.name} src={User.result.image}>{User.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.username} variant="h6">{User.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>LOG OUT </Button>
                       </div>
                   ):(
                       <Button component={Link} to="/auth" variant="contained" color="primary">SiGN IN</Button>
                   )}
               </Toolbar>
           </AppBar>
    )
} 

export default Navbar
 