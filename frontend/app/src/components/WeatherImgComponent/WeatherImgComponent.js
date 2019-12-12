import React, { Component } from 'react';
import { CLEAR_DAY, RAIN, SNOW, SLEET, WIND, FOG, CLOUDY, PARTLY_CLOUDY_DAY } from '../../constants/API_WEATHER_ICONS_NAME';

class WeatherImgComponent extends Component {
    componentDidUpdate = () => {
        const iconWeatherTag = document.getElementById("weather-icon")
        if(iconWeatherTag){
            iconWeatherTag.className = this.setIconClassName(this.props.iconType)}
        
    }
    
    setIconClassName = (iconTypeWeatherName) => {
        let iconSourceClassName;

        switch(iconTypeWeatherName){
            case CLEAR_DAY:
                iconSourceClassName = "fas fa-sun";
                break;
            case RAIN:
                iconSourceClassName = "fas fa-cloud-rain";
                break;
            case SNOW:
                iconSourceClassName = "fas fa-snowflake";
                break;
            case SLEET:
                iconSourceClassName = "fas fa-snowflake";
                break;
            case WIND:
                iconSourceClassName = "fas fa-wind";
                break;
            case FOG:
                iconSourceClassName = "fas fa-smog";
                break;
            case CLOUDY:
                iconSourceClassName = "fas fa-cloud";
                break;
            case PARTLY_CLOUDY_DAY:
                iconSourceClassName = "fas fa-cloud-sun";
                break;
            default:
                iconSourceClassName = "Undefined";
                break;
            }

            return iconSourceClassName
    }

    render() { 
        return ( 
            <>
                {this.props.iconType ? 
                (
                    <i id="weather-icon" ></i>
                )
                :
                (
                    <>
                        Brak ikony pogodowej
                    </>
                )}
            </>
         );
    }
}
 
export default WeatherImgComponent;