import React,{useState,useEffect} from 'react';
import {  Container, Typography, Grow , Grid, AppBar,Button} from '@material-ui/core';
import useStyle from "./style";
import Posts from '../posts/Posts';
import {getPost, getPostBySearch} from '../../action/post';
import { useDispatch }  from 'react-redux';
import Form from "../Form/Form";
import Page from "../Page"
import{ Paper , TextField} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input'
import {useHistory , useLocation} from "react-router-dom"


function useQuery(){
    return new URLSearchParams(useLocation().search);

}

function Home() {
    const [currentId, setcurrentId] = useState(0)
    const classes = useStyle();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const  [search, setSearch] = useState('');
    const [tags, setTag] = useState([])

useEffect(() => {
    dispatch(getPost())
   
}, [currentId, dispatch]);

const searchPost = ()=> {
    if(search.trim() || tags ){
        dispatch(getPostBySearch({search,tags:tags.join(',') }))

    }else{
        history.push('/')
    }
}


const handleKeyPress=(e)=>{
    if(e.keyCode === 13){
        searchPost();
    }  
};
const handleAdd = (tag)=> setTag([...tag, tag]);
const handleDelete = (tagtoDelete) => setTag(tags.filter((tag) => tags !== tagtoDelete))
    return (
        <Grow in>
        <Container maxWidth='xl'>
            <Grid className={classes.mainContainer} container   justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={6} md={9}>
                      <Posts setcurrentId={setcurrentId}/>

                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                      <AppBar className={classes.appBarSearch} position="static"
                      color="inherit">
                          <TextField  name="search" label="search memory" onKeyPress={handleKeyPress}
                           fullWidth value={search} variant="outlined"
                            onChange={(e)=> setSearch(e.target.value)}
                              />
                              
                               <ChipInput style={{margin:'10px 0'}} 
                               value={tags} onAdd={handleAdd} onDelete={handleDelete}
                               label="search tzgs" variant="outlined" /> 
                               <Button onClick={searchPost} variant="contained" className={classes.searchButton} color="primary">Search</Button>
                      </AppBar>
                     <Form currentId={currentId} setcurrentId={setcurrentId} />
                     <Paper elevation={6} >
                         <Page/>

                     </Paper>

                  </Grid>
                  </Grid>
        </Container>

    </Grow>
    )
}

export default Home
