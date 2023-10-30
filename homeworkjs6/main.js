function addTenToEachNumber(arr) {
   
    const result = arr.map(function(number) {
      return number + 10;
    });
    
    return result;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const outputArray = addTenToEachNumber(inputArray);
  
  console.log(outputArray);


  function filterWordsByLength(words, minLength) {
   
    const filteredWords = words.filter(function(word) {
      return word.length > minLength;
    });
    
    return filteredWords;
  }
 
  const inputWords = ["apple", "banana", "cherry", "date", "elderberry"];
  const minLength = 5;
  const filteredWords = filterWordsByLength(inputWords, minLength);
  
  console.log(filteredWords);


  function printSquares(arr) {
    arr.forEach(function(number) {
      const square = number * number;
      console.log(`Квадрат числа ${number} равен ${square}`);
    });
  }

  const numbers = [1, 2, 3, 4, 5];
  printSquares(numbers);


  function sumArray(arr) {
    const total = arr.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  
    return total;
  }
  
 
  const number = [1, 2, 3, 4, 5];
  const result = sumArray(number);
  
  console.log(`Сумма чисел в массиве: ${result}`);


  function hasEvenNumber(arr) {
    return arr.some(function(number) {
      return number % 2 === 0;
    });
  }
  
 
  const num = [1, 3, 5, 8, 9];
  const hasEven = hasEvenNumber(num);
  
  console.log(hasEven);


  function areAllPositive(arr) {
    return arr.every(function(number) {
      return number > 0;
    });
  }
  

  const i = [1, 3, 5, 8, 9];
  const allPositive = areAllPositive(i);
  
  console.log(allPositive);



  function findFirstEvenNumber(arr) {
    const firstEven = arr.find(function(number) {
      return number % 2 === 0;
    });
    return firstEven || null;
  }
  

  const b = [1, 3, 5, 7, 9];
  const firstEven = findFirstEvenNumber(b);
  
  console.log(firstEven);


  function toUpperCaseArray(arr) {
    return arr.map(function(str) {
      return str.toUpperCase();
    });
  }
  
 
  const strings = ["apple", "banana", "cherry", "date"];
  const upperCaseStrings = toUpperCaseArray(strings);
  
  console.log(upperCaseStrings);


  function filterPositiveNumbers(arr) {
    return arr.filter(function(number) {
      return number > 0;
    });
  }
  

  const c = [1, -2, 3, -4, 5, -6];
  const positiveNumbers = filterPositiveNumbers(c);
  
  console.log(positiveNumbers);


  function greetNames(names) {
    names.forEach(function(name) {
      console.log(`Привет, ${name}!`);
    });
  }
  
  
  const names = ["Анна", "Петр", "Мария", "Иван"];
  greetNames(names);


  function multiplyArray(arr) {
    const result = arr.reduce(function(accumulator, currentValue) {
      return accumulator * currentValue;
    }, 1);
  
    return result;
  }
  

  const a = [1, 2, 3, 4, 5];
  const product = multiplyArray(a);
  
  console.log(`Произведение чисел в массиве: ${product}`);


  function hasLongString(arr) {
    return arr.some(function(str) {
      return str.length > 10;
    });
  }
  
  
  const d = ["короткая", "длинная строка", "еще длиннее слово"];
  const hasLong = hasLongString(d);
  
  console.log(hasLong);


  function findFirstMultipleOf7(arr) {
    const firstMultipleOf7 = arr.find(function(number) {
      return number % 7 === 0;
    });
    return firstMultipleOf7 || null;
  }
  
  
  const f = [15, 21, 8, 28, 9];
  const g = findFirstMultipleOf7(f);
  
  console.log(g);