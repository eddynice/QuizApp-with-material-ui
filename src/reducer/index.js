import { combineReducers } from 'redux';
import post from "./Post";
import Auth from './Auth'

export default combineReducers({
    post: post,
    Auth: Auth,
})