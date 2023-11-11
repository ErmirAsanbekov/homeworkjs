const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise выполнено");
    }, 2000);
  });
  
  myPromise.then((result) => {
    console.log(result); 
  });

  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Произошла ошибка"));
    }, 3000);
  });
  
  newPromise
    .then((result) => {

    })
    .catch((error) => {
      console.error("Ошибка: " + error.message); 
    });



    function checkEvenNumber(number) {
        return new Promise((resolve, reject) => {
          if (number % 2 === 0) {
            resolve("Число четное");
          } else {
            reject(new Error("Число нечетное"));
          }
        });
      }
      
      const inputNumber = 42;
      
      checkEvenNumber(inputNumber)
        .then((result) => {
          console.log(result); 
        })
        .catch((error) => {
          console.error("Ошибка: " + error.message); 
        });



        const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';


fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json(); 
  })
  .then((data) => {
    console.log('Полученные данные:', data);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });






