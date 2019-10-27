import React from 'react';
import {connect} from "react-redux";

import {
  toggleUnit as toggleUnitAction,
  setSearchInputValue as setSearchInputValueAction,
  submitSearch as submitSearchAction
} from '../redux/actions/navigationActions';

function Navigation(props) {
  const {
    unit,
    toggleUnit,
    searchString,
    setSearchInputValue,
    submitSearch
  } = props;

  const handleKeyPress = event => {
    if (event.key === 'Enter')  {
      submitSearch(event.target.value)
}  }

  return (
		<nav>
		  	<div>
				<input
          className="search-input"
          value={searchString}
          onChange={(e) => setSearchInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
				<button
          className="search-btn"
          onClick={() => submitSearch(searchString)}
        >
					<i className="fa fa-search" />
				</button>
				<button
          className="temp-switch"
          onClick={toggleUnit}
        >
					<i
						className="fa fa-thermometer-empty temp-switch__icon"
						aria-hidden="true"
					/>
					<sup>&deg;</sup>{unit}
				</button>
		  	</div>
		</nav>
	);
}

const mapStateToProps = state => ({
  unit: state.navigationRdc.unit,
  searchString: state.navigationRdc.searchString
})

const mapDispatchToProps = dispatch => ({
  toggleUnit: () => dispatch(toggleUnitAction()),
  setSearchInputValue: value => dispatch(setSearchInputValueAction(value)),
  submitSearch: value => dispatch(submitSearchAction(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
