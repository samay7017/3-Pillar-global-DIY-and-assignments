// Exercises: Level 1
//1
for(let i = 0;i < 11;i++){
    console.log(i);
};

let i=0;

while(i<11){
    console.log(i);
    i++;
};

let j = 0;

do{
    console.log(j);
    j++;
}while(j < 11);

//2
for(let a = 10;a >= 0;a--){
    console.log(a);
};

let b = 10;

while(b >= 0){
    console.log(b);
    b--;
};

let c = 10;

do{
    console.log(c);
    c--;
}while( c >= 0);

let n = 12;
// sol 3

for(let d = 0;d < n+1;d++){
    console.log(d);
};



//4

let g = '';

for( let e = 0;e < 8;e++){
    for( let f = 0;f < e;f++){
        g = g + "#";
    };
    g += '\n';   
};

console.log(g);

//5

for(let i = 0;i < 11;i++){
    let h = `${i} * ${i} = ${ i * i }`;
    console.log(h);
};

//6
for(let i = 0; i < 11;i++){
    let k = `${i}\t\t${ i * i }\t\t${ i * i * i }`;
    console.log(k);
};


//7
for(let i = 0;i < 101;i++){
    if( i % 2 == 0 ){
        console.log(i);
    };
};


//8
for( let i = 0;i < 101;i++){
    if( i % 2 !== 0){
        console.log(i);
    };
};


//10
let sum = 0;

for( let i = 0;i < 101;i++){
    sum = sum + i;
};

console.log('The sum of all numbers from 0 to 100 is ' + sum + '.');


//11
let l = 0;
let m = 0;

for( let i = 0;i < 101;i++ ){
    if( i % 2 == 0 ){
        l = l + i;
    }else{
        m = m + i;
    };
};

console.log('The sum of all evens from 0 to 100 is ' + l + ' and the sums of all odds from 0 to 100 is ' + m);

//12
let o = [];
let p = 0;
let q = 0;

for(let i = 0;i < 101;i++){
    if( i % 2 == 0 ){
        p = p + i;
    }else{
        q = q + i;
    };
};

o.push(p);
o.push(q);

console.log(o);

//13
let r;

for(let i = 0;i < 5;i++){
    r = Math.floor(Math.random() * 10) + 1;
    console.log(r);
}

//14
let s = [];
let t;

while( s.length < 5 ){
    t = Math.floor(Math.random() * 10) + 1;
    if( s.indexOf(t) === -1 ){
        s.push(t);
    };
};

console.log(s);

//15

let u;

for(let i = 0;i < 5;i++){
    u = Math.random().toString(36).substring(3,8);
    console.log(u);
}

// Exercises: Level 2

//1
console.log('\n');

let v = Math.ceil(Math.random() * 10);
let w;

for(let i = 0;i < 5;i++){
    w = Math.random().toString(36).substring(v);
    console.log(w);
};
//2
let x = Math.random().toString(36).substring(2,8);

console.log('#' + x);

//3
let y;
let z = [];

for(let i = 0;i<3;i++){
    y = Math.ceil(Math.random() * 255);
    z.push(y);
}

console.log(`rgb(${z[0]},${z[1]},${z[2]})`);
//4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];



let aa = [];

for(country of countries){
    aa.push(country.toUpperCase());
}

console.log(aa);
//5
let bb = [];

for(country of countries){
    bb.push(country.length);
}

//6
console.log(bb);

let cc = [];
let dd = [];


for(country of countries){
    dd.push(country,country.slice(0,3).toUpperCase(),country.length);
    cc.push(dd);
    dd = [];
}

console.log(cc);
//7
let ee = [];

for(country of countries){
    if(country.includes('land')){
        ee.push(country);
    }
}

if( ee.length == 0 ){
    console.log('All these countries are without land.');
}else{    
    console.log(ee);   
};


//8
let ff;
let gg = [];

for(country of countries){
    ff = country.length - 2;
    if(country.substring(ff) == 'ia'){
        gg.push(country);
    }
}

if( gg.length == 0 ){
    console.log('All these countries are without ia.');
}else{    
    console.log(gg);   
};


//9
let hh;

for(country of countries){
    hh = country.length;
    if(8-hh == 0){
        console.log(country);
    }
}

let ii;

for(country of countries){
    ii = country.length;
    if(ii-5 === 0){
        console.log(country);
    }
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
//11
let jj = 0;

for(let i = 0;i < webTechs.length;i++){
    if(webTechs[i].length > jj){
        jj = webTechs[i].length;
    };
};

console.log(jj);
//12
let kk = [];
let ll = [];

for(webTech of webTechs){
    ll.push(webTech,webTech.length);
    kk.push(ll);
    ll = [];
}

console.log(kk);


//14
let mms = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for(mm of mms){
    console.log(mms);
};


//15
let nn = ['banana', 'orange', 'mango', 'lemon'];
let oo = [];

for(let i=4;i >= 0;i--){
    oo.push(nn[i]);
}

console.log(oo);
//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let frontEnd = fullStack[0];
let backEnd = fullStack[1];

let pps = frontEnd.concat(backEnd);

for(pp of pps){
    console.log(pp);
};

// Exercises: Level 3

const cont = [
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
]

let bas = [];

for(a of cont){
    bas.push(a);
};

sortedCountries = b.sort();

console.log(sortedCountries);

const ccs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let ccc = ccs.sort();
let ddd = mernStack.sort();

console.log(ccc,ddd);

for(sortedCountry of sortedCountries){
    if(sortedCountry.includes('land')){
        console.log(sortedCountry);
    };
};

let eee = 0;
let fffs = [];

for(let i=0;i<sortedCountries.length;i++){
    if(sortedCountries[i].length > eee){
        eee = sortedCountries[i].length;
        fffs.push(sortedCountries[i]);
    };
};

console.log(fffs[fffs.length-1]);

for(sortedCountry of sortedCountries){
    if(sortedCountry.length == 4){
        console.log(sortedCountry);
    };
};

for(sortedCountry of sortedCountries){
    if(sortedCountry.includes(' ')){
        console.log(sortedCountry);
    };
};

let gggs = [];
let hhh = sortedCountries.length-1;

for(let i = 192;i >= 0;i--){
    gggs.push(sortedCountries[i].toUpperCase());
}

console.log(gggs);




