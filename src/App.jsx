import React,{useEffect, useState} from 'react';
import { AppBar, Container, Typography, Grow , Grid} from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import Navbar from "./component/nav/Navbar"
import Home from './component/homed/Home';
import Auth from './component/Auto/Auth';
import postDetail from './component/postDetail/PostDetail';

export default function App() {
   const User = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
          <Container mixidth="xl">
          <Navbar/>
          <Switch>
              
          <Route path="/" exact component={()=> <Redirect to="/post" />}  />
          <Route path="/post" exact component={Home}/>
          <Route path="/post/search" exact component={Home}/>
          
          <Route path="/post/:id" exact component={postDetail}/>
          <Route path="/auth" exact component={()=> (!User ? <Auth/> : <Redirect to="/"/>)} />
          </Switch>
           
      </Container>
        
        </BrowserRouter>
     
    )
}
