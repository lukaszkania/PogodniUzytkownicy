import React, { Component } from 'react';
import WeatherImgComponent from '../WeatherImgComponent/WeatherImgComponent';
import "./WeatherWidget.scss";

class WeatherWidget extends Component {
    state = { 
        weatherDateObject:{}
     }

    componentDidMount = () => {
        if(this.props.weatherDateObject){this.setState({weatherDateObject:this.props.weatherDateObject})}
    }

    render() { 
        return ( 
            <section id="weather-container">
                {this.props.weatherDateObject ? 
                (
                    <>
                        <p><WeatherImgComponent iconType={this.props.weatherDateObject.icon}/></p>
                        <p>Maksymalna temperatura odczuwalna: {this.props.weatherDateObject.apparentTemperatureHigh} &deg;F</p>
                        <p>Przewidywana najwyższa temperatura o godzinie: {new Date(this.props.weatherDateObject.apparentTemperatureHighTime * 1000).toLocaleTimeString()}</p>
                        <p>Temperatura w nocy: {this.props.weatherDateObject.apparentTemperatureLow} &deg;F</p>
                        <p>Przewidywana najniższa temperatura o godzinie: {new Date(this.props.weatherDateObject.apparentTemperatureLowTime * 1000).toLocaleTimeString()}</p>
                        <p>Maksymalna temperatura pozorna: {this.props.weatherDateObject.apparentTemperatureMax} &deg;F</p>
                        <p>Przewidywana maksymalna temperatura pozorna o godzinie: {new Date(this.props.weatherDateObject.apparentTemperatureMaxTime * 1000).toLocaleTimeString()}</p>
                        <p>Zachmurzenie: {Math.floor(this.props.weatherDateObject.cloudCover * 100)}%</p>
                        <p>Wilgotność: {Math.floor(this.props.weatherDateObject.humidity * 100)}%</p>
                        <p>Wschód słońca: {new Date(this.props.weatherDateObject.sunriseTime * 1000).toLocaleTimeString()}</p>
                        <p>Zachód słońca: {new Date(this.props.weatherDateObject.sunsetTime * 1000).toLocaleTimeString()}</p>
                        <p>Prędkość wiatru: {this.props.weatherDateObject.windSpeed} MPH</p>
                    </>
                )
                :
                ("Wystąpił problem z pogodą")}
            </section>
         );
    }
}

export default WeatherWidget;