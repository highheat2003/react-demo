import {combineReducers} from "redux";
import counter2Reducer from "./counter2Reducer";
import postReducer from "./postReducer";
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
    crud: postReducer,
    counter2: counter2Reducer,
    sample: sampleReducer,
});

export default rootReducer;
