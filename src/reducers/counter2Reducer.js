/*
    Action의 종류
 */
const INCREMENT = 'counter2/INCREMENT';
const DECREMENT = 'counter2/DECREMENT';

/*
    Action생성자
 */
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

/*
    초기상태
 */
const initialState = {
    number: 0
};

/*
    reducer함수를 정의
 */
export default function counter2Reducer(state = initialState, action) {
    console.log('counter2Reducer : ',action.type);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
};


