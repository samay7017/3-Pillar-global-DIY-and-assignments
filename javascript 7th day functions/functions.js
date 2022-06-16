      function fullName(){
    let fullName = 'samay Singh';
    console.log(fullName);
};

fullName();
//2
function fullNamegen(firstName,lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}

console.log(fullNamegen('Samay Singh','tevatiya'));
//3
function addNumbers(num01,num02){
    let sum = num01 + num02;
    return sum;
}

console.log(addNumbers(3,7));
//4
function areaOfRectangle(length,width){
    let area = length * width;
    return area;
}

console.log(areaOfRectangle(23,35));
//5
function perimeterOfRectangle(length,width){
    let perimeter = 2 * (length + width);
    return perimeter;
}

console.log(perimeterOfRectangle(23,35));
//6
function volumeOfRectPrism(length,width,height){
    let volume = length * width * height;
    return volume;
}

console.log(volumeOfRectPrism(23,35,13));
//7
function areaOfCircle(r){
    let area = 3.14 * r * r;
    return area;
}

console.log(areaOfCircle(26));
//8
function circumOfCircle(r){
    let circum = 2 * 3.14 * r;
    return circum;
}

console.log(circumOfCircle(26));
//9
function density(mass,volume){
    let density = mass / volume;
    return density;
}

console.log(density(25,34));
//10
function speed(distance,time){
    let speed = distance / time;
    return speed;
}

console.log(speed(26,5));
//11
function weight(mass,gravity){
    let weight = mass * gravity;
    return weight;
}
console.log(weight(25,9.8));
//12
function convertToF(C){
    let F = (C * (9 / 5)) + 32;
    return F;
}

console.log(convertToF(37));
//13
function BMI(weight,height){
    let bmi = weight / (height * height);
    if( bmi < 18.5 ){
        console.log('This person is underweight.');
    }else if( bmi > 18.5 && bmi < 24.9){
        console.log('This person is normal weight.');
    }else if( bmi > 25 && bmi < 29.9 ){
        console.log('This person is overweight.');
    }else if( bmi > 30 ){
        console.log('This person is obese.');
    }else{
        console.log('Please only input weight and height in number!');
    }
    return bmi;
}

let menWeight = [90,65,78,103,88,99,50];
let menHeight = [1.75 , 2 , 1.5 , 2.3 , 2.5 , 1.2 , 3.6];
let womenWeight = [67,55,45,63,76,80,90];
let womenHeight = [1.3 , 1.5 , 1 , 2 , 1.9 , 2.3 , 1.6];

for(let i = 0;i < 7;i++){

    console.log(BMI(menWeight[i],menHeight[i]));
    console.log(BMI(womenWeight[i],womenHeight[i]));

};

//14
function checkSeason(x){
    let month = x.toLowerCase();
    if( month == 'september' || month == 'october' || month == 'november' ){
        return 'Autumn';
    }else if( month == 'december' || month == 'january' || month == 'february' ){
        return 'Winter';
    }else if( month == 'march' || month == 'april' || month == 'may' ){
        return 'Spring';
    }else if( month == 'june' || month == 'july' || month == 'august' ){
        return 'Summer';
    }else{
        console.log('Please only enter a month!');
    };
};

console.log('This season is ' + checkSeason('September') + '.');
//15
function findMax(a,b,c){
    return Math.max(a,b,c);
}

console.log(findMax(0,-10,-2));

// Exercises: Level 2
//3
function printArray(ds){
    for(d of ds){
        console.log(d);
    }
}

let e = [1,2,7,4,6,77,8];

printArray(e);

let date = new Date;
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

//4
function showDateTime(){
    let a = day < 10 ? `0${day}` : `${day}`;
    let b = month < 10 ? `0${month}` : `${month}`;
    let c = hour < 10 ? `0${hour}` : `${hour}`;
    let d = minute < 10 ? `0${minute}` : `${minute}`;
    
    let time = a + '/' + b + '/' + year + ' ' + c + ':' + d;
    
    console.log(time);
}

showDateTime();

//5
function swapValues(a,b){
    let x = b;
    let y = a;
    console.log(x,y);
}

swapValues(3,4);

//6
function reverseArray(a){
    let b = [];
    for(let i = a.length-1;i >= 0;i--){
        b.push(a[i]);
    };
    console.log(b);
    return b;
};

