// const key = '878edb375c3746b09be132732221508'
// const base = 'http://api.weatherapi.com/v1/';


// const getUsers = async () => {
//     // const url = 'https/my-api'
//     const resp = await fetch(`http://api.weatherapi.com/v1/current.json?key=878edb375c3746b09be132732221508&q=Lviv`)
//     const response = resp.json()
//     console.log(response);
//     return response
// }
// getUsers().then(data=>console.log(data)).catch(err => console.log(err))



// const getUsers = async () => {
//     // const url = 'https/my-api'
//     await Promise.reject("Rejected")

//     return 'OK'
// }
// getUsers().then(resp => console.log(resp)).catch(e => console.log(e))

// const foo = async () => {
//   throw new Error('Whoops');
// }
// foo().then(res => console.log(res)).catch(e => console.log(e))





async function getWeather() {
    console.time('FETCH')
    const city = await fetch(`http://api.weatherapi.com/v1/current.json?key=878edb375c3746b09be132732221508&q=Kiev`)
    const respKyiv = city.json()
    console.log(respKyiv);
    respKyiv.then(res => console.log(res))
    const arr = ['Lviv', 'Dnipropetrovsk', "Ternopol", 'Kharkiv']
    const allResponse = arr.map(async city => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=878edb375c3746b09be132732221508&q=${city}`)
        // console.log(response);
        return response.json()
    })
    const cities = await Promise.all(allResponse)
    console.timeEnd('FETCH')
    return cities
}

getWeather()

// const item = document.querySelector('.item')
// try {
//     const value = Math.random()
//     if (value > 0.8) {
//         throw new Error()
//     }
// } catch (e) {
//     item.insertAdjacentHTML('beforeend', ` <img src="https://pbs.twimg.com/tweet_video_thumb/EPlvOxoWsAIRvdt.jpg" alt="">`)

// }

// console.log('after');





// getWeather().then(resp => {
//     return resp.filter(rep => {
//         if (!rep.error) {
//             return rep
//         }
//     })

// }).then(data => console.log(data))