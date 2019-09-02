import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as weatherActions from "../../redux/actions/WeatherAction";
import {Table,Container,Button} from 'reactstrap'
import {Link} from 'react-router-dom'



class WeatherInformation extends Component {

  componentDidMount() {
    this.props.actions.GETWEATHER()
    this.props.actions.GETTEMPARATURE()
    this.props.actions.GETCOORDİNATE()
    this.props.actions.GETCITYNAME()
   
  }

  render() {
    return (
      <div>
       

     
        <Container fluid>
        <Table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Temparature</th>
            <th>Maximum Temparature</th>
            <th>Minimum Temparature</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to={"detail"}>{this.props.Weather.name}</Link></td>
            <td>{this.props.main.temp}</td>
            <td>{this.props.main.temp_max}</td>
            <td>{this.props.main.temp_min}</td>
            <td>{this.props.coord.lat}</td>
            <td>{this.props.coord.lon}</td>
          </tr>
        </tbody>
      </Table>
      </Container >
       
       

      
      </div>
    );
  }
}

function MapStateToProp(state) {
  return {
    weather:state.GetWeatherReducer,
    Weather:state.GetCityReducer,
    main:state.GetTemparatureReducer,
    coord:state.GetCoordinateReducer
  };
}

function MapDispatchToProp(dispatch) {
  return {
    actions: {
     GETWEATHER:bindActionCreators(weatherActions.GETWEATHER,dispatch),
     GETTEMPARATURE: bindActionCreators(weatherActions.GETTEMPARATURE,dispatch),
     GETCOORDİNATE: bindActionCreators(weatherActions.GETCOORDİNATE, dispatch),
     GETCITYNAME:bindActionCreators(weatherActions.GETCITYNAME,dispatch)
     
    }
  };
}

export default connect(
  MapStateToProp,
  MapDispatchToProp
)(WeatherInformation);
