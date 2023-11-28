
// square number calculator

const square = (number) => {
  return number * number

};

let result = square (10);
console.log(result);



// fahrenheit calculator

const temperature = (C) => {
  return C * (9/5) + 32;

};

let F = temperature (5);
console.log(F);



// range checker

const range = (number, startNumber, endNumber) => {
  return number >= startNumber && number <= endNumber;

};

let num = 15;
let start = 5;
let end = 20; 

let rangeNumber = range(num,start,end);
console.log(rangeNumber);


// odd years 

const odd = (year) => {
  if(year % 2 !==0) {
    console.log( year + " is an odd year.");
  } else{
     console.log(year + " is not an odd year.");
  }
}

const selectYear = 2025;
odd(selectYear);


// Let's use switch

const vegetables = (vegetable) => {
  switch (vegetable) {
    case "Carrot":
      console.log("Hello");
      break;
    case "Broccoli":
      console.log("Wellcome");
      break;
    default:
      console.log("Neither");   

  }
}
vegetables("Carrot");


// logical Error !!!

let action = "move";

switch (action) {
  case "move":
    console.log("You're moving!");
    break;
  case "jump":
    console.log("You're jumping!");
    break;
  case "run":
    console.log("You're running?");
    default:
      console.log("Invalid actions.");    
}






