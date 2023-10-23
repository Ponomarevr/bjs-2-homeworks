//Задача 1

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

//Задача 2

function summElementsWorker(...arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let difference = max - min;

    return difference;
  }

  return difference = 0;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
    let sumEvenElement = 0
    let sumOddElement = 0

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else sumOddElement = sumOddElement + arr[i];
    }
    const difference = sumEvenElement - sumOddElement;

    return difference
  }

  return difference = 0;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length > 0) {
    let countEvenElement = 0
    let sumEvenElement = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      }
    }
    const averageEvenElement = sumEvenElement / countEvenElement;

    return averageEvenElement;
  }

  return averageEvenElement = 0;
}

//Задача 3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult
}
