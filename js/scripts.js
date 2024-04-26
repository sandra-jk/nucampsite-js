const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})  

async function fetchWeather(){
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = "Kisumu";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    //    
    }catch(error){
        console.error('There was an error!',error);
    }
}
fetchWeather();

function displayWeather(){
    const temperature = document.querySelector('#weather-temp');
    const weather = document.querySelector('weather');
    const icon = document.querySelector('weather-icon');
    const description = document.querySelector('weather-description');
}
