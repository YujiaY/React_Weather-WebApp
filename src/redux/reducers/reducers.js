import weatherReducer from "./weatherReducer";
import navigationReducer from "./navigationReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
  weatherRdc: weatherReducer,
  navigationRdc: navigationReducer
});


export default rootReducer;
