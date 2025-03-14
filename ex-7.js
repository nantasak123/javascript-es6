const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = getMumber(employee2)

function getMumber(x){
  if(x.scores.mid == undefined){
    return "English score is not defined"
  }
} 

console.log(result1)
console.log(result2)