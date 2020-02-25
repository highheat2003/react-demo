import React from 'react';
import Post from "./Post";
import {deletePost, editPost} from "../reducers/postReducer";
import {useDispatch} from "react-redux";

const PostContainer = ({post}) => {
    const dispatch = useDispatch();

    return(
        <Post post={post} deletePost={(id) => dispatch(deletePost(id))} editPost={(id) => dispatch(editPost(id))} />
    );
};

export default PostContainer;
