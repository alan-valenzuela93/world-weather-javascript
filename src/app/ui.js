export class UI {
    constructor() {
        /* all the properties to display */
        this.location = document.getElementById('weather-location');
        this.description = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
        this.min = document.getElementById('temp-min');
        this.max = document.getElementById('temp-max');
        this.iconid = document.getElementById('icon');
        this.iconimg = document.querySelector('.w-icon');
        this.thermal = document.getElementById('thermal');
    }

    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.description.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + ' Cº';
        this.min.textContent = 'Min. ' + weather.main.temp_min + ' Cº';
        this.max.textContent ='Max. ' + weather.main.temp_max + ' Cº';
        this.humidity.textContent = 'Humidity ' + weather.main.humidity + '%';
        this.wind.textContent = 'Wind ' + weather.wind.speed + 'm/s';
        this.iconid = weather.weather[0]['icon'];
        this.iconimg.innerHTML = `<img src = http://openweathermap.org/img/wn/${this.iconid}@2x.png>`;
        this.thermal.textContent = 'Feels like ' + weather.main.feels_like + ' Cº';
    }
}
