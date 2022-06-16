// Exercises: Level 1

const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
.then(Response => Response.json())
.then(countries => {
    for(country of countries){
        let a = [];
        a.push(country.name);
        a.push(country.capital);
        a.push(country.languages);
        a.push(country.population);
        a.push(country.area);

        console.log(a);
    };
})
.catch(err => console.log(err));

// // Exercises: Level 2

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
.then(Response => Response.json())
.then(cats => {
    let catNames = [];
    for(cat of cats){        
        catNames.push(cat.name);
    };
    console.log(catNames);
})
.catch(err => console.log(err));

// Exercises: Level 3

let a = async () => {
    try {
        let response = await fetch(catsAPI);
        let cats = await response.json();
        let average = [];        
        for(cat of cats){
            let c = cat.weight.metric.split(' - ');
            let ds = [];
            for(let i = Number(c[0]);i <= Number(c[1]);i++){
                ds.push(i);
            };
            let b = 0;
            for(d of ds){
                b += d;
            };
            let e = b / ds.length;
            average.push(e);
        };
        console.log(average);
        
    } catch (err) {
        console.log(err)
    };
};

a();

let b = async () => {
    try {
        let response = await fetch(countriesAPI);
        let countries = await response.json();
        let c = [];
        for(let i = 0;i < 10;i++){
            let a = 0;
            for(country of countries){
                if(country.area > a){
                    a = country.area;
                };
            };           
            let b = countries.filter( el => el.area == a);
            c.push(b);
            let d = countries.filter( el => el.area !== a);
            countries = d;
        }
        let e = [];
        for(let j = 0;j < c.length;j++){
            e.push(c[j][0].name);
        };
        console.log(e);
    } catch (err) {
        console.log(err);
    };
};

b();

fetch(countriesAPI)
.then(response => response.json())
.then(countries => {
    let as = [];
    for(country of countries){
        as.push(country.languages);
    };
    let bs = [];
    for(aa of as){
        for(let i = 0;i < aa.length;i++){
            bs.push(aa[i]);
        };
    };
    let c = [];
    for(ba of bs){
        c.push(ba.name);
    };
    let d = new Set(c);
    console.log(d);
})
.catch( err => console.log(err));

