const button = document.querySelector("button");
const request = superagent;
// console.log(request);

const api_endpoint = 'https://api.fixer.io/latest?base=USD';


function fetchPrice() {
  request
    .get(api_endpoint)
    .then(function (response) { 
      // then() retorna un Promise. Recibe dos argumentos: 
      //funciones callback  para los casos de éxito y fallo del Promise.
      const responseObject = response.body;
      const usdToMxn = responseObject.rates.MXN;
      // alert(usdToMxn)
      const priceBox = document.querySelector('#price');

      priceBox.textContent = usdToMxn;

  })
  .catch(function () { //Cuando la Promise es rechazada.
    alert('nooo');
  })
}

button.addEventListener('click', fetchPrice);
