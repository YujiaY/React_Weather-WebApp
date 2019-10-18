import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';

import axios from 'axios';
import {format} from 'date-fns';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: [],
      itemLimit: 10,
      cityName: '',
      current: {}
    }
  }

  componentDidMount() {
    axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
      .then(res => {
        console.log(res)
        const forecasts = res.data.data.forecast.slice(0, 10).map(i => {
          const date = new Date(i.time * 1000);
          const day = format(date, 'EEE');
          const time = format(date, 'HH:mm');

          return  ({
            day,
            high: i.maxCelsius,
            low: i.minCelsius,
            time
          })
        });
        const cityName = res.data.data.city.name;
        const current = {
          windSpeed: res.data.data.current.windSpeed,
          windDirection: res.data.data.current.windDirection,
          maxCelsius: res.data.data.current.maxCelsius,
          humidity: res.data.data.current.humidity,
        }
        this.setState({
          forecasts,
          cityName,
          current
        })
      })
      .catch(err => console.log(err))
  }

  changeLimit = limit => {
    this.setState({itemLimit : limit});
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        <Main
          forecasts = {this.state.forecasts.slice(0, this.state.itemLimit)}
          changeLimit = {this.changeLimit}
          itemLimit = {this.state.itemLimit}
          cityName = {this.state.cityName}
          current = {this.state.current}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
