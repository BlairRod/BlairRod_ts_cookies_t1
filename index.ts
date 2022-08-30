// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';

// Create a array/list of cookies named cookies
let cookies: Cookie[] = [];
let cookeNum = 3;
document
  .getElementById('changeColour-btn')
  .addEventListener('click', changeColour);
document
  .getElementById('addChocolateChip-btn')
  .addEventListener('click', addChocolateChip);
document.getElementById('addCookie-btn').addEventListener('click', addCookie);
document.getElementById('eatCookie-btn').addEventListener('click', eatCookie);

init();

// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
function init() {
  //TODO: add code here
  // create the two cookies
  addCookie();
  addCookie();

  //let option1: string = '<option>${c1.name}</option>';
  //let option2: string = '<option>${c2.name}</option>';

  //dropdown.innerHTML += option1;
  //dropdown.innerHTML += option2;

  // initialise the cookieColour-inp to the colour of the first cookie created
  let colourInp: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('cookieColour-inp')
  );
  colourInp.value = cookies[0].colour;

  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  //let newCookie: HTMLDivElement = <HTMLDivElement>document.createElement('div');
  //newCookie.className = "cookie";
  //newCookie.innerHTML = "100";
  //newCookie.style.background = cookies[0].colour;

  let cookiesDiv: HTMLDivElement = <HTMLDivElement>(
    document.getElementById('cookiesDiv')
  );
  cookiesDiv.innerHTML = '';

  for (let index in cookies) {
    let newCookie: HTMLDivElement = <HTMLDivElement>(
      document.createElement('div')
    );
    newCookie.className = 'cookie';
    newCookie.innerHTML = cookies[index].chocolateChipNum.toString();
    newCookie.style.background = cookies[index].colour;

    cookiesDiv.appendChild(newCookie);
  }
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {
  let select: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('cookieSelector')
  );
  let colourInp: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('cookieColour-inp')
  );

  cookies[select.value].colour = colourInp.value;

  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {
  let select: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('cookieSelector')
  );
  cookies[select.value].chocolateChipNum++;

  updateDisplay();
}

function updateDisplay() {
  removeOptions(document.getElementById('cookieSelector'));
  // add them as options in the select/dropdown (cookieSelector) element
  //target dropdown
  let dropdown: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('cookieSelector')
  );
  //create - add option elements to dropdown
  for (let index in cookies) {
    let option: string = `<option value="${index}">${cookies[index].name}</option>`;
    dropdown.innerHTML += option;
  }
  drawCookies();
}

function addCookie() {
  let numC: number = cookies.length + 1;
  let newC: string = 'c' + numC;
  let newCookie: Cookie = new Cookie('Cookie ' + numC);
  cookies.push(newCookie);
  updateDisplay();
}

function eatCookie() {
  let select: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('cookieSelector')
  );
  cookies.splice(cookies.length -1 , 1);
  updateDisplay();
}

function removeOptions(selectElement) {
  var i,
    L = selectElement.options.length - 1;
  for (i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}
