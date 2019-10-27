import React from 'react';
import {connect} from "react-redux";

import {toggleUnit as toggleUnitAction} from '../redux/actions/navigationActions';

function Navigation(props) {
  const {unit, toggleUnit} = props;
  return (
		<nav>
		  	<div>
				<input
          className="search-input"
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
				<button
          className="search-btn"
          onClick={props.handleInputSubmit}
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
})

const mapDispatchToProps = dispatch => ({
  toggleUnit : () => dispatch(toggleUnitAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
