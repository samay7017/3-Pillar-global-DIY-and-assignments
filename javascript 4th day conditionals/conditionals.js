// level 1 exercises
//sol 1
 let a = prompt("Enter your age : ");

 if( a >= 18 ){
     console.log("You are old enough to drive.");
 }else if( a > 0 && a < 17 ){
     console.log("You are left with " + (18-Number(a)) + " years to drive");
 }else{
     console.log("please enter a positive age");
 };

//sol2

 let b = prompt("Enter your age: ");
 let myAge = 21;

 if( b > myAge ){
     console.log("You are " + (b-myAge) + " years older than me.");
 }else{
     console.log("I am " + (myAge-b) + " years older than you");
 }


//sol 3
 let c = prompt("a: ");
 let d = prompt("b: ");

 if( c > d ){
     console.log( c + " is greater than " + d );
 }else{
     console.log( d + " is greater than " + c );
 }

 let e = c > d ? "a is greater than b" : "b is greater than a";

 console.log(e);


//sol 4
 
 let f = prompt("Enter a number: ");

 if( f % 2 == 0){
     console.log( f + " is an even number.");
 }else{
     console.log( f + " is an odd number.");
 };

//level 2 exercises
//sol 1
 let g = prompt("Enter Marks: ");

 if( g >= 90 && g <= 100 ){
     console.log("A");
 }else if( g >= 70 && g <= 89 ){
     console.log("B");
 }else if( g >= 60 && g <= 69 ){
     console.log("C");
 }else if( g >= 50 && g <= 59 ){
     console.log("D");
 }else if( g >= 0 && g <= 49 ){
     console.log("F");
 }else{
     console.log("Marks should be between 0 and 100");
 };

// sol 2

 let h = prompt("Enter a month: ").toLowerCase();

 if( h == "september" || h == "october" || h == "november" ){
     console.log("The season is Autumn.");
 }else if( h == "december" || h == "january" || h == "february" ){
     console.log("The season is Winter.");
 }else if( h == "march" || h == "april" || h == "may" ){
     console.log("The season is Spring.");
 }else if( h == "june" || h == "july" || h == "august" ){
     console.log("The season is Summer.");
 }else{
     console.log("Enter a month please!")
 };
//3
 let i = prompt("What is the day today?").toLowerCase();
 let j = i.charAt(0).toUpperCase();

 if( i == "saturday" || i == "sunday" ){
     console.log( j + i.slice(1,10) + " is a weekend.");
 }else if( i == "monday" || i == "tuesday" || i == "wednesday" || i == "thursday" || i == "friday" ){
     console.log( j + i.slice(1,10) + " is a working day.");
 }else{
     console.log("Enter the day please!");
 };

//Exercises: Level 3
//1
let k = prompt("Enter a month: ").toLowerCase();
let l = k.charAt(0).toUpperCase();
let m = prompt("Enter a full year: ");

if( k == "september" || k == "april" || k == "june" || k == "november" ){
    console.log( l + k.slice(1,15) + " has 30 days.");
}else if( k == "january" || k == "march" || k == "may" || k == "july" || k == "august" || k == "octomber" || k == "december" ){
    console.log( l + k.slice(1,15) + " has 31 days.");
}else if( Number(m) % 4 == 0 && k == "february" ){
    console.log( l + k.slice(1,15) + " has 29 days.");
}else if( Number(m) % 4 !== 0 && k == "february" ){
    console.log( l + k.slice(1,15) + " has 28 days.");
}else{
    console.log("Enter a correct month and year please!");
};

