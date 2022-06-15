//level 1 exercises
let firstName = "Samay ";
let lastName = "Singh";
let country = "India";
let city = "Mathura";
let age = 21;
let isMarried = false;
let year = new Date().getFullYear();

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year),year);

console.log(typeof('10') == typeof(10));
console.log(parseInt('9.8') == 10);

console.log(5>3);
console.log(5<3);

console.log( 4 > 3);
console.log( 4 >= 3);
console.log( 4 < 3);
console.log( 4 <= 3);
console.log( 4 == 4);
console.log( 4 === 4);
console.log( 4 != 4);
console.log( 4 !== 4);
console.log( 4 != '4');
console.log( 4 == '4');
console.log( 4 === '4');

let a = "python";
let b = "jargon";

console.log(a.length == b.length);

console.log( 4 > 3 && 10 < 12 );
console.log( 4 > 3 && 10 > 12 );
console.log( 4 > 3 || 10 < 12 );
console.log( 4 > 3 || 10 > 12 );
console.log( !(4 > 3) );
console.log( !(4 < 3) );
console.log( !(false) );
console.log( !( 4 > 3 && 10 < 12) );
console.log( !( 4 > 3 && 10 > 12) );
console.log( !(4 === '4') );
console.log( !(a.includes('on')) , !(b.includes('on')) );

let c = new Date();

console.log(c.getFullYear());
console.log(c.getMonth());
console.log(c.getDate());
console.log(c.getDay());
console.log(c.getHours());
console.log(c.getMinutes());
console.log(c.getSeconds());
console.log(c.getTime());

//Exercises of Level 2

 let d = prompt("Enter base: ");
 let e = prompt("Enter height: ");
 let f = 0.5 * Number(d) * Number(e);

 console.log("The area of the triangle is " + f);

 let g = prompt("Enter side a:");
 let h = prompt("Enter side b:");
 let i = prompt("Enter side c:");
 let j = Number(g) + Number(h) + Number(i);

 console.log("The perimeter of the triangle is " + j)

 let k = prompt("Enter length: ");
 let l = prompt("Enter width: ");
 let m = Number(k) * Number(l);
 let n = 2 * (Number(k) + Number(l));
 console.log("The area of triangle is " + m + " and the perimeter of triangle is " + n);

 let o = prompt("Enter radius: ");
 let PI = 3.14;
 let p = PI * o * o;
 let q = 2 * PI * o;
 console.log("The area of circle is " + p + " and the circumference of circle is " + q);

 let r = prompt("Enter hours: ");
 let s = prompt("Enter rate per hours: ");
 let t = Number(r) * Number(s);

 console.log("Your weekly earning is " + t);
 let u = prompt("Your name: ");
 let v = u.length > 7 ? "Your name is long" : "Your name is short";

 console.log(v);

 let yourFirstName = prompt("Your first name is ");
 let yourFamilyName = prompt("Your family name is ");
 let w = yourFirstName.length > yourFamilyName.length ? "Your first name, " + yourFirstName + " is longer than your family name, " + yourFamilyName : "Your family name, " + yourFamilyName + " is longer than your first name, " + yourFirstName;

 console.log(w);

 let yourAge = 30;

 console.log("You are "+ (yourAge-age) +" years older than me");

 let x = prompt("Enter birth years: ");
 let y = c.getFullYear() - Number(x);
 let z = y > 18 ? "You are " + y + ".You are old enough to drive." : "You are "+ y + ".You will be allowed to drive after "+ (18-y) +" years.";

 console.log(z);

 let aa = prompt("Enter number of years you live: ");
 let bb = Number(aa) * 31556952;

 console.log("You lived " + bb + " seconds.");

 let cc = c.getDate();
 let dd = c.getMonth() + 1;
 let ee = c.getFullYear();
 let ff = c.getHours();
 let gg = c.getMinutes();

 console.log( ee + "-" + dd + "-" + cc + " " + ff + ":" + gg);
 console.log( cc + "-" + dd + "-" + ee + " " + ff + ":" + gg);
 console.log( cc + "/" + dd + "/" + ee + " " + ff + ":" + gg);

//Exercises: Level 3

let date = new Date();

let hh = date.getDate();
let ii = date.getMonth() + 1;
let jj = date.getFullYear();
let kk = date.getHours();
let ll = date.getMinutes();

let mm = Number(hh) < 10 ? "0"+hh.toString() : Number(hh);
let nn = Number(ii) < 10 ? "0"+ii.toString() : Number(ii);
let oo = Number(kk) < 10 ? "0"+kk.toString() : Number(kk);
let pp = Number(ll) < 10 ? "0"+ll.toString() : Number(ll);

let Time = jj + "-" + nn + "-" + mm + " " + oo + ":" + pp;

console.log(Time);

//Done Day 03


