import React, {useRef} from 'react';

const EditForm = ({post, updatePost}) => {
    const titleRef = useRef();
    const messageRef = useRef();

    const handleEdit = (e) => {
        e.preventDefault();
        const newTitle = titleRef.current.value;
        const newMessage = messageRef.current.value;
        const data = {
            newTitle,
            newMessage
        };
        updatePost(post.id, data);
        console.log('Edit Post ...',data);
    };

    return(
        <div key={post.id} className="post">
            <form onSubmit={handleEdit} className="form">
                <input required type="text" ref={titleRef}
                       defaultValue={post.title} placeholder="Enter Post Title" /><br /><br />
                <textarea required rows="5" ref={messageRef}
                          defaultValue={post.message} cols="28" placeholder="Enter Post" /><br /><br />
                <button>Update</button>
            </form>
        </div>
    );
};

export default EditForm;
