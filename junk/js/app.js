window.addEventListener('load', ()=> {

    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.timezone');
    let temperatureSection = document.querySelector('.temparture-section');
    let temperatureSpan = document.querySelector('.temperature-section span');
    
    if (navigator.geolocation) {

        // first error
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            // second error

            // HerokuApp Proxy
            const proxy = 'https://cors-anywhere.herokuapp.com/';

            // DarkSky API
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { temperature, summary, icon } = data.currently;
                    // Set DOM Elements from API
                    temparatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;

                    // Formula For Celsius
                    let celsius = (temperature - 32) * (5 / 9);

                    //set Icon
                    setIcons(icon, document.querySelector(".icon"));

                    // Temperature to Celsius/Farenheit
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent == 'F') {
                            temperatureSpan.textContent = 'C';
                            temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = 'F';
                            temperatureDegree.textContent = temperature;
                        }
                    })

                });

        });

    } else {
        window.alert('Please turn on your location');
    }

    // third error
    // SkyCons Icons 
    function setIcons(icon, iconID) {

        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCae();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);

    }
});