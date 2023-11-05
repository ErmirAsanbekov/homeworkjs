let user = {
    name: "",
    age: 0,
    
   
    person: function() {
      console.log("Имя: " + this.name + ", Возраст: " + this.age);
    }
  };

  user.name = "Ermir";
  user.age = 15;
  
  user.person();


  const Automobile = {
    make: "",
  
   
    CarInfo: function() {
      return "My car - " + this.make;
    }
  };
  

  Automobile.make = "Toyota";
  
 
  let carInfo = Automobile.CarInfo();
  console.log(carInfo);


  let circle = {
    radius: 0,
  
   
    calculate: function() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
 
  circle.radius = 5; 

  let circleArea = circle.calculate();
  console.log("area of ​​a circle: " + circleArea.toFixed(2));


  const calculator = {
    number1: 0,
    number2: 0,
  
   
    add: function() {
      return this.number1 + this.number2;
    },
  
  
    multiply: function() {
      return this.number1 * this.number2;
    }
  };
  
 
  calculator.number1 = 5;
  calculator.number2 = 3;
  

  let sum = calculator.add();
  console.log("sum: " + sum);
  
 
  let product = calculator.multiply();
  console.log("Work: " + product);


  function getDayOfWeek() {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date();
    let dayOfWeek = today.getDay();
    return daysOfWeek[dayOfWeek];
  }
  
  let currentDayOfWeek = getDayOfWeek();
  console.log("Today " + currentDayOfWeek);


  const Product = {
    Name: "",
    price: 0,
  
  
    getInfo: function() {
      console.log("Product " + this.Name + " price " + this.price + " dollars");
    }
  };
 
  Product.Name = "Laptop";
  Product.price = 1000;

  Product.getInfo();


  var Animal = {
    Name: "",
  
    makeSound: function(sound) {
      console.log(this.Name + " makes a sound " + sound);
    }
  };
  
  Animal.Name = "Cat";
  
  Animal.makeSound("meow");


  function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    return accumulator;
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const sun = myReduce(numbers, (accumulator, current) => accumulator + current, 0);
  console.log(sun);
  


  