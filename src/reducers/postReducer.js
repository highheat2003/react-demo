/*
    Action의 종류
 */
const ADD_POST = 'crud/ADD_POST';
const DELETE_POST = 'crud/DELETE_POST';
const EDIT_POST = 'crud/EDIT_POST';
const UPDATE_POST = 'crud/UPDATE_POST';

/*
    Action생성자
 */
export const addPost = (data) => {
    console.log('Action생성자=>addPost',data);
    return ({ type: ADD_POST, data })
};
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const editPost = (id) => ({ type: EDIT_POST , id });
export const updatePost = (id, data) => ({ type: UPDATE_POST, id, data });

/*
    초기상태
 */
const initialState = {
    posts: [],
    id: undefined, /* 수정,삭제시 선택된 id */
};


export default function postReducer(state = initialState, action){
    console.log('postReducer : ',action.type);
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat(action.data)
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post)=>post.id !== action.id)
            }
        case EDIT_POST:
            return {
                ...state,
                //post:
                posts: state.posts.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post)=>{
                    if(post.id === action.id) {
                        return {
                            ...post,
                            title:action.data.newTitle,
                            message:action.data.newMessage,
                            editing: !post.editing
                        }
                    } else return post;
                })
            }
        default:
            return state;
    }
}

