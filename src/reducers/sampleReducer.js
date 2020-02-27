import {handleActions} from 'redux-actions';
import * as api from '../utils/api';

const GET_POST = 'thunkdemo/GET_POST';
const GET_POST_SUCCESS = 'thunkdemo/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'thunkdemo/GET_POST_FAILURE';

const GET_USERS = 'thunkdemo/GET_USERS';
const GET_USERS_SUCCESS = 'thunkdemo/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'thunkdemo/GET_USERS_FAILURE';

// thunk function
export const getPost = id => async dispatch => {
    dispatch({type: GET_POST});
    try {
        const response = await api.getPost(id);
        dispatch({
           type: GET_POST_SUCCESS,
           payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        });
        throw e;
    }
};

export const getUsers = () => async dispatch => {
    dispatch({type: GET_USERS});
    try {
        const response = await api.getUsers();
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        });
        throw e;
    }
};

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sampleReducer = handleActions({
    [GET_POST]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: true
        }
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false
        },
        post: action.payload
    }),
    [GET_POST_FAILURE]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false
        }
    }),
    [GET_USERS]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: true
        }
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        },
        users: action.payload
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        }
    }),
}, initialState);

export default sampleReducer;
