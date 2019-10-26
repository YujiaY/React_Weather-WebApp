import React from 'react';
import {connect} from 'react-redux';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Loader from './components/Loader';


import {fetchWeatherData} from './utils/axios';
import {fetchDataThunkAction} from './redux/weatherActions';


import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: 'C',
      input: '',
      current: {},
      forecasts: [],
      cityName: ''
    }
  }

  componentDidMount() {
    // fetchWeatherData(this.state.cityName)
    //   .then(this.updateWeather);
    this.props.getWeatherData('Brisbane')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  toggleUnit = () => {
    this.setState(state => ({unit: state.unit === 'C' ? 'F' : 'C'}))
  }

  changeLimit = limit => {
    this.setState({itemLimit : limit});
  }

  handleInputChange = e => {
    this.setState({input: e.target.value});
  };

  handleInputSubmit = () => {
    console.log(this.state.input);
    fetchWeatherData(this.state.input)
      .then(this.updateWeather)
      .catch(err => {
        // console.log(JSON.stringify(err))
        if (err.response.data.message === "city not found") {
          this.setState({input: 'City Not Found in AU.'})
        }
      });
  };

  updateWeather = res => {
      const data = res.data.data;
      const forecasts = data.forecast.slice(0, 10);
      const current =data.current;
      const cityName = data.city.name;
      this.setState({
        forecasts,
        cityName,
        current
      })
  }

  renderMain() {
    return <Main
      // forecasts = {this.state.forecasts.slice(0, this.state.itemLimit)}
      // changeLimit = {this.changeLimit}
      // itemLimit = {this.state.itemLimit}
      // cityName = {this.state.cityName}
      // current = {this.state.current}
      unit = {this.state.unit}
    />
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation
          inputValue = {this.state.input}
          handleInputChange = {this.handleInputChange}
          handleInputSubmit = {this.handleInputSubmit}
          toggleUnit = {this.toggleUnit}
          unit = {this.state.unit}
        />
        {this.props.isLoadingWeather ? <Loader /> : this.renderMain()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasError: !!state.weatherRdc.error,
  isLoadingWeather: state.weatherRdc.isLoading
})

const mapDispatchToProps = dispatch => ({
  getWeatherData: city => dispatch(fetchDataThunkAction(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
