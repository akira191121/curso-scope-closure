function greeting(){
let userName = 'Oscar';

function displayUserName(){

    return `Hello ${userName}`
}
return displayUserName;
}

let g = greeting();
console.log(g);
console.log(g());