import Counter2 from "./Counter2";
import {increment, decrement} from "../reducers/counter2Reducer";
import {connect} from "react-redux";

// store안의 state를 props에 연결
const mapStateToProps = (state) => ({
    number: state.counter2.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
});

const Counter2Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter2);

export default Counter2Container;
