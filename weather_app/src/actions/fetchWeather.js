
export function fetchWeather(city){

    return function(dispatch){
        fetch(`http://api.weatherstack.com/current?access_key=e67de9a718f4fd25c03bd0e84b2bf80d&query=${city}`)
        .then(res => {
            return res.json();
        })
        .then(JSONres => {
            // dispatch the action 
            dispatch({type: "FETCH_WEATHER",
            payload: JSONres });
        })
        .catch(error => (console.log(error)))
    }
}