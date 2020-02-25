import React from 'react';
import PostForm from "./PostForm";
import {addPost} from "../reducers/postReducer";
import {useDispatch, useSelector} from "react-redux";

const PostFormContainer = () => {
    const posts = useSelector(state => state.crud.posts);
    const dispatch = useDispatch();

    return(
        <PostForm addPost={(data) => dispatch(addPost(data))}/>
    );
};

export default PostFormContainer;
