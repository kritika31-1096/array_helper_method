//------------------Arrow.from()---1----------------------
var str= "abcdefg";
//if we want to conver the above string in array 
var res= Array.from(str); 

var res1= Array.from(str, mapFn);
function mapFn(x){
    return Number(x);
}

var res2= Array.from(str, Number);

var res3= Array.from(str, x=> Number(x));

function myFunction(){
console.log(res);
console.log("by map function");
console.log(res1);
console.log("constructor way");
console.log(res2);
console.log("fat arrow way");
console.log(res3);
}

//------------------Arrow.from()---2----------------------
var num=[1,2,3,4,5,1,2,3,4,6,7];
//if we want to remove duplicte values
let newSet= new Set(num);
let res4= Array.from(newSet)

function myFunction1(){
    console.log(newSet);
    console.log(res4);
}


//------------------Arrow.of()---1----------------------
var num1= Array.of(10);
//it creates a new array instance from how many variable are passed

function myFunction2(){
console.log(num1);
}

//------------------Arrow.of()---2----------------------
var num2= Array.of(1,2,3,4,5,6,4);
//it creates a new array instance from how many variable are passed

function myFunction3(){
console.log(num2);
}


//------------------Arrow.isArray()---1----------------------
let name= ["Ram","Kritika","Ramu","Shyam"];
var num3= {na:1, ma:2, sa:3};


function myFunction4(){
    console.log(Array.isArray(name));
    console.log(Array.isArray(str));
    console.log(Array.isArray(num3));
    }

//------------------Arrow.prototype.concat()---1----------------------
let a=[1,2,3,4];
let b=[5,6,7,8];
let c=[9,10];

const d=a.concat(b,c,1,[2,4]);
function myFunction5(){
console.log(d);
}

//------------------Arrow.prototype.concat()---2----------------------
/*we can also use concate method to create 
a shallow copy and can reuse the created copy 
without manupulating the original array*/

let name1=["John","Shon","Don","Ron"]

const e= name.concat(name1);
const f= name.concat();
f.push("kritika");

function myFunction6(){
    console.log(e);
    console.log(f)
    }
