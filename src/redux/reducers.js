import weatherReducer from "./weatherReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
  weatherRdc : weatherReducer
});


export default rootReducer;
