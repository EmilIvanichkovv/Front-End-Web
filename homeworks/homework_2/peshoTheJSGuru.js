function isNested(arr) {
    let isNested = false
    for(let i = 0; i < arr.length; i++){
        if(arr[i].constructor === Array){
            isNested = true
        }
    }
    return isNested
}

function processData(input) {
    let numbers = 0
    let objectRepresentation = "hi"
    var result = []
    input = eval(input);
    for(let i = 0; i < input.length; i++){
        if(typeof input[i] === "number"){
            numbers ++
        }
    }
    if(numbers > 0){
        result.push(numbers)
    }
    for(let i = 0; i < input.length; i++){
        if(typeof input[i] === "string"){
            result.push(input[i].split("").reverse().join(""))
        }
        else if(typeof input[i] === "object"){
            if(Array.isArray(input[i])){
                if(isNested(input[i])){
                    result.push(input[i].flat())
                }
                else {
                    result.push(input[i].sort())
                }
            }
            else {
                objectRepresentation = "" + Object.keys(input[i]) + ": " + Object.values(input[i])
                result.push(objectRepresentation)
            }
        }
        else if(typeof input[i] === "function"){
            result.push(input[i](42))
        }
    }
    console.log(JSON.stringify(result))
} 

processData(`[1, "123456789", [1, 2, [4, 3]], ["c", "b", "a"], function(a) { return a; }, { "name": "Martin" }, 3, 4, 5, function(a) { return (a + 1)}]`)
