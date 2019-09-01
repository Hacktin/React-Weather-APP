
import CombineReducers from './reducers/CombineReducers'
import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'


export default function ConfigureStore(){
    return createStore(CombineReducers,applyMiddleware(thunk))
}