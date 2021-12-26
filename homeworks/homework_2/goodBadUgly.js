function findUnique(input){
    let uniques = "";
     
    for(let i = 0; i < input.length; i++){
        if(uniques.includes(input[i]) === false){
            uniques += input[i]
      }
    }
    return uniques;
}

function findElementOccurCount(element, input){
    let count = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] === element){
            count ++
        }
    }
    return count;
}

function checkGoodBadOrUgly(occurs){
    let good = true;
    let bad  = false;
    let ugly = false;
    let differenceCount = 0;
    for(let i = 0; i < occurs.length-1; i++){
        if(occurs[i] !== occurs[i+1]){
            differenceCount ++;
            good = false;
            bad = true;
            if((Math.abs(occurs[i+1] - occurs[i]) > 1)){
                ugly = true;
            }
        }
    }
    if(differenceCount){
        ugly = true;
    }

    if(good == true) {
        return "GOOD"
    }
    else if (ugly == true) {
        return "UGLY"
    }
    else if (bad == true) {
        return "BAD"
    }

}
function checkGoodBadOrUgly2(occurs){
    let minEl = Math.min(...occurs);
    let good = true;
    let bad  = false;
    let ugly = false;
    let differenceCount = 0;
    for(let i = 0; i < occurs.length; i++){
        if(occurs[i] !== minEl){
            differenceCount ++;
            good = false;
            bad = true;
            if((Math.abs(occurs[i]-minEl) > 1)){
                ugly = true;
            }
        }
    }
    if(differenceCount > 1){
        ugly = true;
    }

    if(good == true) {
        return "GOOD"
    }
    else if (ugly == true) {
        return "UGLY"
    }
    else if (bad == true) {
        return "BAD"
    }


}
function processData(input) {
    if(typeof input !== "string"){
        return
    }
    input = input.toLowerCase();

    if(input === ""){
        console.log("UGLY");
        return;
    }
    let countOfOccurs = [];
    uniqueElements = findUnique(input)
    for(let i = 0; i < uniqueElements.length; i++){
        countOfOccurs.push(findElementOccurCount(uniqueElements[i], input));
    }
    console.log(checkGoodBadOrUgly2(countOfOccurs))
} 

processData("gghhhccc");