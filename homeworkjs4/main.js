for (let number = 2; number <= 50; number++) {
    let num = true;
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        num = false;
        break;
      }
    }
  
    if (num) {
      console.log(number);
    }
  }


  const N = parseInt(prompt("Введите число N:"));


for (let i = 1; i <= N; i++) {
   
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i); 
    }
}

  
  for (let i = 10; i >= 1; i--) {
    console.log(i);
}


const n = parseInt(prompt("Введите число N:"));

let sum = 0;


for (let i = 1; i <= n; i++) {
    sum += i;
}


console.log("Сумма чисел от 1 до " + n + " равна " + sum);
  
const number = 7;


for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(number + " x " + i + " = " + result);
}


const numberString = prompt("Введите число:");


let sun = 0;


for (let i = 0; i < numberString.length; i++) {
    const digit = parseInt(numberString[i]);
    if (!isNaN(digit)) {
        sun += digit;
    }
}

console.log("Сумма цифр в числе " + numberString + " равна " + sun);



const height = parseInt(prompt("Введите высоту пирамиды:"));


if (!isNaN(height) && height > 0) {
  
    for (let i = 1; i <= height; i++) {
        let row = '';

      
        for (let j = 1; j <= height - i; j++) {
            row += ' ';
        }

        
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }

        
        console.log(row);
    }
} else {
    console.log("Вы ввели некорректное значение. Пожалуйста, введите положительное число.");
}