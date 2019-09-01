

import GetWeatherReducer from './GetWeatherReducer'
import GetTemparatureReducer from './GetTemparatureReducer'
import GetCoordinateReducer from './GetCoordinateReducer'
import GetCityReducer from './GetCityReducer'

import {combineReducers} from 'redux'

const CombineReducers=combineReducers({
    GetWeatherReducer,
    GetTemparatureReducer,
    GetCoordinateReducer,
    GetCityReducer

})

export default CombineReducers