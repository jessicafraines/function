//FUNCTIONS

var prompt = require('sync-prompt').prompt;

function increment(x){
  x++                    //also x+=x would work
  return x;
}

var z;
z = increment (3);
console.log(z);


function square(i){
  i *= i;
  return i;
}

var y = square (2);
console.log(y);


//COMPUTE AREA OF A ROOM

function area (l, w){
  return l * w;
}

z = area(3,4);
  console.log(z);

function volume (l,w,h){
  return area(l,w) * h;  //could be just return l * w * h;
}

z = volume(2,4,6);
console.log(z);


//in this ex calling area (l*w) where l=inc (3) +inc (4) & w=square(2)
z = area(square(increment(3) + increment(4)), square(2));
console.log(z);

/*Call function with no input and no output
function sayHello(){
  console.log('hello');
}

sayHello();*/

//Call function that makes hello uppercase


function sayHello(y){
  var res = y.toUpperCase();
  return res;
}

var y = ('hello');
var x = sayHello(y);
console.log(x);


//old enough to drink?
function canDrink(age){
 if (age >= 21){
  return true;}
 else{
   return false;}
}


z = canDrink (55);
console.log(z);

//change number grade to letter
function letterGrade(grade){
  if(grade >= 90){
    return 'a';
  }else if 
    (grade >= 80){
    return 'b';
  }else if
    (grade >= 70){
    return 'c';
  }else if
    (grade >= 60){
    return 'd';
  }else {
    return 'f';}
}

z = letterGrade (55);
console.log(z);

//add tax to an amount

function addTax(amount, tax){
  return amount + (amount * (tax/100));
}

z = addTax(100, 10)
  console.log(z);

//get the sum of an array
function sum(numbers){
  var sigma = 0;
  for(var i = 0; i < numbers.length; i++){
    sigma += numbers[i];
  }
  return sigma;
}

z = sum([2,3,4]);

console.log(z);
//get the factorial of a number (ex 5!)
function factorial(num){
  if(num === 0){
    return 1}
  else{
    return num * factorial(num-1);}
}

z = factorial(1);
console.log(z);
//return for 10 rolls of a 6 sided die
function rollDie(){
  return Math.floor(Math.random() * 6) + 1;
}

for(var i=0; i<10; i++){  //10 is the number of rolls we are trying
  z = rollDie();
  console.log('roll:', z);
}
//is roll1 = to roll2
function isPair(roll1, roll2){
  return roll1 === roll2
}

z = isPair(3,4);
console.log(z);

//roll pair of dice 10,000 times count number of pairs

function countPairs(x){
  var count = 0;

  for(var i = 0; i < x; i++){
   if(isPair(rollDie(), rollDie())){
     count++;
  }
}

return count;
}

z= countPairs(10000);
console.log(z);











