const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEL = document.getElementById("Worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEL = document.getElementById("Worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
  fetch(`https://v6.exchangerate-api.com/v6/ed8ec285d224324c447392c7/latest/${currencyFirstEl.value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
      
      const convertedValue = parseFloat(worthFirstEL.value) * rate;
      worthSecondEL.value = convertedValue.toFixed(2);
    })
    .catch((error) => {
      console.error('Error fetching exchange rates:', error);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEL.addEventListener("input", updateRate);
