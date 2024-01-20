    // Event in javascript
    // Example-1



const demo1 = document.getElementById('demo1');
function show() {
    demo1.innerHTML='paragraph content';
}

// Example-2

const demo2=document.getElementById('demo2');
const btn=document.getElementById('btn2');
function content() {
    demo2.innerHTML='I am Abhijeet Saxena';
}
btn.addEventListener('click',content);

// Example-3

const demo3 = document.getElementById('demo3');
const btnn = document.getElementById('btn3');

btnn.addEventListener('click', function display() {
      demo3.innerHTML = 'I AM FULL STACK DEVELOPER';  
})

//  Example-4

const demo4 = document.getElementById('demo4');
const bttn = document.getElementById('btn4');

bttn.addEventListener('click',()=> {
    demo4.innerHTML = 'paragraph content usinf arrow function';
})


// Example-5

const demo5 = document.getElementById("demo5");
const clickdemo = document.getElementById('clickdemo');

clickdemo.addEventListener('click',()=>{
    demo5.innerHTML= 'paragraph content after clicking on div';
})

//  Toggle button example-6

const para2  = document.getElementById('para2');
const readmore = document.getElementById('readmore');
readmore.addEventListener('click',()=>{
if(para2.style.display=='block'){
    para2.style.display='none';
}
else{
    para2.style.display='block';
}
})

// Mouse Over example-7 

const para3 = document.getElementById('para3');
para3.addEventListener('mouseover',()=>{
    para3.style.backgroundColor = 'red';
})
para3.addEventListener('mouseout',()=>{
    para3.style.backgroundColor = 'white';
})

// dblclick example-8

const para4 = document.getElementById('para4');
para4.addEventListener('dblclick',()=>{
    para4.style.backgroundColor = 'red';
})

// Touch event example-9

const Touchdiv = document.getElementById('Touchdiv');
Touchdiv.addEventListener('touchstart',()=>{
    Touchdiv.style.backgroundColor = 'red';
})

// Submit event example-10
 document.getElementById('myform').addEventListener('submit',()=>{
    alert('Thank you for submission');
 })

//  Drag event example-11

// Drag start

document.getElementById('dragelement').addEventListener('dragstart',function (event) {
    event.dataTransfer.setData("text",event.target.id);
})

// Drag event

document.getElementById('dragzone').addEventListener('dragover',function (event) {
    event.preventDefault();
})

// Drag event

document.getElementById('dragzone').addEventListener('drop',function (event) {
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    var draggedElement=document.getElementById(data);
    event.target.appendchild(draggedElement);
})

//  Add Number example-12

function addnumber() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    console.log('num1');
    console.log('num2');
    var result = (num1)+(num2);
    document.getElementById('result').innerHTML=result;
}
