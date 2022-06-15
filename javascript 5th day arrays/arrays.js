//level 1 exercises


let a = [];

let b = ['1','2','3','4','5'];

console.log(b.length);
console.log(b[0],b[2],b[4]);

let mixedDataType = [13,'Samay',true,1.5,'Singh',false,7017163301];

console.log(mixedDataType.length);

let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0],itCompanies[3],itCompanies[6]);
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])
console.log(itCompanies[0].toUpperCase(),itCompanies[1].toUpperCase(),itCompanies[2].toUpperCase(),itCompanies[3].toUpperCase(),itCompanies[4].toUpperCase(),itCompanies[5].toUpperCase(),itCompanies[6].toUpperCase())
console.log(itCompanies.join(", ") + " are big IT companies.");

 let c = prompt("Enter a company name: ");

 if( itCompanies.includes(c) ){
     console.log(c);
 }else{
     console.log("Company is not found.");
 }

console.log(itCompanies[0].includes('o'));

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(4,10));
console.log(itCompanies.slice(3,4));

console.log(itCompanies.shift());
console.log(itCompanies.splice(2,2));
console.log(itCompanies.pop());
console.log(itCompanies.splice(0,10));

// level 2 exercises

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let textReplace = text.replaceAll(',','').replaceAll('.','');
let word = textReplace.split(' ');

console.log(word);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let d = shoppingCart.unshift('Meat');
let e = shoppingCart.push('Sugar');
let f = shoppingCart.splice(4,1); 
shoppingCart[3] = 'Green Tea';

console.log(shoppingCart);

let countries = ['Myanmar','Japan','Korea','China','Amarican','England','Thailand','Dubai','North-Korea','Indonesia','Indo','Lao'];
let webTechs = ['Html','Css','JavaScript','React','Php','Python','Vue'];

if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countries.push('Ethiopia');
    console.log(countries);
}

if( webTechs.includes('Sass') ){
    console.log("Sass is a Css preprocess");
}else{
    webTechs.push('Sass');
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// level 3 exericses

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// let g = ages.sort().splice(1,8);
let h = ages.sort();

console.log( (h[4]+h[5])/2 );

let i = ( h[0] + h[1] + h[2] + h[3] + h[4] + h[5] + h[6] + h[7] + h[8] + h[9] ) / 10 ;

console.log(i);

let j = h[9] - h[0];

console.log(j);

let k = h[0] - i;
let l = h[9] - i;

console.log(k,l);

console.log(countries.slice(0,10));

console.log(countries.splice(6,1))

let m = countries.splice(0,6);

console.log(countries);
