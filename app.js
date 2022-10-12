const hslP = document.querySelector('.hsl-px');
const hslRange = document.querySelector('.hsl-range');

const vslP = document.querySelector('.vsl-px');
const vslRange = document.querySelector('.vsl-range');

const blurP = document.querySelector('.blur-px');
const blurRange = document.querySelector('.blur-range');

const spreadP = document.querySelector('.spread-px');
const spreadRange = document.querySelector('.spread-range');

const scoP = document.querySelector('.sco-px');
const scoRange = document.querySelector('.sco-range');

const shadowColor = document.querySelector('[type="color"]')

const widthP = document.querySelector('.width-px');
const widthRange = document.querySelector('.width-range');

const heightP = document.querySelector('.height-px');
const heightRange = document.querySelector('.height-range');

const radiusP = document.querySelector('.border-radius-px');
const radiusRange = document.querySelector('.border-radius-range')

const square = document.querySelector('.square')

const getResult = document.querySelector('[type="button"]')
const shadowResult = document.querySelector('.shadow-result')
const widthResult = document.querySelector('.width-result')
const heigthResult = document.querySelector('.heigth-result')
const radiusResult = document.querySelector('.radius-result')


let hslValue = 0;
let vslValue = 0;
let blurValue = 0;
let spreadValue = 0;
let shadowColorValue = 'black';
let widthValue = 0;
let heightValue = 0;
let radiusValue = 0;


hslRange.addEventListener('input', (e) => {
  hslP.innerHTML = `${e.target.value}px`;
  hslValue = e.target.value;
  square.style.boxShadow =
    `${e.target.value}px ${vslValue}px ${blurValue}px ${spreadValue}px ${shadowColorValue}`;
});

vslRange.addEventListener('input', (e) => {
  vslP.innerHTML = `${e.target.value}px`;
  vslValue = e.target.value;
  square.style.boxShadow =
    `${hslValue}px ${e.target.value}px ${blurValue}px ${spreadValue}px ${shadowColorValue}`;
});

blurRange.addEventListener('input', (e) => {
  blurP.innerHTML = `${e.target.value}px`;
  blurValue = e.target.value;
  square.style.boxShadow =
    `${hslValue}px ${vslValue}px ${e.target.value}px ${spreadValue}px ${shadowColorValue}`;
});

spreadRange.addEventListener('input', (e) => {
  spreadP.innerHTML = `${e.target.value}px`;
  spreadValue = e.target.value;
  square.style.boxShadow =
    `${hslValue}px ${vslValue}px ${blurValue}px ${e.target.value}px ${shadowColorValue}`;
});

shadowColor.addEventListener('input', (e) => {
  shadowColorValue = e.target.value;
  square.style.boxShadow =
    `${hslValue}px ${vslValue}px ${blurValue}px ${spreadValue}px ${e.target.value}`;
});

widthRange.addEventListener('input', (e) => {
  widthP.innerHTML = `${e.target.value}px`;
  widthValue = e.target.value;
  square.style.width = `${e.target.value}px`;
});

heightRange.addEventListener('input', (e) => {
  heightP.innerHTML = `${e.target.value}px`;
  heightValue = e.target.value;
  square.style.height = `${e.target.value}px`;
});

radiusRange.addEventListener('input', (e) => {
  radiusP.innerHTML = `${e.target.value}px`;
  radiusValue = e.target.value;
  square.style.borderRadius = `${e.target.value}px`;
});


getResult.addEventListener('click', () => {
  shadowResult.innerHTML = `box-shadow: ${hslValue}px ${vslValue}px ${blurValue}px ${spreadValue}px ${shadowColorValue};`;
  widthResult.innerHTML = `width: ${widthValue}px;`;
  heigthResult.innerHTML = `heigth: ${heightValue}px;`;
  radiusResult.innerHTML = `border-radius: ${radiusValue}px;`;
})