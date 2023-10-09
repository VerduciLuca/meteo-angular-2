import { TestBed } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import { HttpClientModule } from '@angular/common/http';

describe('MeteoService', () => {
  let service: MeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]

    });
    service = TestBed.inject(MeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create forecast array',() =>{
    const testObj = {
      "latitude": 44.4,
      "longitude": 8.940001,
      "hourly_units": {
        "time": "iso8601",
        "temperature_2m": "°C",
        "relativehumidity_2m": "%",
        "precipitation_probability": "%",
        "weathercode": "wmo code",
        "cloudcover": "%",
        "windspeed_10m": "km/h"
      },
      "hourly": {
        "time": [
          "2023-10-09T00:00",
          "2023-10-09T01:00",
          "2023-10-09T02:00",
        ],
        "temperature_2m": [
          19.5,
          19.4,
          18.9,
        ],
        "relativehumidity_2m": [
          93,
          94,
          94,
        ],
        "precipitation_probability": [
          0,
          0,
          0,
        ],
        "weathercode": [
          2,
          45,
          45,
        ],
        "cloudcover": [
          82,
          62,
          31,
        ],
        "windspeed_10m": [
          2.1,
          3.3,
          4.5,
        ]
      }
    }

    const array = service.createForecatArray(testObj);
    expect(array).toBeTruthy()
  })

});
