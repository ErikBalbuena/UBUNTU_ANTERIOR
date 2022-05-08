const numbers = [1,3,5];

let answer = false;

for(let i = 0; i < numbers.length; i++){
if(numbers[i] % 2 === 0){
answer = true;
break;
}
}

const answer02 =  numbers.some(item => item % 2 === 0);

console.log(answer);
console.log("CON SOME: ", answer02);