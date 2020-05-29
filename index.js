document.getElementById("demo").addEventListener("change", reverseString);

function reverseString() {
    let input = document.getElementById("demo");
    
    // 1. Shorten the user input to 12 characters ... 
    // Get the value of the input i.e. a string -> substring() method only works on a string:
    let inputString = input.value;
    let shortString = inputString.substring(0, 11) + " ...";

    // 2. Reverse the letters in place:
    input.value = shortString.split("").reverse().join("");
}

// To reverse the words:

// function reverseString() {
//     let input = document.getElementById("demo");
    // Splits at the spaces " ", joins with spaces " "
//     input.value = input.value.split(" ").reverse().join(" ");
// }
   
//     let stringArray = input.split("");
//     let reverseArray = stringArray.reverse();
//     let joinString = reverseArray.join("");

//     return input = joinString;       
// }