
import {combineReducers} from 'redux';
import {weatherInfo} from './weatherReducer';

// combine reducers
const reducers = combineReducers({
    WeatherInfo: weatherInfo, 
    // AnotherReducers: new reducers
})


export default reducers;