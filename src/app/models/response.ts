interface ILocation {
	readonly name: string;
	readonly region: string;
	readonly country: string;
	readonly lat: number;
	readonly localtime: string;
	readonly localtime_epoch: number;
	readonly lon: number;
	readonly tz_id: string;
}

interface ICondition {
	text: string;
	icon: string;
	code: number;
}

interface ICurrent {
	cloud: number;
	condition: ICondition;
	feelslike_c: number;
	feelslike_f: number;
	gust_kph: number;
	gust_mph: number;
	humidity: number;
	is_day: number;
	last_updated: string;
	last_updated_epoch: number;
	precip_in: number;
	precip_mm: number;
	pressure_in: number;
	pressure_mb: number;
	temp_c: number;
	temp_f: number;
	uv: number;
	vis_km: number;
	vis_miles: number;
	wind_degree: number;
	wind_dir: string;
	wind_kph: number;
	wind_mph: number;
}

export interface ICity {
	country: string;
	id: number;
	lat: number;
	lon: number;
	name: string;
	region: string;
	url: string;
}

interface IAstro {
	sunrise: string;
	sunset: string;
	moonrise: string;
	moonset: string;
	moon_phase: string;
	is_moon_up: number;
	is_sun_up: number;
	moon_illumination: string;
}

interface IDay {
	avghumidity: number;
	avgtemp_c: number;
	avgtemp_f: number;
	avgvis_km: number;
	avgvis_miles: number;
	condition: ICondition;
	daily_chance_of_rain: number;
	daily_chance_of_snow: number;
	daily_will_it_rain: number;
	daily_will_it_snow: number;
	maxtemp_c: number;
	maxtemp_f: number;
	maxwind_kph: number;
	maxwind_mph: number;
	mintemp_c: number;
	mintemp_f: number;
	totalprecip_in: number;
	totalprecip_mm: number;
	totalsnow_cm: number;
	uv: number;
}

export interface IForecastDay {
	astro: IAstro;
	date: string;
	date_epoch: number;
	day: IDay;
	hour: [];
}

interface IForecast {
	forecastday: IForecastDay[]
}

export interface IResponseForecastWeather {
	location: ILocation;
	current: ICurrent;
	forecast: IForecast;
}