// Level 1 exercises
let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3));
console.log(challenge.substring(0,2));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(' '));

let softwareCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(softwareCompanies.split(', ')); 

console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

let challengeTrim = " 30 Days Of JavaScript ";

console.log(challengeTrim.trim());

console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/a/gi));

let challengeConcat = "30 Days Of";

console.log(challengeConcat.concat(" JavaScript"));
console.log(challenge.repeat(2));

//Level 2 exercises 

let JohnHolmesQuote = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.";

console.log(JohnHolmesQuote);

let MotherTeresaQuote = "\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"";

console.log(MotherTeresaQuote);

let a = '10';
let b = 10;

console.log(typeof(Number(a)) == typeof(b));

let c = '9.8';

console.log(parseFloat(Math.ceil(Number(c))) == 10);

let d = "python";
let e = "jargon";

console.log(d.includes('on') && e.includes('on'));

let f = "I hope this course is not full of jargon";

console.log(f.includes('jargon'));

let randomNum01 = Math.floor(Math.random() * 101);

console.log(randomNum01);

let randomNum02 = Math.floor(Math.random() * 50) + 50 ;

console.log(randomNum02);

let randomNum03 = Math.floor(Math.random() * 256);

console.log(randomNum03);

let g = "JavaScript";
let randomString = g.charAt(Math.random()*10);

console.log(randomString);

let h = "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"

console.log(h);

console.log(sentence.substring(30,54));

//exercises level 3

let sentence02 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(sentence02.match(/love/gi).length);

console.log(sentence.match(/because/gi).length);

const sentence03 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let sentence03Clean = sentence03.replaceAll("%","").replaceAll("$","").replaceAll("@","").replaceAll("&","").replaceAll("#","").replaceAll(";","").replaceAll("!","");

console.log(sentence03Clean);

let sentence04 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salary = sentence04.match('5000');
let bonus = sentence04.match('10000');
let course = sentence04.match('15000');
let total = Number(salary) + Number(bonus) + Number(course);

console.log(total);

