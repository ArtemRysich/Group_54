// import searchApi from "./script/fetchSearch";
// import cards from "./templates/cards.hbs"
// const list = document.querySelector('.list');
// // const load = document.querySelector('.load');
// const input = document.querySelector('.input');
// const search = document.querySelector('.search');
// const guard = document.querySelector('.js-guard')

// let page = 1;
// const options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 1
// }
// const observer = new IntersectionObserver(updateList, options)


// searchApi().then(data => {
//   //   data.docs.forEach(obj => {
//   //     obj.birth ? obj.birth : obj.birth = 'XXXX'
//   //   })
//   const markup = cards(data.docs)
//   list.insertAdjacentHTML('beforeend', markup)
//   observer.observe(guard)
// })


// load.addEventListener('click', onLoadMore)

// function onLoadMore(evt) {
//   searchApi(page += 1).then(data => {
//     const markup = cards(data.docs)
//     list.insertAdjacentHTML('beforeend', markup)
//   })
// }


// search.addEventListener('click', onClickSearch)

// function onClickSearch(evt) {
//   const value = input.value
//   page = 1
//   searchApi(page).then(data => {
//     const markup = cards(data.docs)
//     list.innerHTML = markup
//   })
// }

// function updateList(entries) {
//   entries.forEach(entry => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       searchApi(page += 1).then(data => {
//         const markup = cards(data.docs)
//         list.insertAdjacentHTML('beforeend', markup)
//       })
//     }
//   });
// }



// console.log('hello-1'); //1

// setTimeout(() => {
//   console.log('SETTIMEOUT-2'); //2
// }, 0)
// //
// new Promise((resolve, reject) => {
//     resolve('Promise-3')
// }).then(value => console.log(value)) //3


// console.log('FINISH-4'); //4