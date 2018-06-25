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
	data.temperatureT = resronse.data.current.temp_c;
	data.description = resronse.data.current.condition.text;
	data.area = resronse.data.location.name + ', ' + resronse.data.location.country ;
	data.mph = resronse.data.current.wind_mph ;
	data.humidity = resronse.data.current.humidity;
	data.cloudiness = resronse.data.current.cloud;
	return data
}