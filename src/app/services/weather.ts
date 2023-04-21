import { Forecast } from './../models/response';
export class CityWeather {
	constructor(
		public id: string,
		public city: string,
		public country: string,
		public explanation: string,
		public icon: string,
		public temp: number,
		public feelsLikeTemp: number,
		public forecastWeather: Forecast,
		public alreadyFavorite: boolean,
	){}
}