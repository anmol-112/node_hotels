console.log("hello");

a=5
console.log(a);

function add(b,c){
    return b+c;
}

d=add(5,7);
console.log(d);

var add1=function(e,f){
return e+f;
}

g=add1(3,5);
console.log(g);

var add2=(h,i)=>{return h+i};
j=add2(10,5);
console.log(j);


// var add2=(h,i)=> h+i;
// j=add2(10,5);
// console.log(j);

// function callback(){
//     console.log('now adding is successful complete');
// }

// const add4 = function(a, b, callback){
//     var result = a + b;
//     console.log('result: ' + result);
//     callback();
// }

// add4(3, 100989893, callback);
//add4 is main fnc 


const add4 = function(a, b,anmol){
    var result = a + b;
    console.log('result: ' + result);
    anmol();
}

add4(3, 100,()=>{
    console.log('now adding is successful complete');
}
);

var fs=require('fs');
var os=require('os');

var user = os.userInfo();
console. log (user) ;
console. log (user. username) ;

fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', ()=>{
console. log ('file is created' )} );


//exporting file

const notes = require('./notes.js');

console. log ('server file is available');
var age = notes. age;
var result = notes.addNumber(age+18, 10);
console. log(age) ;
console. log('result is now '+result) ;

// lodash library

var _ = require('lodash');

var data = ["person", "person", 1, 2 , 1, 2, 'name', 'age', '2'];
var filter = _. uniq(data);
console. log(filter) ;
console.log(_.isString("hello"));
console.log(_.isString(2));


// some portion of next video from here

console.log("hi");

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console. log(jsonObject.name) ;


const objectToConvert = {
name: "Alice",
age: 25};
const json = JSON. stringify(objectToConvert); // Convert object to JSON string
console. log(json) ;