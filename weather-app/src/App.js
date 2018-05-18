//import style from "./main.css"
import React from "react";
import Title from "./components/title.js";
import Form from "./components/form.js";
import Weather from "./components/weather.js";

const API_KEY = "3713208d70dd7d202b7316c083d91088";

class App extends React.Component{
  state = {//Initial State
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else{
      console.log(data);
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter a Valid City & Country"
      });
    }
  };
  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city} 
                    country={this.state.country} 
                    description={this.state.description} 
                    error={this.state.error} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
<div>
        
        
        
      </div>
export default App;