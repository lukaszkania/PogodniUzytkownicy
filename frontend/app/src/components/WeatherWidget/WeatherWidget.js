import React, { Component } from 'react';
import WeatherImgComponent from '../WeatherImgComponent/WeatherImgComponent';

class WeatherWidget extends Component {
    state = { 
        weatherDateObject:{}
     }

    componentDidMount = () => {
        if(this.props.weatherDateObject){this.setState({weatherDateObject:this.props.weatherDateObject})}
    }

    componentDidUpdate = () => {
    }

    render() { 
        return ( 
            <>
            {this.props.weatherDateObject ? 
            (
                <>
                Maksymalna temperatura odczuwalna:{this.props.weatherDateObject.apparentTemperatureHigh} &deg;F;
                Przewidywana najwyższa temperatura o godzinie:{new Date(this.props.weatherDateObject.apparentTemperatureHighTime * 1000).toLocaleTimeString()}
                Temperatura w nocy:{this.props.weatherDateObject.apparentTemperatureLow} &deg;F;
                Przewidywana najniższa temperatura o godzinie:{new Date(this.props.weatherDateObject.apparentTemperatureLowTime * 1000).toLocaleTimeString()}
                Maksymalna temperatura pozorna:{this.props.weatherDateObject.apparentTemperatureMax} &deg;F;
                Przewidywana maksymalna temperatura pozorna o godzinie:{new Date(this.props.weatherDateObject.apparentTemperatureMaxTime * 1000).toLocaleTimeString()}
                Zachmurzenie:{Math.floor(this.props.weatherDateObject.cloudCover * 100)}%;
                Wilgotność:{Math.floor(this.props.weatherDateObject.humidity * 100)}%;
                <WeatherImgComponent iconType={this.props.weatherDateObject.icon}/>
                Wschód słońca:{new Date(this.props.weatherDateObject.sunriseTime * 1000).toLocaleTimeString()}
                Zachód słońca:{new Date(this.props.weatherDateObject.sunsetTime * 1000).toLocaleTimeString()}
                Prędkość wiatru:{this.props.weatherDateObject.windSpeed} MPH
                </>
            )
            :
            ("Wystąpił problem z pogodą")}
            </>
         );
    }
}

export default WeatherWidget;


// ​
// moonPhase: 0.52
// ​
// ozone: 288.2
// ​
// precipAccumulation: 0.02
// ​
// precipIntensity: 0.0001
// ​
// precipIntensityMax: 0.0003
// ​
// precipIntensityMaxTime: 1576130400
// ​
// precipProbability: 0.05
// ​
// precipType: "snow"
// ​
// pressure: 1008.6
// ​
// summary: "Clear throughout the day."
// ​
// sunriseTime: 1576132260
// ​
// sunsetTime: 1576161600
// ​
// temperatureHigh: 37.48
// ​
// temperatureHighTime: 1576149720
// ​
// temperatureLow: 28.62
// ​
// temperatureLowTime: 1576186380
// ​
// temperatureMax: 37.48
// ​
// temperatureMaxTime: 1576149720
// ​
// temperatureMin: 22.07
// ​
// temperatureMinTime: 1576108320
// ​
// time: 1576105200
// ​
// uvIndex: 1
// ​
// uvIndexTime: 1576146600
// ​
// visibility: 10
// ​
// windBearing: 105
// ​
// windGust: 4.96
// ​
// windGustTime: 1576183800
// ​
// windSpeed: 2.02