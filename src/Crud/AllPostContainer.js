import React from 'react';
import AllPost from "./AllPost";
import {useSelector} from "react-redux";

const AllPostContainer = () => {
    const posts = useSelector(state => state.crud.posts);

    return(
        <AllPost posts={posts} />
    );
};

export default AllPostContainer;
