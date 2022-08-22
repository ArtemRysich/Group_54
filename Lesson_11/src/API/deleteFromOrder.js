export default function deleteFromOrder(id) {
  const url = `https://reqres.in/api/store/order/${id}`
  //   const options = {   <----альтернатива
  //     method: 'DELETE'
  //   }
  const response = fetch(url, {
    method: "DELETE"
  })
  return response;
}