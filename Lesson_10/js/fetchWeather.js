// const key=878edb375c3746b09be132732221508
const key = '878edb375c3746b09be132732221508'
const base = 'http://api.weatherapi.com/v1/';
const endpoint = 'forecast.json ';

export default function apiWeather(city) {
 return fetch(`${base}${endpoint}?key=${key}&q=${city}&days=7`).then(res => {
    console.log(res);
    if (!res.ok) {
      throw new Error('bla-bla-bla ERROR')
    }
    return res.json()
  }).catch(err => console.log(err))
}