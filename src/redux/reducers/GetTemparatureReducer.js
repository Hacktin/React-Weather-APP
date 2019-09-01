import * as weatherActionTypes from "../actions/type/ActionTypes";
import InitialState from "./InitialState";

export default function GetTemparatureReducer(state = InitialState.weather, action) {
  switch (action.type) {
    case weatherActionTypes.GET_TEMPARATURE_INFO:
      return action.payload.main

    default:
        return state
  }
}
