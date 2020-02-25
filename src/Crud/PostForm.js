import React, {useRef} from 'react';

const PostForm = ({addPost}) => {
    const titleRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const message =  messageRef.current.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false,
        }
        console.log('Create Post ...', data);
        addPost(data);
        titleRef.current.value = '';
        messageRef.current.value = '';
    }

    return(
        <div className="post-container">
            <h1 className="post_heading">Create Post</h1>
            <form onSubmit={handleSubmit} className="form">
                <input required type="text" placeholder="Enter Post Title" ref={titleRef} /><br /><br />
                <textarea required rows="5" cols="28" placeholder="Enter Post" ref={messageRef} /><br /><br />
                <button>Post</button>
            </form>
        </div>
    );
};

export default PostForm;
