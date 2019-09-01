import * as weatherActionTypes from "../actions/type/ActionTypes";
import InitialState from "./InitialState";

export default function GetWeatherReducer(
  state = InitialState.weather,
  action
) {
  switch (action.type) {
    case weatherActionTypes.GET_WEATHER_INFO:
      return action.payload.weather
      
    default:
      return state;
  }
}
