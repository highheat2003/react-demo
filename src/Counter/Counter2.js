import React from "react";

const Counter2 = ({number, onIncrement, onDecrement}) => {
    return (
        <div>
            <h1>Counter with Redux</h1>
            <h1>{number}</h1>
            <button onClick={onIncrement}>증가 (+)</button>
            <button onClick={onDecrement}>감소 (-)</button>
        </div>
    );
}

Counter2.defaultProps = {
    number: 0,
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
}

export default Counter2;
