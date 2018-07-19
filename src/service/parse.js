export const PARSE_WEATHER_DATA = resronse => {
	var data = {
		temperatureT: null,
		description: null,
		area: null,
		dateMonth: null,
		dateDay: null,
		mph: null,
		humidity: null,
		cloudiness: null
	}
	var res = resronse.data;
	data.temperatureT = res.current.temp_c;
	data.description = res.current.condition.text;
	data.area = res.location.name + ', ' + res.location.country;
	data.mph = res.current.wind_mph ;
	data.humidity = res.current.humidity;
	data.cloudiness = res.current.cloud;
	return data
}