// https://petstore.swagger.io/#/store/placeOrder документація
// https://reqres.in/api АРІ
import createOrder from './API/createOrder'
import deleteFromOrder from './API/deleteFromOrder'

const instruments = [{
    id: 1,
    img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
    name: 'Молоток',
    price: 150
  },
  {
    id: 4,
    img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
    name: 'Молоток',
    price: 175
  }, {
    id: 2,
    img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
    name: 'Перфоратор',
    price: 3000
  }, {
    id: 3,
    img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg",
    name: 'Рівень',
    price: 2000
  }
]


const list = document.querySelector('.products')
const basket = document.querySelector('.basket')
const orders = []

function createMarkup(arr) {
  const markup = arr.reduce((acc, {
    id,
    img,
    name,
    price
  }) => {
    return acc += `<li class="item" data-id=${id}> 
    <img src="${img}" alt="${name}">
    <h2>${name}</h2>
    <p>${price}</p>
    <input type="number" min="1" max="10" class="js-qty">
    <button class="js-order">To order</button>
  </li>`
  }, '')
  list.insertAdjacentHTML('beforeend', markup)
}
createMarkup(instruments)


list.addEventListener('click', toOrder)
basket.addEventListener('click', onDeleteFromOrder)

console.log(basket);

function toOrder(evt) {
  if (evt.target.classList.contains('js-order')) {
    const currentId = evt.target.closest('li').dataset.id
    const qty = Number(evt.target.previousElementSibling.value) || 1;

    const currentProduct = instruments.find(({
      id
    }) => id === Number(currentId))
    const req = {
      qty,
      date: new Date(),
      status: "placed",
      complete: 'inProgres',
      testArr: [
        [1, 2, ], 3, [4, [5]]
      ],
      ...currentProduct
    }
    console.log(JSON.stringify(req));
    createOrder(req).then(res => {
      if (res.status === 201) {
        return res.json()
      }
      throw new Error('not create')
    }).then(data => {
      orders.push(req)
      markupForBasket(orders)
    }).catch(e => console.log(e))
  }
}


function markupForBasket(arr) {
  const markup = arr.reduce((acc, {
    id,
    name,
    price,
    qty,
    date
  }) => {
    return acc += `<li data-id="${id}">
    <h2>${name}</h2>
    <p> Date: ${date} </p>
    <p>QTY: ${qty}</p>
    <p>PRICE: ${price}</p>
    <p>TOTAL: ${qty*price}</p>
    <button class="js-delete">Delete</button>
  </li>`
  }, '')
  basket.innerHTML = markup
}


function onDeleteFromOrder(evt) {
  if (evt.target.classList.contains('js-delete')) {
    const currentId = evt.target.closest('li').dataset.id;
    deleteFromOrder(currentId).then(resp => {
      if (resp.status === 204) {
        const currentIdx = orders.findIndex(item => item.id === Number(currentId))
        orders.splice(currentIdx, 1)
        markupForBasket(orders)
      }
      throw new Error('Not found')
    }).catch(err => console.log(err))
  }
}