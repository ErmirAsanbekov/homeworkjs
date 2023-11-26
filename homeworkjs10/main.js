document.addEventListener("keydown", function(event) {
    if (event.key === 'r') {
      document.body.style.backgroundColor = 'red';
    } else if (event.key === 'g') {
      document.body.style.backgroundColor = 'green';
    } else if (event.key === 'b' && event.shiftKey) {
      document.body.style.backgroundColor = 'black';
    } else if (event.key === 'b') {
      document.body.style.backgroundColor = 'blue';
    } else if (event.key === 'w') {
      document.body.style.backgroundColor = 'white';
    } else if (event.key === 'a' && event.shiftKey) {
      document.body.style.backgroundColor = 'gray';
    }
  });

  let i = 0

  document.getElementById('Button').addEventListener('click', function() {
    console.log(i);
    i *= 2;
  })


  document.getElementById('hideButton').addEventListener('click', function() {
    const img = document.getElementById('myImage');
    img.style.transition = 'opacity 1s ease-in-out';
    img.style.opacity = '0.2';
  })


  const black = document.getElementById('black');

black.addEventListener('click', function(event) {
  const rect = black.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`Позицияи div: X=${x}, Y=${y}`);
});

const inputText = document.querySelector('.input-text')
const outputText = document.querySelector('.outpu-text')

inputText.addEventListener('input', function() {
    outputText.textContent = inputText.value
})

const color = document.getElementById('color')

color.addEventListener('input', function() {
    document.body.style.backgroundColor = color.value
})

