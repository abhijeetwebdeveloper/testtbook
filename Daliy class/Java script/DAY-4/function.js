// example1
// non parameterizrd function

function show() {
    document.getElementById('show').innerHTML='Abhijeet Saxena';
}
show();

// Example 2
// parameterized function

function add(a,b) {
    document.getElementById("add").innerHTML=a+b;
}
add(55,27);

// example3
// ANONYMOUS Function
// arrow function

const display=()=>{
    document.getElementById("display").innerHTML="This movie is very nice";
}
display();

// Example-4

const demo=(Name,age)=>{
    document.getElementById('demo').innerHTML=`Hello My Name is ${Name} and My Age is ${age} Year Old`;
}
demo('Abhieet Saxena',22);

// Example-5

function coffeename(coffee,size){
   return`the ${coffee} coffee of ${size} size is ready`;
}
document.getElementById('coffeename').innerHTML=coffeename('Latte','Medium');


// Example-6
// immediate invoke function


(function invo() {
    console.log('show function');
})();

// Example-7

const data=(Empid,Name)=>{
    console.log(Empid,Name);
}
data(121,'Abhijeet');

// Example-8

const outer=()=>{
      console.log('outer function');

      const inner=()=>{
        console.log('inner function');
      }
      inner();
}
outer();

// Example-9

const futer=()=>{
    console.log('outer function');

    const inner=()=>{
      console.log('inner function');
    }
    return inner;
}
futer();

// Example-10

const globel=()=>{
    console.log('globel function');

    const inner=()=>{
      console.log('local  function');
    }
    return inner;
}
globel()();

// Example-11

function demo2(a) {
    console.log('Abhay Raichand');
    return a;
}
console.log(demo2(9));

// Example-12

function real() {
    console.log('Real function');
}

const notreal=()=>{
    console.log('Not Real Function');
}
console.log(real);
console.log(notreal);

// Example-12

const a=()=>{
    console.log('a');
    return 9;
}
console.log(a());

// Example-13
// function Hosting

host();
function host() {
    console.log('Host Function');
}

const demo3=()=>{
    console.log('demo function');
}
demo3();

// Example-13
// Function clouser

let b = 5;
function outer1() {
    let a = 9;
    function inner1() {
        console.log(a,b);
    }
    inner1();
}
outer1();