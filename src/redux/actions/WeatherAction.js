import * as actionTypes from "./type/ActionTypes";
import axios from "axios";


export function GetWeather(weather) {
  return {
    type: actionTypes.GET_WEATHER_INFO,
    payload:weather
  };
}

export function GetTemparature(weather){
  return{
    type:actionTypes.GET_TEMPARATURE_INFO,
    payload:weather
  }
}

export function GetCoordinate(weather){
  return{
    type:actionTypes.GET_COORDİNATE_INFO,
    payload:weather
  }
}


export function GetCityName(weather){
  return{
    type:actionTypes.GET_CİTY_NAME,
    payload:weather
  }
}

export function GetSystem(weather){
  return{
    type:actionTypes.GET_SYSTEM,
    payload:weather
  }
}

export function RequestToAPI(city="Kocaeli",country="tr") {
    let url ="http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=3f62ceebcc4c913adf92c71684568435&units=metric";
    return axios.get(url)
}



export function GETWEATHER(city,country){
  return function(dispatch){
  return RequestToAPI(city,country).then(response=>{
    dispatch(GetWeather(response.data))
    console.log(response.data.weather)
  })
}
}

export function GETCITYNAME(city,country){
  return function(dispatch){
  return RequestToAPI(city,country).then(response=>{
    dispatch(GetCityName(response.data))
    
  })
}
}

export function GETTEMPARATURE(city,country){
  return function(dispatch){
    return RequestToAPI(city,country).then(response=>{
      dispatch(GetTemparature(response.data))
      console.log(response.data.main)
    })
  }
}

export function GETCOORDİNATE(city,country){
  return function(dispatch){
    return RequestToAPI(city,country).then(response=>{
      dispatch(GetCoordinate(response.data))
      console.log(response.data.coord)
    })
  }
}

export function GETSYSTEM(city,country){
  return function(dispatch){
    return RequestToAPI(city,country).then(response=>{
      dispatch(GetSystem(response.data))
      console.log(response.data.coord)
    })
  }
}
