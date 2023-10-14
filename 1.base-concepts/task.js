"use strict"

function solveEquation(a, b, c) {

  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant > 0) {
    arr = [((-b + Math.sqrt(discriminant)) / (2 * a)), ((-b - Math.sqrt(discriminant)) / (2 * a))];
  } else if (discriminant === 0) {
    arr = [(-b / (2 * a))];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let interestMontRate = percent / 100 / 12; // месячная ставка/100
  let loanAmount = amount - contribution; // тело кредита
  let monthPay = loanAmount * (interestMontRate + (interestMontRate / (Math.pow((1 + interestMontRate), countMonths) - 1))) //ежемесячный платеж
  let total = monthPay * countMonths

  return +total.toFixed(2);
}