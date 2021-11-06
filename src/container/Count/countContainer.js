import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction } from '../../redux/actions/count_action';
console.log('这是容器组件');

// connect方法第一个参数 当react-redux调用这个函数的时候，已经获取了state
/* function mapStateToProps(state) {
    console.log('我是connect方法的第一个参数');
    return {
        sum: state
    }
} */

const mapStateToProps = state => ({ sum: state });

// connect方法第二个参数 会把函数返回的对象内容
// 函数调用的时候会自动向函数中传入dispatch作为参数
/* function mapDispatchToProps(dispatch) {
    console.log('我是connect方法的第二个参数');
    return {
        increment: (value) => {
            dispatch({
                type: 'increment',
                data: value
            })
        },
        decrement: (value) => {
            dispatch({
                type: 'decrement',
                data: value
            })
        }
    }
} */

const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction
};


// 创建容器组件，并连接UI组件
const countContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default countContainer;