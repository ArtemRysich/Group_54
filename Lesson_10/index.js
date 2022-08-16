// http://www.weatherapi.com/
// https://www.postman.com/downloads/
// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
// https://uk.wikipedia.org/wiki/REST
// https://uk.wikipedia.org/wiki/SOAP
// https://developer.mozilla.org/ru/docs/Web/HTTP/Status

import weatherApi from './js/fetchWeather';
const form = document.querySelector('.search')
const title = document.querySelector('.city-name')
const list = document.querySelector('.forecast')
const upload = document.querySelector('#input')
console.log(upload);
form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
  evt.preventDefault();
  const city = evt.target.elements.search.value
  console.dir(city);
  weatherApi(city)
  .then(data => createMarkup(data))
  .finally(evt.target.reset());

}

function createMarkup({
  location: {
    name
  },
  forecast: {
    forecastday
  }
}) {

  title.textContent = name
  const markup = forecastday.reduce((acc, {
    date,
    day: {
      avgtemp_c: temp,
      condition: {
        text,
        icon
      }
    }

  }) => {
    return acc + `<li>
<h3>${date}</h3>
<p>Temp: ${temp}</p>
<p>${text}</p>
<img src="${icon}" alt="${text}">
</li>`
  }, '')
  list.insertAdjacentHTML('beforeend', markup)

}