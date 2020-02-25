import React from 'react';
import PostContainer from "./PostContainer";
import EditFormContainer from "./EditFormContainer";

const AllPost = ({posts}) => (
    <div>
        <h1 className="post_heading">All Posts</h1>
        {posts.map((post) => (
            <div key={post.id}>
                {post.editing ? <EditFormContainer post={post} /> : <PostContainer post={post} />}
            </div>
        ))}
    </div>
);

export default AllPost;
