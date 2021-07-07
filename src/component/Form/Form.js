import { Paper, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import useStyle from "./styles"
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { createPost, updatePost } from "../../action/post";
import FileBase from 'react-file-base64';
import { useSelector } from "react-redux"


export default function Form({ currentId, setcurrentId }) {
    const [postData, setpostData] = useState({
        title: '',
        message: '',
        selectedFile: '',
        tags: '',
    })
    const classes = useStyle();
    const dispatch = useDispatch()
    const post = useSelector((state) => currentId ? state.post.find((p) => p._id === currentId) : null)
    const User = JSON.parse(localStorage.getItem('profile'))
    
    useEffect(() => {
        if (post) setpostData(post)
    }, [post])

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('ksksk')
        if (currentId === 0)  {
            dispatch(updatePost(currentId,{...postData, name:User?.result?.name}))
        } else {
            dispatch(createPost({ ...postData, name:User?.result?.name}))
        }
        clear()

    }

    if(!User?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    pls in first to get full detail
                </Typography>
            </Paper>
        )
    }

    const clear = () => {
        setcurrentId(null);
        setpostData({title: '', message: '', selectedFile: '', tags: '', })

    }
    return ( 
        <Paper>
        <form autoComplete = "off"
        noValidate className = { `${classes.root} ${classes.form}` }
        onSubmit = { handleSubmit } >
        <Typography variant = 'h6' > { currentId ? 'Editing' : ' Creating Memories' } </Typography>

      

        <TextField name = 'title'
        variant = "outlined"
        className = { classes.text }
        label = 'title'
        fullWidth value = { postData.title }
        onChange = {
            (e) => setpostData({...postData, title: e.target.value }) }
        />

        <TextField name = 'message'
        className = { classes.text }
        variant = "outlined"
        label = 'message'
        fullWidth value = { postData.message }
        onChange = {
            (e) => setpostData({...postData, message: e.target.value }) }
        />

        <TextField className = { classes.text }
        name = 'tags'
        variant = "outlined"
        label = 'tags'
        fullWidth value = { postData.tags }
        onChange = {
            (e) => setpostData({...postData, tags: e.target.value.split(',') }) }
        />

        <div className = { classes.fileInput } >
        <FileBase type = "file"
        multiple = {false}
        onDone = {
            ({ base64}) => setpostData({...postData, selectedFile: base64 }) }/>


        </div> 
        <Button className = { classes.buttonSubmit }
        variant = "contained"
        color = "primary"
        size = "large"
        type = "submit"
        fullWidth> Submit </Button>
         <Button variant = "contained"
        color = "secondary"
        size = "small"
        onClick = { clear }
        fullWidth > Clear </Button> </form> </Paper>
    )
}