import React, {useEffect} from "react";
import Sample from "./Sample";
import {useDispatch, useSelector} from 'react-redux';
import {getPost, getUsers} from "../reducers/sampleReducer";

export default () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.sample);

    useEffect(() => {
        dispatch(getPost(1));
        dispatch(getUsers());
    }, [getPost, getUsers]);

    const onGetUsers = () => {
        dispatch(getUsers()); // thunk funtion을 호출
    }

    const onGetPost = () => {
        dispatch(getPost(1));
    }

    return (
        <div>
            <div>
                <button onClick={onGetPost}>불러오기(Post)</button>
                <button onClick={onGetUsers}>불러오기(Users)</button>
            </div>
            <Sample loadingUsers={state.loading.GET_USERS} users={state.users}
                    loadingPost={state.loading.GET_POST} post={state.post} />
        </div>
    );
}
