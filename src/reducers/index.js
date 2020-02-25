import {combineReducers} from "redux";
import counter2Reducer from "./counter2Reducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    crud: postReducer,
    counter2: counter2Reducer,
});

export default rootReducer;
