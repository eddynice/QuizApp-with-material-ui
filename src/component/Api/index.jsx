import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5000'});
//before
//const  url = 'http://localhost:5000/post';
//export const fetchPost = ()=> API.get('/post')
//export const createPost = (newPost)=> axios.post(url,newPost)
//export const updatePost = (id, updatePost)=> axios.patch(`${url}/${id}`,updatePost)
//export const deletePost = (id)=> axios.delete(`${url}/${id}`)
//export const likePost = (id)=> axios.patch(`${url}/${id}/likePost`)

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
        //console.log(req.headers.Authorization)
    }
    return req;
    
})
export const fetchPost = ()=> API.get('/post')

export const fetchPostbySearch = (searchQuery)=> API.get(`/post/search?searchQuery=${searchQuery.search || 'none'}&tags={searchQuery.tags}`)

export const createPost = (newPost)=> API.post('/post',newPost);
export const updatePost = (id, updatePost)=> API.patch(`/post/${id}`,updatePost)
export const deletePost = (id)=> API.delete(`/post/${id}`)
export const likePost = (id)=> API.patch(`/post/${id}/likePost`)

export const signin = (formData) => API.post('/users/signin', formData)

export const signup = (formData) => API.post('/users/signup', formData) 
