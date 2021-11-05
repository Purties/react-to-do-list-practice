// createStore, 用于创建redux中核心store对象
import {createStore} from 'redux'
import countReducer from './reducers/count_reducer'

const store = createStore(countReducer);

export default store;