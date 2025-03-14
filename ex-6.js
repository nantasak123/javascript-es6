let height = undefined 
let result 

function getHeight(x){
    result = x ?? "Height is not defined"
}

getHeight(height)

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
