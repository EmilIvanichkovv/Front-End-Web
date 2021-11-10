var array = [10, 5, 13, 18, 51];

//1. Нека имаме следния масив А от числа: 10, 5, 13, 18, 51 Напишете програма, която обхожда масива и принтира всички числа в конзолата на браузера.

function printArray(arr) {
    arr.forEach((el, index) => console.log(`Element with index ${index} is ${el}`));
}

printArray(array);

//1.2 Създайте програма, която за дадения масив А връща друг такъв (Б) със същия брой елементи, но 
//със стойност равна на съответната стойност от А, умножена по две. Крайният резултат трябва да е следния:      //20, 10, 26, 36, 102

function doubleArray(arr) {
    return arr.map(x => x * 2);
}

console.log(doubleArray(array));
 
//1.3 Създайте програма, която връща филтриран масив А, включващ само четните числа.

function returnEvens(arr) {
    return arr.filter(x => (x % 2) == 0);
}

console.log(returnEvens(array));

 
//1.4 Създайте програма, която връща boolean резултат със стойност, указваща дали поне един елемент от  масив А е по-малък от 10. 
//Експериментирайте и с масив Б (резултата от задача 2).

function hasElementSmallerThan10(arr) {
    return arr.some(x => x < 10);
}

console.log(hasElementSmallerThan10(array));
console.log(hasElementSmallerThan10(doubleArray(array)));
 
//1.5 Напишете програма, която търси и връща масив със всички елементи на А, които са кратни на 3.

function divisibleByThree(arr) {
    return arr.filter(x => (x % 3) == 0);
}

console.log(divisibleByThree(array));

// 1.6 Напишете програма, която събира всички стойности на масива А чрез използване на Array.prototype.reduce метода.

function reduceMethod(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
 
console.log(reduceMethod(array));

 
// 1.7 Създайте програмно нов масив Б, който съдържа последните два елемента на А (Array.prototype.slice)
function lastTwoElems(arr) {
    return arr.slice(-2);
}
