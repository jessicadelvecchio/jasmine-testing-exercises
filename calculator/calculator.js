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
  // make sure that all fields are filled and contain numbers
  // if (
  //   Number.isNAN(values.amount) ||
  //   Number.isNAN(values.years) ||
  //   Number.isNAN(values.rate)
  // ) {
  //   alert("Only numbers are accepted.");
  // }
  // if (
  //   amountUI.value.trim() === "" ||
  //   yearsUI.value.trim() === "" ||
  //   rateUI.value.trim() === ""
  // ) {
  //   alert("All fields are necessary to continue.");
  // } else {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
  // }
}

// ****** This function sets up default values that will appear on page load.
function setupIntialValues() {
  // sets the following default values in the DOM
  // // Put some default values in the inputs
  const values = {
    amount: 1000,
    years: 10,
    rate: 5,
  };

  // variables reflect above default values from the DOM
  // // Get the inputs from the DOM.
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;

  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;

  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;

  // function `calculateMonthlyPayment(values);` uses above set default values
  // // Call a function to calculate the current monthly payment
  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {}

// ****** Given an object of values (a value has amount, years and rate ) calculate the monthly payment

function calculateMonthlyPayment(values) {
  // declaring our variables
  values.amount; // principal
  values.years;
  values.rate;

  console.log(values.amount);
  console.log(values.years);
  console.log(values.rate);

  // convert our values to use in monthly payment calculation
  let i = values.rate / 12; // periodic interest rate (in our case yearly rate ÷ 12)
  let n = values.years * 12; // total number of payments (years × 12)

  console.log(i);
  console.log(n);

  // calculate the monthly payment.  The output should be a string
  let monthly = (values.amount * i) / (1 - Math.pow(1 + i, -n));

  console.log("monthly", monthly.toFixed(2));

  // that always has 2 decimal places.
  return monthly.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = monthly;
}
