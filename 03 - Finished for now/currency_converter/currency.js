const input = document.getElementById("input");
const output = document.getElementById("output");
const btnConvert = document.getElementById("btn-convert");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");

function calculateResult() {
    from = fromCurrency.value;
    to = toCurrency.value;
    amount = input.value;
    key = "data.data."+to;

    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_se65cYExpTw06iglaxNMAIDFQTHDQq4rFeDR7som&currencies=${to}&base_currency=${from}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        rate = eval(key);
        result = amount * rate;
        output.value = result.toFixed(2);
      }
    );
}

btnConvert.addEventListener("click", calculateResult);