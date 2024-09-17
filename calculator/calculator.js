window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// ****** This function sets up default values that will appear on page load.
function setupIntialValues() {
  // sets the following default values in the DOM
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8,
  };

  // variables reflect above default values from the DOM
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;

  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;

  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;

  // function `calculateMonthlyPayment(values);` uses above set default values
  update();
}

// ****** Get the current values from the UI Update the monthly payment
function update() {
  // take current UI values and calculate monthly payment
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// ****** Given an object of values (a value has amount, years and rate ) calculate the monthly payment
function calculateMonthlyPayment(values) {
  // convert our values to use in monthly payment calculation
  let i = values.rate / 100 / 12; // periodic interest rate (in our case yearly rate ÷ 12)
  let n = Math.floor(values.years * 12); // total number of payments (years × 12)

  // calculate the monthly payment.  The output should be a string, to 2 decimal points
  return ((values.amount * i) / (1 - Math.pow(1 + i, -n))).toFixed(2);
}

// ****** Given a string representing the monthly payment value, update the UI to show the value.
function updateMonthly(monthly) {
  // define the variable for monthly payment in DOM
  const monthlyUI = document.getElementById("monthly-payment");

  // update DOM with monthly payment string
  monthlyUI.innerText = "$" + monthly;
}
