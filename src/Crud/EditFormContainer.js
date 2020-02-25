import React from 'react';
import EditForm from "./EditForm";
import {updatePost} from "../reducers/postReducer";
import {useDispatch} from "react-redux";

const EditFormContainer = ({post}) => {
    const dispatch = useDispatch();

    return(
        <EditForm post={post} updatePost={(id, data) => dispatch(updatePost(id, data))}/>
    );
};

export default EditFormContainer;
