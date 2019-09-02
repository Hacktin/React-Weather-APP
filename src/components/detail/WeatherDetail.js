
import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as weatherActions from "../../redux/actions/WeatherAction";
import {Table,Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloud,faCloudSun,faCloudRain,faSnowflake,faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'

class WeatherDetail extends Component {

    componentDidMount() {
        this.props.actions.GETWEATHER()
        this.props.actions.GETSYSTEM()
       
      }

    
    changeToSymbol=(main)=>{
        if(main==="Clouds"){
            return(
                <FontAwesomeIcon icon={faCloud}/>
            )
        }

        if(main==="Clear"){
            return(
                <FontAwesomeIcon icon={faCloudSun}/>
            )
        }

        if(main==="Rain"){
            return(
                <FontAwesomeIcon icon={faCloudRain}/>
            )
        }

        if(main==="Snow"){
            return(
            <FontAwesomeIcon icon={faSnowflake}/>
            )
        }

        if(main==="Fog" || main==="Mist"){
            return(
                <FontAwesomeIcon icon={faCloudUploadAlt}/>
                )
        }

    }

    render() {
        return (
            <div>
                <Container fluid>
                <Table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Weather Main</th>
                            <th>Description</th>
                            <th>#</th>
                            <th>Back to Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(w=>(
                            <tr key={w.id}>
                                <td>{this.changeToSymbol(w.main)}</td>
                                <td>{w.main}</td>
                                <td>{w.description}</td>
                                <td>{w.id}</td>
                                <td><Link to={"/"}>Click</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Container>
            </div>
        )
    }
}
function MapStateToProp(state) {
    return {
      weather:state.GetWeatherReducer,
      Weather:state.GetCityReducer,
      main:state.GetTemparatureReducer,
      coord:state.GetCoordinateReducer,
      sys:state.GetSystemReducer
    };
  }
  
  function MapDispatchToProp(dispatch) {
    return {
      actions: {
       GETWEATHER:bindActionCreators(weatherActions.GETWEATHER,dispatch),
       GETTEMPARATURE: bindActionCreators(weatherActions.GETTEMPARATURE,dispatch),
       GETCOORDİNATE: bindActionCreators(weatherActions.GETCOORDİNATE, dispatch),
       GETCITYNAME:bindActionCreators(weatherActions.GETCITYNAME,dispatch),
       GETSYSTEM:bindActionCreators(weatherActions.GETSYSTEM,dispatch)
       
      }
    };
  }
  
  export default connect(
    MapStateToProp,
    MapDispatchToProp
  )(WeatherDetail);
  