import produce from "immer";

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

const postReducer = (state = initialState, action) => {
    console.log('postReducer : ',action.type);
    switch (action.type) {
        case ADD_POST:
            return produce(state, draft => {
                draft.posts.push(action.data);
            });
        case DELETE_POST:
            return produce(state, draft => {
                const index = draft.posts.findIndex(post => post.id === action.id);
                draft.posts.splice(index, 1);
            });
        case EDIT_POST:
            return produce(state, draft => {
                const post = draft.posts.find(post => post.id === action.id);
                post.editing = !post.editing;
            });
        case UPDATE_POST:
            return produce(state, draft => {
                const post = draft.posts.find(post => post.id === action.id);
                post.title = action.data.newTitle;
                post.message = action.data.newMessage;
                post.editing = !post.editing;
            });
        default:
            return state;
    }
}

export default postReducer;

