//3
const list = document.createElement('ul');

for (let i = 1; i <= 30; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${i} - овечка`;
    list.appendChild(listItem);
}
document.body.appendChild(list);


//4


const spans = document.getElementsByTagName('span');

for(let i = 0; i < spans.length; i++) {
    spans[i].classList.add('active')
}


//5 

const strongTags = document.querySelectorAll('strong');
strongTags.forEach((element) => {
  element.style.color = 'green';
})

//6

const ems = document.getElementsByTagName('em');

for(let b = 0; b < ems.length; b++) {
    ems[b].classList.add('selected')
}

//7

const markTagsInRow = document.querySelectorAll('.row mark');
markTagsInRow.forEach((element) => {
  element.classList.add('selected');
});

//8

const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].style.textDecoration = 'none';
}

//9 

const strongElements = document.querySelectorAll('strong');

strongElements.forEach(element => {
 
  if (element.classList.contains('some')) {

    element.classList.remove('some');
  } else {

    element.classList.add('some');
  }
});

//10

const rowElements = document.querySelectorAll('.row');

if (rowElements.length >= 2) {

  rowElements[1].classList.remove('row');
}

//11

const link = document.querySelectorAll('.link');


if (link.length >= 2) {
 
  const secondLinkStyles = getComputedStyle(link[1]);

  const color = secondLinkStyles.color;

  console.log('Цвет второй ссылки:', color);
}

//12 

const rowElement = document.querySelectorAll('.row');

if (rowElement.length >= 3) {
  rowElement[2].classList.add('third');
}

//13

const rowInnerElement = document.querySelector('.row-inner');

if(rowInnerElement) {
  rowInnerElement.style.color = 'pink';
}

//14 

const inputElement = document.createElement('input');

inputElement.classList.add('input');

const rowInputElement = document.querySelector('.row-input');

if (rowInputElement) {
  rowInputElement.appendChild(inputElement);  
}

//15  

const inputelement = document.createElement('input');

inputelement.classList.add('input');

inputelement.style.backgroundColor = 'yellow';

const rowinputElement = document.querySelector('.row-input');

if (rowinputElement) {
  rowinputElement.appendChild(inputelement);
}

//17 

const row = document.querySelector('.row-outer')

if(row) {
  row.style.fontSize = '20px'
}

//18 

const lastelement = document.querySelector('.last')

if(lastelement) {
  lastelement.textContent = 'Last but not least'
}

//19
const lastElement = document.querySelector('.last');

if (lastElement) {
  lastElement.textContent = 'Last but not least';

  lastElement.style.fontWeight = 'bold';
}