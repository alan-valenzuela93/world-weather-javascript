export class Store {
    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'buenos%20aires'; /* set this city for first time the user open the app */
        this.defaultCountry = 'ar';
    }

    /* next time a user open the app, it will display the last city searched*/
    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        if(localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city : this.city,
            countryCode : this.countryCode
        }
    }
    
    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('Country Code', countryCode);
    }
}
