import * as weatherActionTypes from "../actions/type/ActionTypes";
import InitialState from "./InitialState";

export default function GetCoordinateReducer(state = InitialState.weather, action) {
  switch (action.type) {
    case weatherActionTypes.GET_COORDİNATE_INFO:
      return action.payload.coord;

    default:
        return state
  }
}
