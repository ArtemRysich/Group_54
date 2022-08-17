//  https://the-one-api.dev/v2.
// https://bundlephobia.com/
// https://caniuse.com/
// https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
// Bearer 3sru3q0Sisxo4TsZOe23
// https://prnt.sc/K7R5oW1C0Ivt
const options = {
  headers: {
    Authorization: 'Bearer 3sru3q0Sisxo4TsZOe23',
  }
}
export default function search(page = 1) {
 return fetch(`https://the-one-api.dev/v2/character?limit=10&page=${page}`, options).then(response => response.json())
}



