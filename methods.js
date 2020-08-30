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


    //------------------Arrow.prototype.filter()---1----------------------
    let students=[
        {
            name:"kritika",
            age: 23,
            subject:"maths"

        },
        {
            name:"Raghav",
            age: 20,
            subject:"bio"

        },
        {
            name:"Shivali",
            age: 21,
            subject:"commerse"

        },
        {
            name:"Neelu",
            age: 24,
            subject:"maths"

        },
        {
            name:"Raju",
            age: 23,
            subject:"maths"

        }
        
    ]

    const optdMaths= students.filter((students)=> students.subject==="maths");
   function myFunction7(){
       console.log(optdMaths);
   }

   //------------------Arrow.prototype.filter()---2----------------------
   // we can use the filter mathod to remove the duplicate values
   let numbers=["a","b","c",4,1,2,3,4,6,2];

   let filternum= numbers.filter((value, index, arr)=> {
       return arr.indexOf(value)===index;
   });

   function myFunction8(){
    console.log(filternum);
}

//------------------Arrow.prototype.forEach(value, index, arr)---1----------------------
//chang the array which is called upon  this method executes a provides function once for each array element

const numb=[1,2,3,4,5,6];
function myFunction9(){
    let sum=0;
    numb.forEach(item =>{
        sum +=item;
    })
    console.log(sum);
}


//------------------Arrow.prototype.forEach(value, index, arr)---2----------------------
const letters=["a", "b", "c", "a", "d", "b", "a"];
//create an object to count 
function myFunction10(){
let count={}; 

letters.forEach(lett => {
   if(count[lett]) {
       count[lett]++;
   }else{
       count[lett]=1;
   }
});

console.log(count);}


//------------------Arrow.prototype.map(value, index, arr)---1----------------------
//map function oes not change the array which is called upon it creates a new ayyay and it will return
const numbe=[1,2,3,4,5,6];
const doublenumber=numbe.map(double);

function double(value){
    return value*2;
}
function myFunction11(){
console.log(doublenumber);
}


//------------------Arrow.prototype.map(value, index, arr)---2----------------------
const products=[
    {
        name:"laptop",
        price:2000,
        count:3,
    },
    {
        name:"mobile",
        price:500,
        count:2,
    },
    {
        name:"phone",
        price:1500,
        count:5,
    },
];
function myFunction12(){
const productValue= products.map(item=>item.price*item.count);
 console.log(productValue);
}



//------------------Arrow.prototype.reduce(previous, current, index, arr)---1----------------------
//it executes the callback function in every element of an array and it return one single output value

const store=[
    {
        name:"laptop",
        price:2000,
        count:3,
    },
    {
        name:"mobile",
        price:500,
        count:2,
    },
    {
        name:"phone",
        price:1500,
        count:5,
    },
];
function myFunction13(){
const storeValue= store.reduce((previous, current) => previous+current.price*current.count,0);
 console.log(storeValue); 
}


 //------------------Arrow.prototype.reduce(previous, current, index, arr)---2----------------------
const num4= [1, 2, 3, 4, 5, 6];
const total =num4.reduce(sum, 0);

function sum(previous, current){
    return previous+current;
}


let text=["j", "a", "v", "a"];
let result= text.reduce(function(a,b){
    return a+b;
});
function myFunction14(){
console.log(total);
console.log(result);
}


//------------------Arrow.prototype.slice(firstIndex, lastIndex)---1----------------------
// it returns a shallow copy of a portion of an array- it does not modify the original array on which it is called upon
//index provided in the last index is not included

const num5= [1,2,3,4,5,6,7];
const sliceNmb=num5.slice(1,5);

function myFunction15(){
console.log(num5);
console.log(sliceNmb);
}

//------------------Arrow.prototype.slice(firstIndex, lastIndex)---2----------------------
const sub= ["maths", "hindi", "bio", "physics", "chemestry"];
 const subComplete= sub.slice(0,3);

 function myFunction16(){
 console.log(subComplete);
 }


//------------------Arrow.prototype.splice(startIndx, deleteCount, newItem)---1----------------------
//this method changes an array by removing or replacing exesisting element from it it will change the array which it is called upon
const num6=[1,2,3,4,5,6];
const deleted =num6.splice(2,3,7,8);

function myFunction17(){
console.log(num6);
console.log(deleted);
}

const add =num6.splice(2,0,9,8);
console.log(num6);
console.log(add);

//------------------Arrow.prototype.splice(startIndx, deleteCount, newItem)---2----------------------
let participant=["Ram", "Shyam", "Raju", "Rohan", "Rani"];

let notAttending= participant.splice(1,2,"kritika", "Raghav");

function myFunction18(){
console.log(notAttending);
console.log(participant);
}

//------------------Arrow.prototype.sort()---1----------------------
//this method sort the element of an array in place 
//and return the shorted array the default sort order is ascending it built upon converting the element into string and sort them
//utf-16 code unit value
let languages=["java", "nodeJs", "python", "angular"];
languages.sort();

function myFunction19(){
console.log(languages);
}


//------------------Arrow.prototype.sort()---2----------------------
const num7=[1,45, 10, 34, 78, 91];
num7.sort(compareFunction);

function myFunction20(){
console.log(num7);
}
//what happens with numbers
//as it will also convert the numbers to string it will become '1', '45',... and it will check the utf code
//so in this case we can create a compare function and let us decide in which mannere we want to sort the element
function compareFunction(a,b){
       //1. return of the function is <0 then a will come first
       //2. 0 nothing will happen
       //3. return of function is >0 then b will come first
       return a-b;
}