reverseArray([1,3,4,5,6,7,8]);
//7
function capitalizeArray(as){
    let b = [];
    for(a of as){
        b.push(a[0].toUpperCase() + a.slice(1));
    };
    console.log(b);
}

let names = ['samay' ,'akash','rahul','vivek', 'himdari'];

capitalizeArray(names);
//8
let b = [];

function addItem(a){
    b.push(a);
    console.log(b);
    return b;
};

addItem('apple');
addItem('orange');
addItem(names[0]);
//9
function removeItem(a){
    a.pop();
    console.log(a);
};

removeItem(names);
removeItem(names);
//10
let numbers = [1,3,5,6,8,65,4,56,34,5,2,45,67,543,5,7,56,10];

function sumOfNumbers(as){
    let b = 0;
    for(a of as){
        b = b + a;
    }
    console.log(b);
}

sumOfNumbers(numbers);
//11
function sumOfOdds(as){
    let b = 0;
    for(a of as){
        if( a % 2 !== 0){
            b = b + a;
        };
    };
    console.log(b);
};

sumOfOdds(numbers);
//12
function sumOfEvens(as){
    let b = 0;
    for(a of as){
        if( a % 2 == 0 ){
            b = b + a;
        };
    };
    console.log(b);
};

sumOfEvens(numbers);
//13
function evensAndOdds(as){
    let b = [];
    let c = [];
    for(a of as){
        if( a % 2 == 0 ){
            b.push(a);
        };
        if( a % 2 !== 0 ){
            c.push(a);
        };
    }
    console.log('The number of evens are ' + b.length);
    console.log('The number of odds are ' + c.length);
};

evensAndOdds(numbers);
//14
function z(){
    let a = 0;
    for(let i = 0;i<arguments.length;i++){
        a = a + arguments[i];
    };
    console.log(a);
};

z(1,3,5,7,9,13,5,-3);
//15
function randomUserIp(){
    let b = [];
    for(let i = 0;i < 4;i++){
        let a = Math.ceil(Math.random()*255);
        b.push(a);
    }
    let c = b.join('.');
    console.log(c);
};

randomUserIp();
//16
function randomMacAddress(){
    let b = [];
    for(let i = 0;i < 6;i++){
        let a = (Math.random() * 100).toString(36).substring(7).slice(2,4);
        b.push(a);
    }
    let c = b.join(':');
    console.log(c);
};

randomMacAddress();
//17
function randomHexaNumberGenerator(){
    let a = (Math.random() * 100).toString(36).substring(2).slice(2,8);
    let b = `#${a}`;
    console.log(b);
}

randomHexaNumberGenerator();
//18
function userIdGenerator(){
    let a = (Math.random() * 100).toString(36).substring(2).slice(2,9);
    let b = a.toUpperCase();
    console.log(b);
};

userIdGenerator();

// Exercises: Level 3
//1
function userIdGeneratedByUser(){
    let pool = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let id_num = Number(prompt("how many id do you want to generate?"));
    let chars_num = Number(prompt("how many chars do you want to generate?"));
    let ids = [];
    for (i = 0; i < id_num; i++) {
        ids[i] = "";
        for (k = 0; k < chars_num; k++) {
            ids[i] += pool[Math.floor(Math.random() * chars_num.length)];
        }
        return ids
    }
    }
//2

function rgbColorGenerator(){
    let b = [];
    for(let i = 0;i < 3;i++){
        let a = Math.floor(Math.random() * 255);
        b.push(a);
    }
    let c = `rgb(${b[0]},${b[1]},${b[2]})`;
    console.log(c);
}

rgbColorGenerator();
//3
let hexaColors = [];

function arrayOfHexaColors(){
    let c = Math.ceil(Math.random() * 10);
    for(let i = 0;i < c;i++){
        let a = (Math.random() * 100).toString(16).substring(2).slice(2,8).toUpperCase();
        let b = `#${a}`;
        hexaColors.push(b);
    }
    console.log(hexaColors);
}

arrayOfHexaColors();
//4
let rgbColors = [];

function arrayOfRgbColors(){
    
    let d = Math.ceil(Math.random() * 10);
    for(let i = 0;i < d;i++){
        let b = [];
        for(let i = 0;i < 3;i++){
            let a = Math.floor(Math.random() * 255);
            b.push(a);
        }
        let c = `rgb(${b[0]},${b[1]},${b[2]})`;
        rgbColors.push(c);
    }
    
    console.log(rgbColors);
}
arrayOfRgbColors();
//5
function convertHexaToRgb(a){
    let b = a.slice(1,7).match(/.{1,2}/g);
    let c = [
        parseInt(b[0],16),
        parseInt(b[1],16),
        parseInt(b[2],16)
    ];
    let d = `rgb(${c[0]},${c[1]},${c[2]})`;
    console.log(d);
}

