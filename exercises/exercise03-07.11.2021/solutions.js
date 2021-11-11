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

console.log(lastTwoElems(array));

//2
//2.1 В масив добавете текущата дата

let datesArray = [];
let currData = new Date();
datesArray.push(currData);
console.log(datesArray);


//2.2 След това добавете нова дата 08.12.2018. Променете часа на 21:00:00

let december8 = new Date(2018, 11, 8, 21);
datesArray.push(december8);

console.log(datesArray);

//2.3 След това създайте програмно втори масив, който за датите пресмята броя дни в месеца
// и какъв ден от седмицата(0-неделя, 6-събота) е дадената дата. Ако днес е 11.11.2018 година,
//  крайния резултат би трябвало да изглежда така: Масив 1: [< dateObject>, < dateObject>] 
// където първия обект съдържа датата 11.11.2018, а втория 08.12.2018. Масив 2: [[30,0], [31, 6]

function numberOfDays(date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // The 0 in day field helps getting number of days with `.getDate()`s
}
 
let datesInfo = datesArray.map(date => [numberOfDays(date), date.getDay()]);
 
console.log(datesInfo);

//2.4 Създайте трети масив, който „слива“ информацията от двата, например:
// Масив 3: [ “Дата: 11.11.2018, час: 00:00:00, неделя. 30 дни”, “Дата 08.12.2018, час 21:00:00, събота, 31 дни” ]

function getDayByName(index) {
    let daysName = ["понеделник", "вторник", "сряда", "четвъртък", "петък", "събота", "неделя"];
    return daysName[index];
}

let combined = datesArray.map((date, index) => {
    return `Дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, час: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${getDayByName(datesInfo[index][1])}, ${datesInfo[index][0]} дни`
});
 
console.log(combined);

//3

let task3Array = [2, 45, 50, 1102, 1, 15];
 
//Напишете функция, която при подаден масив проверява:
//3.1.1 дали съдържа числото 50?

function contains50(arr) {
    return arr.includes(50);
}

//3.1.2 дали сбора на елементите е равен на 50?
function sumIs50(array) {
    return array.reduce((a, b) => a + b) === 50;
}

//3.1.3 кое е числото, което трябва да се добави в към сбора, за да се получи сбор от 50?
function findNumberToFifty(array) {
    return 50 - array.reduce((a, b) => a + b);
}

//3.4 Напишете функция, която намира най-често срещаната буква в текст. Ако има няколко с равен брой, върнете масив от тях.
 
function mostCommon(str) {
    let counts = {};
    let mostCommonLetterCount;
 
    str.split("").forEach(letter => {
        if (counts[letter]) {
            counts[letter]++;
        } else {
            counts[letter] = 1;
        }
    })
 
    mostCommonLetterCount = Math.max(...Object.values(counts));
 
    return Object.keys(counts).filter(letter => counts[letter] === mostCommonLetterCount);
}
 
console.log(mostCommon("asdasdasdas"));

//3.5 Да се намери най-дългата площадка в масив от числа

function longestSeq(numbers) {
    let current = numbers[0];
    let currCount = 0;
    let maxNum = numbers[0];
    let maxCount = 0;
 
    numbers.forEach(num => {
        if (num !== current) {
            if (currCount >= maxCount) {
                maxNum = current;
                maxCount = currCount;
            }
 
            current = num;
            currCount = 1;
        } 
        else {
            currCount++;
 
            if (currCount >= maxCount) {
                maxNum = current;
                maxCount = currCount;
            }
        }
    });
 
    return maxNum;
}
 
console.log(longestSeq([1, 1, 2, 2, 2, 2, 3, 3, 3]));

//3.5 В текст променете първата буква на всички думи с префикс "n", ако думата вече започва с "n", не я променяйте. (not case sensitive)
 
function prefixN(str) {
    let words = str.split(" ");
 
    words.forEach((word, index) => {
        if (word[0] !== "n" && word[0] !== "N") {
            let arr = word.split("");
 
            arr.splice(0, 1, "n")
 
            words[index] = arr.join("");
        }
    });
 
    return words.join(" ");
}
 
console.log(prefixN("sdf asdf NJK nnkjn adf"));