//------------------Arrow.prototype.fill(number, startIndex, endIndex)---1----------------------
//it change all the element inside an array with a provided value 
//it will change the array on which it is called upon
//also it will return the array modified
//it does not includes the end index
const num8=[1,2,3,4,5];
num8.fill(0,1,4);

function myFunction21(){
console.log(num8);
}



//------------------Arrow.prototype.includes()---1----------------------
//using this method we can find if an element is present in an array
let juice= ["apple", "orange", "pineapple","strawberry"];
 let res5= juice.includes("orange");

 function myFunction22(){
 if(res5){
     console.log("bring it on")
 }else{
     console.log("bring me apple juice then")
 }
 }
 //------------------Arrow.prototype.join()---1----------------------
//it creates a new string from an array by concatinating all the element from that array
const countries=["Russia", "India", "UK", "USA"];
let res6= countries.join(" ");

function myFunction23(){
console.log(res6);
}

//------------------Arrow.prototype.reverse()---1----------------------
const num9=[1,2,3,4,5,6];
num9.reverse();

function myFunction24(){
console.log(num9); 
}


//if we dontwant to hampre the original array then we can create a shallow 
//copy of original array using  a concat method
//let newReverse =num9.concat().reverse();
//console.log(newReverse);



//------------------Arrow.prototype.reverse()---1----------------------
const string="I love coading";
const res7= string.split().reverse().join();

function myFunction25(){
console.log(res7);
}



//------------------Arrow.prototype.every()---1----------------------
//executes the given function on the elements of the array and returns true if callback function returns truthy value
//if every element satisfies the condition 
var z=[20,20,18,27,30,50];
var x=z.every(checkAges0);
function checkAges0(z){
    return z>=18;
}
function myFunction26(){
console.log(x);
}

//------------------Arrow.prototype.every()---2----------------------
const array=[[1,2,3], [4,5,6], [7,8,9]];
const res12= array.every(arr => Array.isArray(arr));

function myFunction27(){
console.log(res12);
}


//------------------Arrow.prototype.some()---1----------------------
//executes the given function on the elements of the array and returns true if callback function returns truthy value
//for atleast one element is true
const num10=[1,2,3,4,5];
const res8=num10.some(callback);
 function callback(item){
     return item>1;
 }

 function myFunction28(){
console.log(res8);
 }

//------------------Arrow.prototype.some()---2----------------------

const person=[{
    name:"Aryan",
    age:40,
},
{
    name:"Rehan",
    age:20,
},
{
    name:"Rupa",
    age:18,
},
{
    name:"Raina",
    age:21,
},
{
    name:"Ramya",
    age:30,
},

];

const res9= person.some(callback1);

function callback1(person){
    return person.age>=18;
} ;

function myFunction29(){
console.log(res9);
}



//------------------Arrow.prototype.find(item, index, array)---1----------------------
//it will seacrch inside an array and it will return the first element forwhich the call back function returns the truthy value

//same data as above

const res10= person.find(callback1).age;

function callback1(person){
    return person.name==="Raina";
} ;

function myFunction30(){
console.log(res10);
}


//------------------Arrow.prototype.findIndex()---1----------------------

const res11= person.findIndex(callback2)
function callback2(person){
    return person.name==="Raina";
} ;

function myFunction31(){
console.log(res11);
}


//------------------Arrow.prototype.indexOf() and lastIndexOf()---1----------------------
//it returnsthe first index of which the given element can be found inside an array
const names2=["Farah", "Irfan", "Shahid", "Salman"];

function myFunction32(){
console.log(names2.indexOf("Irfan"));
}


//------------------Arrow.prototype.indexOf() and lastIndexOf()---2----------------------
const names3=["Farah", "Irfan", "Shahid", "Irfan", "Salman"];

function myFunction33(){
const idx=names3.indexOf("Shahid");
names3[idx]="Razi";
console.log(names3);
}

//if we have multiple same names like irfan  then it will return the first index 
//we can get the last index of any repeated element
function myFunction34(){
console.log(names3.lastIndexOf("Irfan"));
}





//------------------Arrow.prototype.push()---1----------------------
//allowes us to add one or more element at the end of the array and it also returns the new length of the array
const array1=["a", "b", "c"];
let res13=array1.push("d", "e");

function myFunction35(){
console.log(array1);
//we can also call this method multiple time or can pass multiple arguments
//it will return the total length of the array
console.log(res13);
}


//------------------Arrow.prototype.unshift()---1----------------------
//it adds one or more elements at the begining of the array then returns the new lenght of the array
let array2=["c","f","g"]
let res14=array2.unshift("d", "e");

function myFunction36(){
console.log(array2);
//we can also call this method multiple time or can pass multiple arguments
//it will return the total length of the array
console.log(res14);
}


//------------------Arrow.prototype.pop()---1----------------------
//remove the last item from an array and it will return it
let array3=["java", "nodejs", "react", "angulatr"];
let lastItem=array3.pop();
//we can call it multiple times and it will always remove the last item

function myFunction37(){
console.log(array3);
//it can also return the last item
console.log(lastItem);
}



//------------------Arrow.prototype.shift()---1----------------------
//removes the first element fomth earray and returns it
let array4=["java", "nodejs", "react", "angulatr"]
let lastItem1=array4.shift();
//we can call it multiple times and it will always remove the last item

function myFunction38(){
console.log(array4);
//it can also return the fist element
console.log(lastItem1);
}























































