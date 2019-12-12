import React, { Component } from 'react';
import axios from 'axios';
import {WEATHER_API_URL, API_WEATHER_KEY} from '../../constants/WEATHER_API_URL';
import { FormGroup, Form, FormControl} from 'react-bootstrap';
import WeatherWidget from '../WeatherWidget/WeatherWidget';

class WeatherWidgetComponent extends Component {
    state = { 
        lonRange:"20",
        latRange:"50",
        forecastArr:[], 
        dateRange:new Date().toLocaleString().slice(0,10),
        currentWeatherDateObject:{}
     }

    getDataFromAPI = () => {
        const proxy = "https://cors-anywhere.herokuapp.com/"
        axios.get(`${proxy}${WEATHER_API_URL}${API_WEATHER_KEY}/${this.state.latRange},${this.state.lonRange}`)
        .then(response => {
            this.setState({
                forecastArr:response.data.daily.data,
                chosenDate: new Date(response.data.daily.data[0].time * 1000).toLocaleString().slice(0,10),
                currentWeatherDateObject:response.data.daily.data[0]
            })
        }).catch(error => {
            console.log(error.message)
        })
    }

    componentDidMount = () => {
        this.getDataFromAPI();
    }

    onChange = event => {
        const elementToChange = document.getElementById(event.target.id)
        const rangeInputValue = elementToChange.value;
        let textContentToOverwrite;

        if(elementToChange.id === "dateRange"){
            textContentToOverwrite = new Date(this.state.forecastArr[rangeInputValue].time * 1000).toLocaleString().slice(0,10)
            this.setState({
                dateRange:textContentToOverwrite,
                currentWeatherDateObject:this.state.forecastArr[rangeInputValue]
            })
        }else{
            textContentToOverwrite = rangeInputValue
            this.setState({
                [elementToChange.id]:textContentToOverwrite
            })
        }
        this.getDataFromAPI();

    }

    render() { 
        return ( 
            <>
                <Form>                    
                    <FormGroup>
                    <Form.Text id="lat" type="text">Szerokość geograficzna:{this.state.latRange}</Form.Text>
                    </FormGroup>
                    <FormControl id="latRange" type="range" min="-90" max="90" step="0.01" defaultValue="50" onChange={this.onChange}></FormControl> 
                    <FormGroup>
                    <Form.Text id="lon" type="text">Długość geograficzna:{this.state.lonRange}</Form.Text>
                    </FormGroup>
                    <FormControl id="lonRange" type="range" min="-180" max="180" step="0.01" defaultValue="50" onChange={this.onChange}></FormControl> 

                    <FormGroup>
                    <Form.Text id="date" type="text">Data:{this.state.dateRange}</Form.Text>
                    </FormGroup>
                    <FormControl id="dateRange" type="range" min="0" max={this.state.forecastArr.length -1} step="1" defaultValue="0" onChange={this.onChange}></FormControl> 
                </Form>
                 <WeatherWidget weatherDateObject={this.state.currentWeatherDateObject} />
            </>
         );
    }
}
 
export default WeatherWidgetComponent;




