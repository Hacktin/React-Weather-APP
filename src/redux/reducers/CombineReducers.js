

import GetWeatherReducer from './GetWeatherReducer'
import GetTemparatureReducer from './GetTemparatureReducer'
import GetCoordinateReducer from './GetCoordinateReducer'
import GetCityReducer from './GetCityReducer'
import GetSystemReducer from './GetSystemReducer'

import {combineReducers} from 'redux'

const CombineReducers=combineReducers({
    GetWeatherReducer,
    GetTemparatureReducer,
    GetCoordinateReducer,
    GetCityReducer,
    GetSystemReducer

})

export default CombineReducers