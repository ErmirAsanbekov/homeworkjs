const person =  {
    name: 'Ermir',
    age: 16 ,
    gender: 'male',
    city: 'Bishkek'
}
let{name, age, gender, city} = person

console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`gender: ${gender}`);
console.log(`city: ${city}`);


const number = [20, 34, 59, 12, 96]

const [number1, number2, number3, number4, number5] = number

console.log(number1, number5)


function getPersonInfo(person) {
   
    const { name1, age1 } = person;
  

    return { name1, age1 };
  }
  
 
  const personInfo = {
    name: "Иван",
    age: 25,
    gender: "мужской",
    occupation: "разработчик",
  };
  
  const { name1, age1 } = getPersonInfo(personInfo);
  
  console.log("Имя:", name1);
  console.log("Возраст:", age1);

  
  let a = 36;
  let b = 17;
  
  
  [a, b] = [b, a];
  
  console.log("a =", a); 
  console.log("b =", b);


  const companyInfo = {
    name: "Apple",
    address: "Улица Примерная, Город",
    employees: [
      {
        name: "Иван",
        position: "Разработчик",
      },
      {
        name: "Елена",
        position: "Менеджер",
      },
    ],
  };
  
  const { name: companyName, employees: [{ name: firstEmployeeName }] } = companyInfo;
  
  console.log("Название компании:", companyName);
  console.log("Имя первого сотрудника:", firstEmployeeName);


  const students = [
    { name: "Анна", age: 20 },
    { name: "Аскар", age: 22 },
    { name: "Амантур", age: 21 },

  ];
  
  for (const { name, age } of students) {
    console.log(`Студент: ${name}, Возраст: ${age}`);
  }
  