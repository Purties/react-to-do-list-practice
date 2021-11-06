import {
    INCREMENT,
    DECREMENT
} from '../constant'

export const createIncrementAction = value => ({ type: INCREMENT, data: value });
export const createDecrementAction = value => ({ type: DECREMENT, data: value });

// 异步action必须返回一个函数，并且函数是让store调用的，但是store还是希望这个函数有dispatch，否则无法和reducer联系