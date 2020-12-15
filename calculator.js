window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const defaultValues  = {amount: 20000, years: 10, rate: 5};
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = defaultValues.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = defaultValues.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = defaultValues.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(defaultValues) {
  const monthlyRate = (defaultValues.rate / 100) / 12;
  const n = Math.floor(defaultValues.years * 12);
  let result = (monthlyRate * defaultValues.amount)/(1 - Math.pow((1 + monthlyRate), -n));
  return result.toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}

