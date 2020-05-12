let input = prompt("Enter a word or sentence");
console.log(input);

// Convert input to lower case 
let lowerString = input.toLowerCase();
console.log(lowerString);

// 1. Use split() method to make a new array
let stringArray = lowerString.split("");
console.log(stringArray);

// 2. Use reverse() method to reverse the new array
let reverseArray = stringArray.reverse();
console.log(reverseArray);

// 3. Use join() method to join reverseArray into a string
let reverseString = reverseArray.join("");
console.log(reverseString);