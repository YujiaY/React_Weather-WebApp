import React from 'react';
import {connect} from 'react-redux';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import Error from "./components/SearchError";

import {fetchDataThunkAction} from './redux/actions/weatherActions';


import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getWeatherData('Brisbane')
  }

  renderMain() {
    if (this.props.notFoundError) return <Error errorType = 'notFoundError' />
    if (this.props.otherError) return <Error errorType='otherError' />
    return <Main />
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        {this.props.isLoadingWeather ? <Loader /> : this.renderMain()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notFoundError: !!state.weatherRdc.notFoundError,
  otherError: !!state.weatherRdc.otherError,
  isLoadingWeather: state.weatherRdc.isLoading
})

const mapDispatchToProps = dispatch => ({
  getWeatherData: city => dispatch(fetchDataThunkAction(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
