//variables
var a; // declarando
var b = 'b'; //declaramos / asignamos
b = 'bb; //reasignacion
var a = 'aa'; //redeclaracion

//global scope

var fruit = 'apple';

function bestFruit (){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'colombia'; //global
    console.log(country);
}

countries()
console.log(country)