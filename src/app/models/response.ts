interface Location {
	readonly name: string;
	readonly region: string;
	readonly country: string;
	readonly tz_id: string;
}

interface Condition {
	text: string;
	icon: string;
	code: number;
}

interface Current {
	condition: Condition;
	feelslike_c: number;
	temp_c: number;
	uv: number;
	wind_kph: number;
}

interface Day {
	avgtemp_c: number;
	condition: Condition;
	maxtemp_c: number;
	maxwind_kph: number;
	mintemp_c: number;
	uv: number;
}

export interface ForecastDay {
	date: string;
	day: Day;
}

export interface Forecast {
	forecastday: ForecastDay[]
}
export interface ResponseWeather {
	location: Location;
	current: Current;
	forecast: Forecast;
	alreadyFavorite?: boolean;
}
export interface ResponseForecastWeather {
	location: Location;
	current: Current;
	forecast: Forecast;
	isFavorite?: boolean;
	isMore?: boolean;
}