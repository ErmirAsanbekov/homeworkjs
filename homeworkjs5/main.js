function concatStrings(str1, str2) {
    return str1.concat(str2);
  }
  
  const string1 = "java";
  const string2 = "script";
  const result = concatStrings(string1, string2);
  console.log(result);

  function replaceAllInString(inputString, targetSubstring, replacement) {
    const resultString = inputString.replaceAll(targetSubstring, replacement);
    return resultString;
  }
  
  const originalString = "javascript is a scripting language, and JavaScript is cool.";
  const searchString = "JavaScript";
  const replacementString = "JS";
  const replacedString = replaceAllInString(originalString, searchString, replacementString);
  console.log(replacedString);

  function stringToLowerCase(inputString) {
    return inputString.toLowerCase();
  }
  
  
  const originaString = "JavaScript Is Cool";
  const lowerCaseString = stringToLowerCase(originaString);
  console.log(lowerCaseString);

  function stringIncludesSubstring(inputString, substring) {
    return inputString.includes(substring);
  }
  
  
  const mainString = "This is a sample string";
  const targetSubstring = "sample";
  const includesSubstring = stringIncludesSubstring(mainString, targetSubstring);
  console.log(includesSubstring);



  const getIndexOf = (inputString, substring) => inputString.indexOf(substring);


const mainStrin = "This is a sample string with sample text.";
const targetSubstrin = "sample";
const index = getIndexOf(mainStrin, targetSubstrin);
console.log(index);


function splitString(inputString) {
    return inputString.split(" ");
  }
  
  
  const originalSting = "This is a sample string";
  const wordArray = splitString(originalSting);
  console.log(wordArray);


  function sliceSubstring(inputString, startIndex, endIndex) {
    return inputString.slice(startIndex, endIndex);
  }
  
  
  const original = "This is a sample string";
  const startIndex = 5;
  const endIndex = 16;
  const extractedSubstring = sliceSubstring(original, startIndex, endIndex);
  console.log(extractedSubstring);


  function convertToString(number) {
    return number.toString();
  }
  
  
  const num = 42;
  const str = convertToString(num);
  console.log(str);


  function parseToFloat(inputString) {
    return parseFloat(inputString);
  }
  
  
  const numericString = "3.14";
  const floatValue = parseToFloat(numericString);
  console.log(floatValue);


  const sumNumbers = (num1, num2) => num1 + num2;


const number = sumNumbers(5, 7);
console.log(number);


function getFixedNumber(number) {
    return number.toFixed(2);
  }
  
 
  const myNumber = 3.14159;
  const formattedNumber = getFixedNumber(myNumber);
  console.log(formattedNumber);


  function parseIntFromString(inputString) {
    return parseInt(inputString);
  }
  

  const numercString = "42";
  const integerValue = parseIntFromString(numercString);
  console.log(integerValue);


  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
 
  const a = addNumbers(5, 7);
  console.log(a);


  function parseFloatFromString(inputString) {
    return parseFloat(inputString);
  }
  

  const numeric = "3.14159";
  const Value = parseFloatFromString(numeric);
  console.log(Value);


  let fruits = ["яблоко", "банан", "апельсин"];


fruits.push("груша");


fruits.pop();


console.log(fruits);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let evenNumbers = numbers.slice().filter(number => number % 2 === 0);


let evenNumbersString = evenNumbers.join(', ');


console.log(evenNumbersString);


let colors = ["красный", "синий", "зеленый"];

colors.unshift("оранжевый");
colors.shift();

console.log(colors);


let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];


let mergedArray = firstArray.concat(secondArray);

let searchValue = 3;
let includesValue = mergedArray.includes(searchValue);


console.log(includesValue);


let animals = ["кот", "собака", "попугай"];


animals.push("хомяк");

let newIndex = animals.indexOf("хомяк");

console.log(newIndex);


let numb = [1, 2, 3, 4, 5];


let slicedArray = numb.slice(0, 2);

slicedArray.reverse();

let resultString = slicedArray.toString();

console.log(resultString);


let fruit = ["яблоко", "банан", "апельсин"];

fruit.unshift("груша");

fruit.shift();

console.log(fruit);


let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];


let mergedArr = [firstArray, secondArray].flat();


let resulttring = mergedArray.join(', ');

console.log(resulttring);


function findUniqueWords(inputString) {
  
    const words = inputString.toLowerCase().split(/\s+/);
  
 
    const uniqueWords = {};
  
    for (const word of words) {
      uniqueWords[word] = true;
    }
  
  
    const result = Object.keys(uniqueWords);
  
    return result;
  }
  
  const text = "This is a sample text. This is a sample Text.";
  const uniqueWords = findUniqueWords(text);
  console.log(uniqueWords);


  function replaceVowelsWithAsterisk(inputString) {
    const vowels = "AEIOUaeiou";
    let result = "";
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        result += "*";
      } else {
        result += inputString[i];
      }
    }
  
    return result;
  }
  
 
  const numtext = "This is a sample text";
  const modifiedText = replaceVowelsWithAsterisk(numtext);
  console.log(modifiedText);


  function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
  
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  
  
  const numberr = [1, 2, 3, 4, 5];
  const average = calculateAverage(numberr);
  console.log(average);


  function parseCommaSeparatedNumbers(inputString) {
    const numberStrings = inputString.split(','); 
    const numbers = [];
  
    for (let i = 0; i < numberStrings.length; i++) {
      const number = parseInt(numberStrings[i], 10);
      if (!isNaN(number)) {
        numbers.push(number); 
      }
    }
  
    return numbers;
  }
  

  const inputString = "1, 2, 3, 4, 5";
  const parsedNumbers = parseCommaSeparatedNumbers(inputString);
  console.log(parsedNumbers);


  function reverseWordsInSentence(sentence) {
  
    const words = sentence.split(' ');
  
 
    const reversedWords = words.reverse();
  
   
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
 
  const inputSentence = "Это пример предложения для теста";
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log(reversedSentence);


  function filterUniqueNumbers(numbers) {
    const uniqueNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
  
      
      if (uniqueNumbers.indexOf(number) === -1) {
        uniqueNumbers.push(number);
      }
    }
  
    return uniqueNumbers;
  }
  
 
  const numberos = [1, 2, 3, 2, 4, 5, 4, 6];
  const uniqueNumbers = filterUniqueNumbers(numberos);
  console.log(uniqueNumbers);