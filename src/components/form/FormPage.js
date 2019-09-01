import React, { Component } from 'react'
import {Form,FormGroup,Label,Input,Button,Container} from 'reactstrap'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as weatherActions from "../../redux/actions/WeatherAction";

class FormPage extends Component {

    getWeather=(e)=>{
        const city=e.target.elements.city.value
        const country=e.target.elements.country.value

        this.props.actions.GETWEATHER(city,country)
        this.props.actions.GETTEMPARATURE(city,country)
        this.props.actions.GETCOORDİNATE(city,country)
        this.props.actions.GETCITYNAME(city,country)

        e.preventDefault()
    }

    

  
    render() {
        return (
            <div>
 
              <Container fluid>
                <Form onSubmit={this.getWeather}>
                   <FormGroup>
                     <Label for="city">City Name</Label>
                     <Input type="text" name="city"/>
                   </FormGroup>
                   <FormGroup>
                     <Label for="country">Country Name</Label>
                     <Input type="text" name="country"/>
                   </FormGroup>
                 <Button className="btn btn-primary">Get Info</Button>
                </Form>
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
      coord:state.GetCoordinateReducer
    };
  }

function MapDispatchToProp(dispatch){
    return{
        actions:{
            GETWEATHER:bindActionCreators(weatherActions.GETWEATHER,dispatch),
            GETTEMPARATURE: bindActionCreators(weatherActions.GETTEMPARATURE,dispatch),
            GETCOORDİNATE: bindActionCreators(weatherActions.GETCOORDİNATE, dispatch),
            GETCITYNAME:bindActionCreators(weatherActions.GETCITYNAME,dispatch)
        }
    }
}

export default connect(MapStateToProp,MapDispatchToProp)(FormPage)
