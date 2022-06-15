// Exercises: Level 1

let dog = {
    name: 'bruno whity',
    legs: 4,
    color: 'white',
    age: 2,
    bark: function(){
        return 'woof woof! get away hooman';
    }
};

dog.breed = "labrador";
dog.getDogInfo = `Dog\'s name is ${dog.name} and he is a ${dog.breed} and ${dog.age} years old.\nHe has ${dog.legs} legs and his color is ${dog.color}.`

console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.breed);
console.log(dog.getDogInfo);

// Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux','Node',],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js','Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React',],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 60
    },
};

let keys = Object.keys(users);
let values = Object.values(users.Alex);
let entries = Object.values(users);
//solution 1
function skills(){    
    let a;
    let b = 0;
    let c = [];

    for(let i = 0;i < keys.length;i++){
        a = entries[i].skills;
        if(a.length > b){
            b = a.length;
            c.push(keys[i]);            
        };
    };

    let d = c[c.length-1];
    console.log(d + ' has many skill in users object.');
    
};

skills();

//2 solution
function pointsCalculator(){
    let a = [];
    let b = [];
    for(let i = 0;i < keys.length;i++){
        if(entries[i].isLoggedIn){
            a.push(entries[i]);
        };

        if(entries[i].points >= 50){
            b.push(entries[i]);
        }
    };
    console.log(`${a.length} users is logged in.`)
    console.log(`${b.length} users\'s points are greater than or equal to 50 points.`)
};

pointsCalculator();
//solution 3 
function mern(){
    let as;
    let b;
    for(let i = 0;i < keys.length;i++){
        as = entries[i].skills;
        
        if(as.indexOf('MongoDB') > 0 && as.indexOf('Express') > 0 && as.indexOf('React') > 0 && as.indexOf('Node') > 0){
            console.log(keys[i] + ' are MERN stack developer.');
        };
    };
    
};

mern();

//4
let obj = {};

function nameAdd(){
    for(let i = 0;i < keys.length;i++){
        obj = users;
        obj.name = 'Samay Singh';
    };
    console.log(obj);
};


nameAdd();
//5
function propertiesPrint(){
    let a;
    let b;
    let c;
    for(let i = 0;i < keys.length;i++){
        a = users[keys[i]];
        b = Object.values(a);

        for(let i = 0;i < b.length;i++){
            c = b[i];
            console.log(b[i]);
        };
        
    };
};

propertiesPrint();

let countries = {
    1 : {
        name : 'India',
        capital : 'New Delhi',
        population : 1250000000,
        languages : 'Hindi'
    },
};

console.log(Object.values(countries));

// Exercises: Level 3

let personAccount = {
    firstName : 'Samay',
    lastName : 'Singh',
    incomes : [300000,20000,450000,120000],
    expenses : [50000,3400,12000,120000],
    totalIncome : function(){
        let totalIncome = 0;
        for(let i = 0;i < this.incomes.length;i++){
            totalIncome = totalIncome + this.incomes[i];           
        };
        return totalIncome;
    },
    totalExpense : function(){
        let totalExpense = 0;
        for(let i = 0;i < this.expenses.length;i++){
            totalExpense = totalExpense + this.expenses[i];            
        };
        return totalExpense;
    },
    accountInfo : function(){
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    },
    addIncome : function(a){
        this.incomes.push(a);
        return this.incomes;
    },
    addExpense : function(b){
        this.expenses.push(b);
        return this.expenses;
    },
    accountBalance : function(){
        let accountBalance;
        let totalIncomes = 0;
        let totalExpenses = 0;
        for(let i = 0;i < this.incomes.length;i++){
            totalIncomes = totalIncomes + this.incomes[i];
        }
        for(let i = 0;i < this.expenses.length;i++){
            totalExpenses = totalExpenses + this.expenses[i];
        }
        accountBalance = totalIncomes - totalExpenses;
        return accountBalance;
    },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(500));
console.log(personAccount.addExpense(600));
console.log(personAccount.accountBalance());

const userss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

//2
let input1 = {
    username: 'Alex',
    email: 'alex@slex.com',
    password: '123123',
};

function signUp(a){
    let check = true;
    for(let i = 0;i < userss.length;i++){
        if( a.email === userss[i].email ){
            console.log('This id has already an account.');
            check = false;
        };        
    };
    if(check){
        userss.push(a);
    };
};

signUp(input1);

let input02 = {
    username: 'Samay',
    email: 'ssamaysinght@gmail.com',
    password: '123123',
};

function signIn(a){
    let check = false;
    for(let i = 0;i < userss.length;i++){
        if( a.email === userss[i].email ){
            console.log('You are now sign in.');
            check = true;
        };
    };
    if(!(check)){
        console.log('Incorrect');
    };
};

signIn(input02);


const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
];
//4
let input04 = {
    ProductName: 'Laptop',
    userId: 'ab12ex',
};

function likeProduct(a){
    for(let i = 0;i < products.length;i++){
        if(a.ProductName == products[i].name){
            if(products[i].likes.includes(a.userId)){
                let b = [];
                b.push(products[i].likes);

                for(let j = 0;j < b[0].length;j++){
                    if(b[0][j] === a.userId){
                        b[0].splice(j);
                    };
                };               
            }else{
                products[i].likes.push(a.userId);
            };
        };
    };
    console.log(products);
};

likeProduct(input04);

let input03 = {
    ProductName : 'mobile phone',
    user : {
        userId : 'ab12ex',
        rate : 3
    }
};

//3
function rateProduct(a){
    for(let i = 0;i < products.length;i++){
        if(a.ProductName === products[i].name){
            products[i].ratings.push(a.user);
        };
    };
    console.log(products);
};

rateProduct(input03);
  

function averageRating(){
    let as = [];
    let b = [];
    let c = 0;
    for(let i = 0;i < products.length;i++){
        as.push(products[i].ratings);
    };
    for(a of as){
        if(a[0]){
            for(let i = 0;i < a.length;i++){
                b.push(a[i]);
            };
        };
    };
    for(let i = 0;i < b.length;i++){
        c = c + b[i].rate;
    };
    let average = c / b.length;
    console.log(average);
};

averageRating();
