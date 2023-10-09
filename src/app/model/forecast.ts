export interface Forecast {
  time: Date;
  temperature: number;
  precipitation: number;
  humidity: number;
  cloudCover: number;
  windSpeed: number;
  weatherCode: number;

  temperatureUnit: string;
  humidityUnit: string;
  precipitationUnit: string;
  cloudCoverUnit:string;
  windSpeedUnit: string;
}
