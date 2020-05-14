
document.getElementById("demo").addEventListener("change", reverseString);

function reverseString() {
    let input = document.getElementById("demo");
    input.value = input.value.split("").reverse().join("");
}

// function reverseString() {
//     let input = document.querySelector("h1").innerHTML;

//     let stringArray = input.split("");
//     let reverseArray = stringArray.reverse();
//     let joinString = reverseArray.join("");

//     return input = joinString;       
// }