import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Forecast } from '../model/forecast';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  readonly apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http:HttpClient) {}

  getMeteoData(latitude: number, longitude: number):Observable<Forecast[]>{
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,cloudcover,windspeed_10m`;
    return this.http.get<any>(url).pipe(
      map(data => this.createForecatArray(data))
    );
  }

  createForecatArray(data:any):Forecast[]{
    console.log('start create',data);
    const tempArray:Forecast[]= []

    for (let i = 0; i < data.hourly.time.length; i++) {
      const forecast: Forecast = {
        time: new Date(data.hourly.time[i]),
        cloudCover: data.hourly.cloudcover[i],
        windSpeed: data.hourly.windspeed_10m[i],
        humidity: data.hourly.relativehumidity_2m[i],
        precipitation: data.hourly.precipitation_probability[i],
        temperature: data.hourly.temperature_2m[i],
        weatherCode: data.hourly.weathercode[i],

        cloudCoverUnit: data.hourly_units.cloudcover,
        windSpeedUnit: data.hourly_units.windspeed_10m,
        precipitationUnit: data.hourly_units.precipitation_probability,
        humidityUnit: data.hourly_units.relativehumidity_2m,
        temperatureUnit: data.hourly_units.temperature_2m

      }

    }

    return []
  }
}
