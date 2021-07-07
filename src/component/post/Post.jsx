import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Delete, MoreHoriz, ThumbUpAlt, ThumbUpOutlined } from '@material-ui/icons';
import React from 'react'
import useStyle from './styles'
import moment from "moment"
import {useDispatch} from "react-redux"
import { deletePost ,likePost} from '../../action/post';


export default function Post({post, setcurrentId}) {
    const classes = useStyle();
    const dispatch = useDispatch();
    const User = JSON.parse(localStorage.getItem('profile'))

    const Likes = ()=>{
        if(post.likes.length > 0 ){
            return post.likes.find((like) => like === (User?.result?.googleId || User?.result?._id)) 
            ? (
                <><ThumbUpAlt fontSize="small"/> &nbsp; {post.likes.length > 2 ? `you and ${post.likes.length -1 }others`: `${post.likes.length} like${post.likes.length > 1 ? 's' :''}`}</>
             ): (
                 <><ThumbUpOutlined fontSize="small"/> &nbsp;{post.likes.length} {post.likes.length ===1 ? 'Like' : 'Likes'}</>
             )    
        }
        return <> <ThumbUpOutlined fontSize="small"/> &nbsp; &nbsp;Like</>
    }
 
    return ( 
      <Card className={classes.card}>
          <CardMedia className={classes.medias} image={post.selectedFile} title={post.title}>  </CardMedia>
          <div className={classes.overlay}>
          <Typography variant="h6" >{post.name}</Typography>
          <Typography variant="body2" >{moment(post.createedAt).fromNow()}</Typography>

          </div>
          {(User?.result?.googleId === post?.creator || User?.result?._id === post?.creator) && (
          <div className={classes.overlay2}>
              <Button style={{color: 'red'}} size="small" onClick={()=>setcurrentId(post._id)}>
                <MoreHoriz fontSize="default" />
              </Button>
          </div>
          )}
          <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" >{post.tags.map((tag) => `#${tag}  `)}</Typography>

          </div>
          <Typography  className={classes.title} variant="h5" gutterBottom >{post.title}</Typography>
          <CardContent>
          <Typography  variant="body2" color="textSecondary" component="p"  >{post.message}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" disabled={!User?.result} onClick={()=> dispatch(likePost(post._id))}>
                <Likes/>
              </Button>
              {(User?.result?.googleId === post?.creator || User?.result?._id === post?.creator) && (
                    <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    <Delete fontSize="small"/>
                    &nbsp;  Delete
                    
                </Button>
              )}
             
          </CardActions>
      </Card>
    )
}
