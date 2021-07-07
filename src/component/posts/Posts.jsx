import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import Post from '../post/Post'
import useStyle from "./styles"

export default function Posts({setcurrentId}) {
    const posts = useSelector(state => state.post)
    const classes = useStyle();
   // console.log(posts)
    return ( 
      !posts.length ? <CircularProgress/>:(
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
         {posts.map((post)=>(
             <Grid key={post._id} item xs={12} sm={6}>
                 <Post post={post} setcurrentId={setcurrentId}/>
             </Grid>
             
         ))} 
         </Grid>
      )
    )
}