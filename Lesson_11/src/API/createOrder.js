export default function createOrder(obj) {
  const url = "https://reqres.in/api/store/order"
  const options = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  const response = fetch(url, options)
  return response
}