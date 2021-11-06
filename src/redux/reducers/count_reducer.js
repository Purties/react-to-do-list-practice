/* 
    reducer的本质就是一个函数
    reducer的函数会接到两个参数
    分别是preState和action
*/

const initState = 0;
function countReducer(preState = initState, action) {
    // console.log("count_reducer", preState, action);
    // 从action对象中获取type, data 
    const { type, data } = action;
    switch (type) {
        // 如果是加
        case 'increment':
            return preState + +data
            break;
        // 如果是减
        case 'decrement':
            return preState - data
            break;
        default:
            return preState;
            break;
    }
}
export default countReducer;