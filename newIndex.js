// row and col arrays used to positioning the tile game board on the page
row = [
  1,1,1,1,
  2,2,2,2,
  3,3,3,3,
  4,4,4,4];
col = [
  1,2,3,4,
  1,2,3,4,
  1,2,3,4,
  1,2,3,4];


// determines width of each tile and controls board movement distances
let width = 100;

// create array for tile game. Set at 1-16, but capable of scaling.
var start = 1;
var end = 16;
var a = [];

while(start <= end){
  a.push(start++);
}

// image tile positioning chart
let x = [0,0,3,2,1,0,3,2,1,0,3,2,1,0,3,2,1];
let y = [0,0,0,0,0,3,3,3,3,2,2,2,2,1,1,1,1];
// copy of image tile positioning chart - used to manipulate shuffled position
let copyX = [...x];
let copyY = [...y];

// function creates the solved puzzle
function handleSolve() {
  let area = document.getElementById('area');
  area.innerHTML='';
  for (let i = 0; i < a.length; i++) {
    let div = document.createElement('div');
    div.id = a[i];
    div.className = 'tile';
    div.style.left = col[i]*width + 'px';
    div.style.top = row[i]*width + 'px';
    div.addEventListener("click", handleTile);
    area.appendChild(div);
    div.innerHTML = a[i];
    div.style.transition = "left 0.25s, top 0.25s";
    div.style.backgroundImage = 'url(./images/Arlo.jpg)';
    if (a[i] == 16) {
      div.innerHTML = '';
      div.style.background = 'white';
    }
    div.style.backgroundPosition = copyX[a[i]]*width+'px'+" "+ copyY[a[i]]*width+'px';
  }
  let easyButton = document.createElement('button');
  easyButton.innerHTML = 'Easy Mode';
  easyButton.addEventListener('click', handleEasy);
  area.appendChild(easyButton);
  let advancedButton = document.createElement('button');
  advancedButton.innerHTML = 'Advanced Mode';
  advancedButton.addEventListener('click', handleAdvanced);
  area.appendChild(advancedButton);
  let expertButton = document.createElement('button');
  expertButton.innerHTML = 'Expert Mode';
  expertButton.addEventListener('click', handleExpert);
  area.appendChild(expertButton);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// function shuffles board to start the game
function handleEasy() {
  var start = 1;
  var end = 15;
  var options = [];
  while(start <= end){
    options.push(start++);
  }
  let b = [...options];
  let counter = 0;
  while(counter < 20){
    let c = shuffle(b);
    for (var i = 0; i < c.length; i++) {
      simulateMove(c[i]);
    }
    counter++;
    console.log(c);
  }
}

function handleAdvanced(){
  var start = 1;
  var end = 15;
  var options = [];
  while(start <= end){
    options.push(start++);
  }
  let b = [...options];
  let counter = 0;
  while(counter < 50){
    let c = shuffle(b);
    for (var i = 0; i < c.length; i++) {
      simulateMove(c[i]);
    }
    counter++;
    console.log(c);
  }
}

function handleExpert(){
  var start = 1;
  var end = 15;
  var options = [];
  while(start <= end){
    options.push(start++);
  }
  let b = [...options];
  let counter = 0;
  while(counter < 100){
    let c = shuffle(b);
    for (var i = 0; i < c.length; i++) {
      simulateMove(c[i]);
    }
    counter++;
    console.log(c);
  }
}


// function evaluates and enables tiles. Logic based on tiles directly next to "blank" tile
function handleTile(e) {
  let blank = document.getElementById(16);
  let blankX = (blank.style.left);
  let blankY = (blank.style.top);
  console.log('Clicked Tile!', e.target.id);
  console.log('right: ', e.target.style.left);
  console.log('down: ', e.target.style.top);
  console.log(e.target.style.left,e.target.style.top);
  if (parseInt(e.target.style.left) == (parseInt(blankX) - width) && parseInt(e.target.style.top) == (parseInt(blankY))) {
    let x = e.target.style.left;
    e.target.style.left = blank.style.left;
    blank.style.left = x;
  }
  else if (parseInt(e.target.style.left) == (parseInt(blankX) + width) && parseInt(e.target.style.top) == (parseInt(blankY))) {
    let x = e.target.style.left;
    e.target.style.left = blank.style.left;
    blank.style.left = x;
  }
  else if (parseInt(e.target.style.top) == (parseInt(blankY) - width) && parseInt(e.target.style.left) == (parseInt(blankX))) {
    let y = e.target.style.top;
    e.target.style.top = blank.style.top;
    blank.style.top = y;
  }
  else if (parseInt(e.target.style.top) == (parseInt(blankY) + width) && parseInt(e.target.style.left) == (parseInt(blankX))) {
    let y = e.target.style.top;
    e.target.style.top = blank.style.top;
    blank.style.top = y;
  }
}

function simulateMove(id){
  let blank = document.getElementById(16);
  let blankX = (blank.style.left);
  let blankY = (blank.style.top);
  let tile = document.getElementById(id);
  if (parseInt(tile.style.left) == (parseInt(blankX) - width) && parseInt(tile.style.top) == (parseInt(blankY))) {
    let x = tile.style.left;
    tile.style.left = blank.style.left;
    blank.style.left = x;
  }
  else if (parseInt(tile.style.left) == (parseInt(blankX) + width) && parseInt(tile.style.top) == (parseInt(blankY))) {
    let x = tile.style.left;
    tile.style.left = blank.style.left;
    blank.style.left = x;
  }
  else if (parseInt(tile.style.top) == (parseInt(blankY) - width) && parseInt(tile.style.left) == (parseInt(blankX))) {
    let y = tile.style.top;
    tile.style.top = blank.style.top;
    blank.style.top = y;
  }
  else if (parseInt(tile.style.top) == (parseInt(blankY) + width) && parseInt(tile.style.left) == (parseInt(blankX))) {
    let y = tile.style.top;
    tile.style.top = blank.style.top;
    blank.style.top = y;
  }
}
