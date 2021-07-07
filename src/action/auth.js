import { AUTH } from '../constants/actiontype'
import * as api from "../component/Api";
//mport Auth from '../component/Auto/Auth';
//import { ContactsOutlined } from '@material-ui/icons';

export const signin = (formData, history) => async(dispatch) => {
    try {
        const { data } = await api.signin(formData);
        dispatch({ type: AUTH, data })

        history.push('/')
    } catch (error) {
        console.log(error)
    }
};

export const signup = (formData, history) => async(dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: AUTH, data })

        history.push('/')
    } catch (error) {
        console.log(error)
    }
};