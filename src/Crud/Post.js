import React from 'react';

const Post = ({post, deletePost, editPost}) => {
    const handleEditPost = (e) => {
        e.preventDefault();
        editPost(post.id);
    };

    const handleDeletePost = (e) => {
        e.preventDefault();
        deletePost(post.id);
    };

    return (<div className="post">
        <h2 className="post_title">{post.title}</h2>
        <p className="post_message">{post.message}</p>
        <div className="control-buttons">
            <button className="edit" onClick={handleEditPost}>Edit</button>
            <button className="delete" onClick={handleDeletePost}>Delete</button>
        </div>
    </div>);
}

export default Post;