convertHexaToRgb(hexaColors[0]);
//6
function rgbToHexa(a){
    let b = a.slice(4,20);
    let c = b.slice(0,b.length-1);
    let d = c.split(',');
    let e = [
        Number(d[0]).toString(16).toUpperCase(),
        Number(d[1]).toString(16).toUpperCase(),
        Number(d[2]).toString(16).toUpperCase()
    ];
    let f = `#${e[0]}${e[1]}${e[2]}`;
    console.log(f);
}

rgbToHexa(rgbColors[0]);

console.log('\n');
//7
function generateColors(a,b){
    if( a.toLowerCase() === 'rgb' ){
        let f = [];
        for(let i = 0;i < b;i++){
            let d = [];
            for(let i = 0;i < 3;i++){
                let c = Math.floor(Math.random() * 255);
                d.push(c);
            }
            let e = `rgb(${d[0]},${d[1]},${d[2]})`;
            f.push(e);
        }
        console.log(f);
    }else if( a.toLowerCase() === 'hexa' ){
        let k = [];
        for(let j = 0;j < b;j++){
            let g = (Math.random() * 100).toString(16).substring(2).slice(2,8);
            let h = `#${g}`;
            k.push(h);
        }
        console.log(k);
    }else{
        console.log('Please correct arguments');
    };    
}

generateColors('rgb',4);
//8
function shuffleArray(a){
    
    let c = [];
    for(let i = 0;i < a.length;i++){
        let b = Math.floor(Math.random() * a.length);
        let e = a[i];
        a[i] = a[b];
        a[b] = e;
        
    };
    console.log(a);
}

shuffleArray(names);
//9
function factorial(a){
    let b;
    let c = [a];
    for(let i = 1;i < a;i++){
        b = (a-i);
        c.push(b);
    };
    let d = c.join('*');
    console.log(eval(d));
};

factorial(6);
//10
function isEmpty(a){
    if( a == undefined ){
        console.log('It is empty');
    }else{
        console.log(a);
    }
}

isEmpty('a');
//1
function sum(){
    let a = 0;
    for(let i = 0;i < arguments.length;i++){
        a = a + arguments[i];
    }
    console.log(a);
}

sum(2,1,2);
//12
function sumOfArrayItem(as){
    let sum = 0;
    for(a of as){
        if(typeof(a) == 'number'){
            sum = sum + a;
        }
    }
    if(typeof(a) == 'number'){
        console.log(sum);
    }else{
        console.log('Please enter number only!');
    };
};

sumOfArrayItem(names);
//13
let fruits = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];

function modifyArray(a){
    let b = [];
    for(let i = 0;i < a.length;i++){
        if( a[4] ){
            if( a[i] == a[4] ){
                b.push(a[i].toUpperCase());
            }else{
                b.push(a[i]);
            }           
        }
    };
    
    if(a[4]){
        console.log(b);
    }else{
        console.log("Not Found");
    };
};

modifyArray(fruits);
//14
function isPrime(a){
    let b;
    if( a > 1 ){
        for(let i = 2;i < a;i++){
            if(a % i == 0){
                b = i;     
            };
        };
    };
    if(b){
        console.log(a + ' is not a prime number.');
    }else{
        console.log(a + ' is a prime number.');
    }
};

isPrime(6);
//15
function isUnique(as){
    let b = [];
    for(a of as){
        if(!(b.includes(a))){
            b.push(a);
        }
    }
    if(b.length == as.length){
        console.log('All items are unique.');
    }else{
        console.log('This array is not unique.');
    }
}

isUnique(fruits);


//16
let xxx = [0,1,2,3,4,5,6,7,8,9]

function zzz(a){
    
    let c = [];
    let i = 0;
    while(i < 7){
        let b = Math.floor(Math.random() * 10);
        if( !(c.includes(a[b])) ){
            c.push(a[b]);
            i++;
        };        
    };
    console.log(c);
}

zzz(xxx);

//17
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

function reverseCountries(a){
    let b = [];
    for(let i = a.length;i >= 0;i--){
        b.push(a[i]);
    };
    console.log(b);
};

reverseCountries(countries)




