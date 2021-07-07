import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actiontype"
import * as api from "../component/Api";

export const getPost = () => async(dispatch) => {
    try {
        //action creator
        const { data } = await api.fetchPost();
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }


}
export const getPostBySearch = (searchQuery) => async(dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostbySearch(searchQuery);
        // dispatch({type: FETCH_ALL, payload:data}) 
        console.log(data)

    } catch (error) {
        console.log(error)

    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: CREATE,
            payload: data
        })

    } catch (error) {
        console.log(error.message)

    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        console.log(data, 'jjjjjjj')
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}
export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        //  console.log('jjjjjjj')
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.likePost(id);
        //console.log(data, 'likepost')
        dispatch({
            type: LIKE,
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}